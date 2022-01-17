import React from 'react'
import {useState, useEffect} from "react"
import Player from "./components/player";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { GetPadawans, GetPadawansTest, GetPFP } from '../FirebaseUtils';
const dbRef = ref(getDatabase());
const db = getDatabase();

const getName = ref(db, 'padawans/' + 1 + '/name');

// onValue(getName, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data +"yooo");
// });





const PadawanList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    GetPadawansTest()
      .then(d => setData(d))
      .catch(err => console.log(err))
  }, [])


    let cards = []
    if (data) {
        const PadawanKeys = Object.keys(data)
        
        cards = PadawanKeys.map(index => {
        const PadawanData = data[index]
        const { name, URL,  } = PadawanData
        return (
          <span key={index}>
              <Player name={name} pfp={URL} bg={"/banner.png"} />
          </span>
        )
        })
  }

  return cards
}

export default PadawanList