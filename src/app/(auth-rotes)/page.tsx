'use client'

import { signIn } from "next-auth/react";
import router from "next/router";
import { SyntheticEvent, useState } from "react";


export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if(result?.error){
      console.log(result)
      return
    }

    router.replace('/admin')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800 text-white">
      <h1 className="text-3xl mb-6 text-white">Login</h1>

      <form className="w-[440px] flex flex-col gap-6" onSubmit={handleSubmit}>
      <input className="h-12 rounded-md p-2 bg-transparent border border-gray-300" type="text" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>

      <input className="h-12 rounded-md p-2 bg-transparent border border-gray-300" type="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
      
      <button className="h-12 rounded-md bg-gray-300 text-gray-800 hover:text-gray-200 hover:bg-blue-500" type="submit"> Entrar</button>
      </form>
    </div>
  );
}
