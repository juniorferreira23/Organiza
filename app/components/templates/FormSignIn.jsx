"use client";

import { signIn } from "next-auth/react"
import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPAssword from "./inputPassword";
import Title from "./Title";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormSignIn(){
    const router = useRouter()
    const [error, setError] = useState()

    async function login(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        
        const result = await signIn("credentials", {
            redirect: false,
            ...data,
        })

        if(result.status == 200){
            router.push('/dashboard')
        }else{
            console.log('Credenciais invalidas')
            setError('Credenciais inválidas')
        }
            
    }
    

    return (
        <div className="flex items-center h-screen justify-center">
            <form onSubmit={login} className="px-5 bg-white rounded-md w-96 h-96 max-w-full flex flex-col justify-center gap-4">
                <Title text="Sign In"/>
                <InputEmail/>
                <InputPAssword/>
                <div className="flex flex-wrap justify-center gap-4 py-2">
                    <Button name="Acessar" type="submit"/>
                    <Button name="Cadastrar" type="button"/>
                    <span className="text-red-600">{error}</span>
                </div>
            </form>
        </div>
    )
}