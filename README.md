# Solution for Capture the Ether (Guess the Random Number)
This is my solution for Capture the Ether's [Guess the Random Number Challenge](https://capturetheether.com/challenges/lotteries/guess-the-random-number/) using web3.js and React.


To get started, we head over to the site and select the "Guess the Random Number" challenge.
![Challenge Site!](/images/setup1.png)

Next, select the "Begin Challenge" button, and confirm the contract deployment transaction in metamask.
![Begin!](/images/setup2.jpg)
![Deploy!](/images/deploy.png)

Once deployed, copy the contract address, and start running the react app.
![Deployed!](/images/deployed.png)
![App Start!](/images/appstart.png)

Connect your wallet to the site and ensure that the address is listed correctly and that the chain id is 3 (Ropsten testnet).
![Link 1!](/images/linkwallet1.png)
![Link 2!](/images/linkwallet2.png)
![Link Done!](/images/finishedlink.png)

Once you have confirmed address and chain id, paste the contract address into the textbox and click the exploit button. 
![Paste and Exploit!](/images/pastesubmit.png)

Next, confirm that you have a number between 0 and 255 pop up under the exploit button, as we are expecting to pull an 8 bit unsigned integer (uint8) from the contract's storage.
![Confirm number!](/images/confirmingnumber.png)

Verify that a transaction comes up, and that the value of that trasaction is 1 eth + a gas fee. Once the transaction has finished going through, look for the text "Worked." underneath the "guessed" number.
![Worked!](/images/worked.png)

Finally, check your work on Capture the Ether!
![Check!](/images/check.png)
![Checking!](/images/checking.png)
![Done!](/images/done.png)
