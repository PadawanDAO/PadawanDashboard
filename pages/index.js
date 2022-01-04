import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import Player from "./components/player";
export default function Home() {
  const itemList = [...Array(8)].map((e, i) => (
    <span key={i}>
      <Player />
    </span>
  ));
  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-3">{itemList}</div>
    </div>
  );
}
