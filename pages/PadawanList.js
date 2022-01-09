import React from 'react'
import {useState} from "react"
import Player from "./components/player";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
const dbRef = ref(getDatabase());
const db = getDatabase();

const getName = ref(db, 'padawans/' + 1 + '/name');
onValue(getName, (snapshot) => {
  const data = snapshot.val();
  console.log(data +"yooo");
});





const PadawanList = () => {
  const [daata, setDaata] = useState();
  get(child(dbRef, 'padawans/')).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("ur name = " + data[1].name);
      setDaata(data);
    }
  });
    const [data, setData] = useState({
        "name": "Default product template",
    
        "padawans": {
    
          "1": {
            "name": "Aleem",
            "pfp": "../public/img/pfp/aleem.png",
            "time": "EST"
        },
          "2": {
            "name": "Eason",
            "pfp": "../public/img/pfp/pfp.png",
            "time": "EST"
        },
    
        "3": {
          "name": "Jake",
          "pfp": "../public/img/pfp/pfp.png",
          "time": "EST"

      },
        "4": {
          "name": "Dickson",
          "pfp": "../public/img/pfp/pfp.png",
          "time": "EST"
    
        },
        "5": {
          "name": "Amrita",
          "pfp": "../public/img/pfp/pfp.png",
          "time": "PST"
        },
        "6": {
          "name": "Zach",
          "pfp": "../public/img/pfp/pfp.png",
          "time": "PST"
        },
        "7": {
          "name": "Tavia",
          "pfp": "../public/img/pfp/pfp.png",
          "time": "PST"
        },
        "8": {
          "name": "Ava",
          "pfp": "../public/img/pfp/pfp.png",
          "time": "idk london lol"
        },
        "9": {
          "name": "GitE",
          "pfp": "../public/img/pfp/pfp.png",
          "time": "IST"
        }
      }
    });
        
    let cards = []
    if (data) {
        const PadawanKeys = Object.keys(data.padawans)
        cards = PadawanKeys.map(index => {
        const PadawanData = data.padawans[index]
        return (
        <span key={index}>
            <Player name={PadawanData.name} time={PadawanData.time} pfp={PadawanData.pfp} />
        </span>
        )
        })
  }

  return cards
}

export default PadawanList