import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { get, set, ref, getDatabase} from 'firebase/database';
import { getStorage, getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";



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
const FirebaseBucket = getStorage(app)


export async function GetPadawans() {
    const val = await get(ref(database, "/padawans"))
                    .catch(err => console.log(err))

    const padawans = await val.val()
    return padawans
}

export async function AddPadawan(padawan) {
    const dbref = ref(database, `test_padawan/${padawan.address}`)

    const result = await set(dbref, padawan)
}

export async function GetPFP() {
    const picture = "https://xpgcvlzgtrybnonxvfam.supabase.in/storage/v1/object/public/bucket/pfp/"
    return picture    
}

export async function uploadFile(file) {

    // dis function uploads files dawg
    const storageRef = sRef(FirebaseBucket, `testing/${file.name}`);

    await uploadBytes(storageRef, file).then( async (snapshot) => {
        console.log(snapshot)
    });

    const URL = await getDownloadURL(storageRef, `testing/${file.name}`)

    return URL 
}