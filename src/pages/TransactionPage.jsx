import React, { useState } from 'react'
import {InputBox} from '../components/InputBox'
import { Button } from '../components/Button'
import axios from 'axios'
import { ethers } from "ethers";
export default function TransactionPage() {
    const [walletAddress,setWalletAddress] = useState("")
    const [amount,setAmount] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    //handling submission
    const handleSubmit = async () => {

      const isValidWalletAddress = (walletAddress) => {
        return ethers.isAddress(walletAddress); 
    };
      // Validating address
      if (!walletAddress || !isValidWalletAddress(walletAddress)) {
          setErrorMessage("Please enter a valid Ethereum wallet address (e.g., 0x...)");
          return;
      }
      //validating amount
      const parsedAmount = parseInt(amount);
      if (parsedAmount < 0 || parsedAmount > 10000) {
          setErrorMessage("Please enter a valid amount between 0 and 10,000");
          return;
      }
      //Sending data database
      try {
          await axios.post("https://database-feb92-default-rtdb.firebaseio.com/transaction.json", {
              walletAddress,
              amount
          });
          setSuccessMessage("Transaction submitted successfully!");
          setWalletAddress("");
          setAmount("");
          setErrorMessage(""); 
      } catch (error) {
          console.error("Error submitting transaction:", error);
          setErrorMessage("error while submitting the transaction.");
      }
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
    <InputBox onChange={e=>{setWalletAddress(e.target.value)}}label={"walletAddress"} placeholder={"e.g., 0x..."}/>
    <InputBox onChange={e=>{setAmount(e.target.value)}} label={"amount"} placeholder={"enter between 0 and 10,000"}/>
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div><Button onClick={
      handleSubmit
      } label={"Submit"}/>
    </div>
    </div>
  )
}





    

