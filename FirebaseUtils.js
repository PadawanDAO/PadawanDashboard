import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { get, set, ref , getDatabase} from 'firebase/database';

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

