import React, { useCallback, useState } from "react"
import { UserAuth } from "./context/AuthContext";
import { Link, useNavigate } from 'react-router-dom'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from 'firebase/auth'
import { app, auth } from "../Firebase";

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { user, signUp } = UserAuth()


    const navigate = useNavigate()

    function verifyFields() {
        // handleSubmit()

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <form className="px-8 pt-6 pb-8 mb-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <h1 className="p-4  text-[18px] text-center font-extrabold text-[#c9c9c9]">REGISTER</h1>
                    <div className="mb-4">
                        <label className="block mb-2 text-xs font-bold text-white" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm font-bold leading-tight bg-[#1A1A1A]  text-white border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="username"
                            type="user"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-xs font-bold text-white" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm font-bold leading-tight bg-[#1A1A1A]  text-white border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-xs font-bold text-white" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-white  bg-[#1A1A1A] border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="password"
                            type="password"
                            placeholder="*******"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-xs font-bold text-white" htmlFor="confirmPassword">
                            Confirm password
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 leading-tight text-white bg-[#1A1A1A] border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="confirmPassword"
                            type="password"
                            placeholder="*******"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="px-4 py-2 w-full font-extrabold text-md uppercase text-black bg-[#c9c9c9] rounded-xl focus:outline-none focus:shadow-outline">
                            Register
                        </button>
                    </div>
                    <Link to={"/login"} className="text-xs py-2 text-[#c9c9c9] hover:no-underline mx-auto">Already have an account?<span className="font-sm font-semibold">Log In</span></Link>
                </form>
            </div>
        </div>

    )
}

export { Register }