import React from "react";
import { useState, useEffect } from "react";
import UserCard from "../atoms/UserCard/UserCard";
import PlayerSkeleton from "../atoms/playerSkeleton";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { GetPadawans, GetPadawansTest, GetPFP } from "../../FirebaseUtils";
const dbRef = ref(getDatabase());
const db = getDatabase();

const getName = ref(db, "padawans/" + 1 + "/name");

const PadawanList = props => {
	const [data, setData] = useState();
	const [pfp, setPfp] = useState();
	const [time, setTime] = useState();

	let { sortby, includeEvents, searchQuery } = props;
	if (includeEvents) includeEvents = includeEvents.map(e => e.value);
	useEffect(() => {
		GetPadawansTest()
			.then(d => setData(d))
			.catch(err => console.log(err));
	}, []);
	useEffect(() => {
		GetPFP()
			.then(d => setPfp(d))
			.catch(err => console.log(err));
	}, []);

	let cards = [];

	const SkeletonArray = [
		"79568777",
		"363714261",
		"595967632",
		"662929773",
		"925201439",
		"926241951",
	];
	setTimeout(() => {
		setTime(true);
	}, 1700);

	if (!data || !time) {
		let PadawanKeys = SkeletonArray;
		cards = PadawanKeys.map(index => {
			return (
				<span key={index}>
					<PlayerSkeleton />
				</span>
			);
		});
	}

	if (data && time == true) {
		let PadawanKeys = Object.keys(data);

		if (searchQuery) {
			PadawanKeys = PadawanKeys.filter(index => {
				return data[index].name.toLowerCase().includes(searchQuery.toLowerCase());
			});
		}

		if (includeEvents !== undefined) {
			PadawanKeys = PadawanKeys.filter(index => {
				const events = data[index].events;
				for (let event of events) {
					if (includeEvents.includes(event)) return true;
				}
				return false;
			});
		}

		if (sortby && sortby.toLowerCase() == "name") {
			PadawanKeys.sort((a, b) => {
				const nameA = data[a].name.toLowerCase();
				const nameB = data[b].name.toLowerCase();
				if (nameA > nameB) return 1;
				return -1;
			});
		}
		cards = PadawanKeys.map(index => {
			const PadawanData = data[index];
			return (
				<span key={index}>
					<UserCard {...PadawanData} />
				</span>
			);
		});
	}

	return cards;
};

export default PadawanList;
