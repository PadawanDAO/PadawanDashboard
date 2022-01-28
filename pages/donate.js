import { useState } from "react";
import { ethers } from "ethers";
import Header from "./components/header";
// import ErrorMessage from "./ErrorMessage";
// import TxList from "./TxList";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: "0x6032DEd1D330d0672253BDfC9a56C971DeE0683F"
    });
  };
  const [currency, setCurrency] = useState();

  return (
    <div className="">    
    <Header />
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Donate ETH to the Force
          </h1>
          <div className="">
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
            {/* dropdown */}
   
            {/* <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>ETH</option>
            <option>USDC</option>

            </select> */}
          </div>
        </main>
        <footer className="p-4">
          <div className="bg-gray-200 hover:bg-yellow-400 rounded-full p-2">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Donate
          </button>
          </div>
          {/* <ErrorMessage message={error} />
          <TxList txs={txs} /> */}
        </footer>
      </div>
    </form>
    </div>
  );
}
