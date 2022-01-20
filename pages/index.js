import Header from "./components/header";
import PadawanList from "./PadawanList";

function Home({posts}) {
  return (
    <div className="main-wrapper">
      <Header />
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 tablet:grid-cols-2 w-full items-center gap-3"> */}
      <div className="bp-flex-test">
      
        <PadawanList includeEvents = {["ETHDenver", "NFT.NYC"]} sortby="name"/>

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
