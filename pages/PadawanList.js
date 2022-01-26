import React from 'react'
import {useState, useEffect} from "react"
import Player from "./components/player";
import PlayerSkelton from "./components/playerSkeleton";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { GetPadawans, GetPadawansTest, GetPFP } from '../FirebaseUtils';
const dbRef = ref(getDatabase());
const db = getDatabase();

const getName = ref(db, 'padawans/' + 1 + '/name');


const PadawanList = (props) => {
  const [data, setData] = useState();
  const [pfp, setPfp] = useState();
  const [time, setTime] = useState();

  let { sortby, includeEvents, searchQuery } = props
  if (includeEvents) includeEvents = includeEvents.map(e => e.value)
  useEffect(() => {
    GetPadawansTest()
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




const Hi = [
  "79568777",
  "363714261",
  "595967632",
  "662929773",
  "925201439"
]


  setTimeout(() => {
    setTime(true);
  }, 1700);


if ( !data || !time) {
  const PadawanKeys = Hi
  cards = PadawanKeys.map(index => {

  return (
    
  <span key={index}>
   
      <PlayerSkelton />
   
  </span>
  )
  })
 
}


    if (data && time==true) {
      let PadawanKeys = Object.keys(data)

      if (searchQuery) {
        PadawanKeys = PadawanKeys.filter((index) => {
          // data[index].name.toLowercase().includes(searchQuery.toLowerCase())
          // return false
          return data[index].name.toLowerCase().includes(searchQuery.toLowerCase())
        })
      }

      if (includeEvents !== undefined) {
        PadawanKeys = PadawanKeys.filter((index) => {
          const events = data[index].events
          for (let event of events) {
            if (includeEvents.includes(event)) return true
          }
          return false
        })
      }
      
      if (sortby && sortby.toLowerCase() == "name") {

        PadawanKeys.sort((a, b) => {
          const nameA = data[a].name.toLowerCase()
          const nameB = data[b].name.toLowerCase()
          if (nameA > nameB) return 1
          return -1
        })
      }

      
      cards = PadawanKeys.map(index => {
      const PadawanData = data[index]
      const {name, URL, address, about, skills, timezone, twitter} = PadawanData
      return (
        <span key={index}>
            {/* <Player name={name} pfp={URL} bg={"/banner.png"} /> */}
            <Player {...PadawanData} />

        </span>
      )
      })
  }

  



  return cards
}

export default PadawanList