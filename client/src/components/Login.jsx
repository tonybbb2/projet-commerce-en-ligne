import React, { useState } from "react"
import { UserAuth } from '../components/context/AuthContext'
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = React.useState('')

    const { user, signIn } = UserAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <form className="px-8 pt-6 pb-8 mb-4 rounded-lg shadow-md">
                    <h1 className="p-4  text-[18px] text-center font-extrabold text-[#c9c9c9]">LOG INTO MY ACCOUNT</h1>
                    <div className="mb-4 mt-4">
                        <label className="block mb-2 text-xs font-bold text-white" htmlFor="email">
                            Email Address :
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-white border bg-[#1A1A1A] rounded-md shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-xs font-bold text-white" htmlFor="password">
                            Password :
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 leading-tight text-white border bg-[#1A1A1A] rounded-md shadow appearance-none focus:outline-none focus:shadow-outline placeholder:text-sm"
                            id="password"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <button
                            className="px-4 py-2 w-full font-extrabold text-md bg-[#c9c9c9] rounded-xl focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmit}
                        >
                            LOG IN
                        </button>
                    </div>
                    <Link to={"/register"} className="text-xs text-[#c9c9c9] hover:no-underline mx-auto">new? <span className="font-sm font-semibold">Create An Account</span></Link>
                </form>
            </div>
        </div>

    )
}


export { Login }