import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./UserCard.module.css";

import IconButton from "@mui/material";
import { Twitter } from "@mui/icons-material";

function CalcAge(birthday: string) {
	const dob = new Date(birthday);
	//calculate month difference from current date in time
	const month_diff = Date.now() - dob.getTime();

	//convert the calculated difference in date format
	const age_dt = new Date(month_diff);

	//extract year from date
	const year = age_dt.getUTCFullYear();

	//now calculate the age of the user
	const age = Math.abs(year - 1970);
	return age;
}

interface UserCardProps {
	name: string;
	birthday: any;
	URL: string;
	address: string;
	about: string;
	organization: string;
	skills: string[];
	timezone: string;
	twitter: string;
	events: string[];
}

function Tag(props: { value: string }) {
	return (
		<div className="bg-black p-2 w-fit rounded-xl">
			<p className="text-white">{props.value}</p>
		</div>
	);
}

function UserCard(props: UserCardProps) {
	const PFPP = "https://staging-dashboard.padawandao.com/banner.png";
	const PFP = "https://staging-dashboard.padawandao.com/img/pfp/aleem.png";

	if (props.about) {
		const about = props.about
			.replace(/(\r\n|\r|\n){2}/g, "$1")
			.replace(/(\r\n|\r|\n){3,}/g, "$1\n");
	}

	return (
		<div className="flex justify-center">
			<div className="border-4 border-black rounded-2xl w-fit max-w-md bg-stone-900 text-white">
				{/* header and pfp */}
				<div className="relative pb-16">
					<div className="">
						<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-t-xl p-10" />
					</div>
					<div className="flex justify-center  ">
						<div className=" md:w-24 absolute top-8 ">
							<Image
								src={props.URL}
								alt="pfp"
								width={100}
								height={100}
								className="rounded-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="text-center font-semibold text-xl pt-2 pb-2">
					<h1 style={{ fontFamily: "Poppins", fontSize: "28px" }}>
						{props.name}
					</h1>
					<span>
						<h1 className="pt-2">
							<a href={props.twitter}>
								<Twitter sx={{ fontSize: "30px", color: "#1DA1F2" }} />
							</a>
							&nbsp;&nbsp;
							{`${CalcAge(props.birthday)} y/o`} | {props.timezone}
						</h1>
					</span>
				</div>
				<div className="pl-8 pr-8">
					<div className="flex space-x-2 justify-center pb-4"></div>
					<div className="flex space-x-2 justify-center pb-4">
						{props.events && <Tag value={props.events[0]} />}
						<Tag value={props.organization} />
					</div>

					<div className="pb-4">
						<h1 className="text-3xl font-semibold pb-1 ">About Me</h1>
						<p className="h-40"> {props.about} </p>
					</div>

					<div className="mt-5">
						<h1 className="text-3xl font-semibold">Skills </h1>
						<div className="flex space-x-4 pt-2">
							{props.skills &&
								props.skills.map(
									(skill: string, index: number) =>
										skill.replace(" ", "") !== "" && (
											<Tag key={index} value={skill} />
										)
								)}
						</div>
					</div>
				</div>

				<div className="pb-12"></div>
			</div>
		</div>
	);
}

export default UserCard;
