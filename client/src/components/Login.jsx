import React, { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function signIn() {
        // Function to sign in

    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-xs">
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md">
                    <h1 className=""></h1>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="password"
                            type="password"
                            placeholder="*******"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <button
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={signIn}
                        >
                            Sign In
                        </button>
                    </div>
                    <Link to={"/register"} className="text-xs text-blue-600 underline hover:no-underline">Don't have an account?</Link>
                </form>
            </div>
        </div>

    )
}

export { Login }