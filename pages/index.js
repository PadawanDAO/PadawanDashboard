import { data } from "autoprefixer";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { PadawanList } from "./PadawanList";
// import data from "./data"

function Home({posts}) {
  





    // function Item (){

    //   const itemList = [...Array(8)].map((e, i ) =>  (
    //     <span className="" key={i}>
    //       <h1 className="text-red-500 pt-4">Number = {i}</h1>
    //     </span>
    //   ));
   

    //   return itemList
    // }

 


  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-3">
        <PadawanList />
      </div>
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
