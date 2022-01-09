import React from 'react'
import {useState, useEffect} from "react"
import Player from "./components/player";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { GetPadawans, GetPFP } from '../FirebaseUtils';
import PlayerCard from './components/PlayerCardConcept';
const dbRef = ref(getDatabase());
const db = getDatabase();

const getName = ref(db, 'padawans/' + 1 + '/name');

// onValue(getName, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data +"yooo");
// });





const PadawanList = () => {
  const [data, setData] = useState();
  const [pfp, setPfp] = useState();
  useEffect(() => {
    GetPadawans()
      .then(d => setData(d))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    GetPFP()
      .then(d => setPfp(d))
      .catch(err => console.log(err))
  }, [])
  console.log(pfp + "this is state");

    let cards = []
    if (data) {
        const PadawanKeys = Object.keys(data)
        cards = PadawanKeys.map(index => {
        const pfpp = pfp + [index] + ".jpeg"
        const PadawanData = data[index]
        const {name, time} = PadawanData
        return (
        <span key={index}>
            <PlayerCard pfpURL={pfpp} name = {name} timeZone={time}/>
            {/* <Player name={PadawanData.name} time={PadawanData.time} pfp={pfpp} bg={PadawanData.pfp} /> */}
        </span>
        )
        })
  }

  return cards
}

export default PadawanList