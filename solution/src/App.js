import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  const contractABI = [{"constant":false,"inputs":[{"name":"n","type":"uint8"}],"name":"guess","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"isComplete","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}];
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [text, setText] = useState("");
  const [exploitedValue, setExploitedValue] = useState("");
  const [exploited, setExploited] = useState("");

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
    await web3.eth.getStorageAt(text, 0).then(async value => {
      setExploitedValue(web3.utils.hexToNumberString(value));
      var contract = await new web3.eth.Contract(contractABI, text);
      await contract.methods.guess(web3.utils.hexToNumber(value)).send({from: account, value: 1000000000000000000}).then(async () => {
        const worked = await contract.methods.isComplete().call({from: account});
        if (worked === true) {
          setExploited("Worked.");
        } else {
          setExploited("Did not work.")
        }
      })
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
      <br>
      </br>
      <center>
        {exploited}
      </center>
    </div>
  );
}

export default App;
