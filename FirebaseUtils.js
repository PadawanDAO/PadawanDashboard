import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { get, set, ref , getDatabase} from 'firebase/database';
import { getStorage, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAHhDR6w6sUoOznoB-IyW89Xo3UKqSTEGY",
    authDomain: "padawandao.firebaseapp.com",
    databaseURL: "https://padawandao-default-rtdb.firebaseio.com",
    projectId: "padawandao",
    storageBucket: "padawandao.appspot.com",
    messagingSenderId: "1044973233400",
    appId: "1:1044973233400:web:440ebb41e0f1a5dcdb070d",
    measurementId: "G-VZ5TGGKHR3"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export async function GetPadawans() {
    const val = await get(ref(database, "/padawans"))
                    .catch(err => console.log(err))

    const padawans = await val.val()
    return padawans
}

export async function GetPFP() {
    const picture = "https://xpgcvlzgtrybnonxvfam.supabase.in/storage/v1/object/public/bucket/pfp/"

    return picture    
}