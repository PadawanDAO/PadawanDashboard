import Header from "./components/header";
import {useEffect, useState, useRef} from "react"
import PadawanList from "./PadawanList";
import FilterSelector from "./FilterSelector";
import PlayerSkelton from "./components/playerSkeleton";
function Home({posts}) {

const DaoEvents = useRef(["NFT.NYC", "ETHDenver", "DeCental Miami"])
const DefaultDaoEvents = DaoEvents.current.map(e => {
    return {value: e, label: e}
})

  const [selectedEvents, setSelectedEvents] = useState(DefaultDaoEvents);
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <div className="grid place-self-center">
      <Header />
   
        <FilterSelector 
          searchQuery = {searchQuery} 
          setSearchQuery = {setSearchQuery} 
          setEvents = {setSelectedEvents} 
          selectedEvents = {selectedEvents} 
          AllEvents={DefaultDaoEvents}/>
         
          <div className="pr-4 pl-4 tablet:pr-20 tablet:pl-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 tablet:grid-cols-2  place-items-center  gap-3">
        <PadawanList 
            includeEvents = {selectedEvents} 
            searchQuery = {searchQuery}
            sortby="name"/>
        </div>
  
  </div>
      </div>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://www.aleemrehmtulla.com/my.json')
//   const pre = await res.json()
//   const posts = pre.padawans
//   const hi = pre

//   return {
//     props: {
//       posts,
//     },
//   }
// }
export default Home;
