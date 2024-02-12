import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <>
        <div className="shadow sticky rounded-lg">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="https://www.sharpe.ai/" className="flex items-center">
                        <img
                            src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/613fa44d83c4f428bad69a97/logo.jpg?d=1683534060646"
                            className="rounded-full mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                        <div className=" mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        ` ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                to="/transaction"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Transaction
                                </NavLink>
                                <NavLink
                                to="/data"
                                    className={({isActive}) =>
                                        `${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Data
                                </NavLink>
                        </div>
                 </div>
        </div>
        <div className="container mx-auto mt-8 pt-10">
      <h1 className="text-4xl font-bold text-center mb-4 font-mono">Institutional-Grade Crypto Superapp</h1>
      <p className="text-lg text-center">Sharpe is the frontend for intelligence, tracking, and investing your digital assets.</p>
    </div>
    </>
    );
}