import React from 'react'
import {useState} from "react"
import Player from "./components/player";

export const PadawanList = () => {
    const [data, setData] = useState({
        "name": "Default product template",
    
        "padawans": {
    
          "1": {
            "name": "Aleem",
            "pfp": "../public/img/pfp/aleem.png"
        },
          "2": {
            "name": "Eason",
            "pfp": "../public/img/pfp/eason.png"
        },
    
        "3": {
          "name": "Jake",
          "pfp": "../public/img/pfp/jake.png"
      },
        "4": {
          "name": "Dickson",
          "pfp": "../public/img/pfp/dickson.png"
    
        },
        "5": {
          "name": "Amrita",
          "pfp": "../public/img/pfp/amrita.png"
        },
        "6": {
          "name": "Zach",
          "pfp": "../public/img/pfp/zach.png"
        },
        "7": {
          "name": "Tavia",
          "pfp": "../public/img/pfp/zach.png"
        },
        "8": {
          "name": "Ava",
          "pfp": "../public/img/pfp/zach.png"
        },
        "9": {
          "name": "GitE",
          "pfp": "../public/img/pfp/zach.png"
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
            <Player name={PadawanData.name} />
        </span>
        )
        })
  }

  return cards

}