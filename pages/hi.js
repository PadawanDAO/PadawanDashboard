import axios from "axios";
import { getStaticProps } from ".";


import { getDatabase, ref, onValue} from "firebase/database";

const db = getDatabase();
const getName = ref(db, 'padawans/' + 1 + '/name');
onValue(getName, (snapshot) => {
  const data = snapshot.val();
  console.log(data +"yooo");
});




function Home({posts}) {
  
  return (
    <div className="">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-3">
        <h1>sss</h1>
      </div>
    </div>
  );
}

export default Home;
