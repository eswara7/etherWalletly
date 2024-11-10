import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <>
        <div className="shadow-md sticky rounded-lg t">
            <div className="flex justify-center items-center py-4">
                        <div className=" mt-4 font-medium lg lg:space-x-8 lg:mt-0">
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 hover:text-orange-700 `
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                to="/transaction"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 hover:text-orange-700`
                                    }
                                >
                                    Transaction
                                </NavLink>
                                <NavLink
                                to="/data"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"}  border-gray-100 hover:bg-gray-50 hover:text-orange-700`
                                    }
                                >
                                    Data
                                </NavLink>
                        </div>
                 </div>
        </div>
        <div className="text-center mt-10">
    <h1 className="text-4xl font-bold">Crypto Transaction Dashboard</h1>
    <p className="text-2xl mt-6 text-gray-600">
        A simple app to manage and track Ethereum transactions with real-time validation and secure data storage.
    </p>
</div>

    </>
    );
}