import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios if you prefer to use it
import { Link } from 'react-router-dom';
export default function DataPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://database-feb92-default-rtdb.firebaseio.com/transaction.json');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="bg-gray-200 min-h-screen py-8 px-4">
            <h1 className="flex justify-center text-3xl font-bold mb-8">Transaction Data</h1>
            {loading ? (
                <p className=" flex justify-center text-2xl text-gray-600">Loading...</p>
            ) : (
                <ul className="space-y-3">
                    {Object.keys(data).map(key => (
                        <li key={key} className="bg-white shadow-md rounded-md p-4">
                            <p className="text-lg font-semibold">Wallet Address: {data[key].walletAddress}</p>
                            <p className="text-lg">Amount: {data[key].amount}</p>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
             </svg>
             <span>Back</span>
            </Link>
            </div>
          );
}
