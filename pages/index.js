import { data } from "autoprefixer";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import Player from "./components/player";
import { useEffect, useState } from "react";
// import data from "./data"

function Home({posts}) {
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
const [current, setCurrent] = useState(1);
    async function Aleem() {
      const res = await fetch('https://www.aleemrehmtulla.com/my.json')
      const pree = await res.json()
    setData(pree)
    }
    useEffect(() => {
     Aleem();
    }, []);

const grr = 1



// this is an array of padawan indices [1,2,3,....]
const testv = Object.keys(data.padawans)


console.log(data.padawans)
let cards = []

if (data) {
  cards = testv.map(index => {
    const PadawanData = data.padawans[index]
    return (
    <span key={index}>
      <Player name={PadawanData.name} />
    </span>
    )
  })
}

  
  


  const itemList2 = [...Array(8)].map((e, i ) =>  (
    <span key={i}>
      <h1>Number - {testv}</h1>
    </span>
  ));

    function Item (){

      const itemList = [...Array(8)].map((e, i ) =>  (
        <span className="" key={i}>
          <h1 className="text-red-500 pt-4">Number = {i}</h1>
        </span>
      ));
   

      return itemList
    }






  const itemList = [...Array(8)].map((e, i) => 
  
  (
    <span key={i}>
      <Player  name={posts[current].name} time="GMT 0:00"/>
    </span>
  ));
 


  return (
    <div className="">
      <Header />
      <Item />
{/* {itemList2} */}
      {cards}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-3">{itemList}</div>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.aleemrehmtulla.com/my.json')
  const pre = await res.json()
  const posts = pre.padawans
  const hi = pre

  return {
    props: {
      posts,
    },
  }
}
export default Home;
