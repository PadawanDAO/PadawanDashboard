import { data } from "autoprefixer";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import { useEffect, useState } from "react";
import PadawanList from "./PadawanList";

function Home({posts}) {
  return (
    <div className={styles.HomepageWrapper}>
      <Header />
      <div className={styles.PadawanListWrapper}>
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
