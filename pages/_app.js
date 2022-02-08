import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@pathofdev/react-tag-input/build/index.css";

import { ThirdwebProvider } from "@3rdweb/react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
	apiKey: "AIzaSyAHhDR6w6sUoOznoB-IyW89Xo3UKqSTEGY",
	authDomain: "padawandao.firebaseapp.com",
	databaseURL: "https://padawandao-default-rtdb.firebaseio.com",
	projectId: "padawandao",
	storageBucket: "padawandao.appspot.com",
	messagingSenderId: "1044973233400",
	appId: "1:1044973233400:web:440ebb41e0f1a5dcdb070d",
	measurementId: "G-VZ5TGGKHR3",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

function MyApp({ Component, pageProps }) {
	const supportedChainIds = [1, 4, 137];
	const connectors = {
		injected: {},
		walletconnect: {},
	};
	return (
		<ThirdwebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
