import Header from "./components/header";
import {useState} from "react"
import PadawanList from "./PadawanList";
import FilterSelector from "./FilterSelector";
function Home({posts}) {

const DaoEvents = ["NFT.NYC", "ETHDenver", "DeCental Miami"]
const DefaultDaoEvents = DaoEvents.map(e => {
  return {value: e, label: e}
})

  const [selectedEvents, setSelectedEvents] = useState(DefaultDaoEvents);
  return (
    <div className="main-wrapper">
      <Header />
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 tablet:grid-cols-2 w-full items-center gap-3"> */}
        <FilterSelector setEvents = {setSelectedEvents} selectedEvents = {selectedEvents} events={DaoEvents}/>
      <div className="bp-flex-test">
        <PadawanList includeEvents = {selectedEvents} sortby="name"/>

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
