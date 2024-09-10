"use client";

import { signIn } from "next-auth/react"
import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPAssword from "./inputPassword";
import Title from "./Title";
import { useSearchParams } from "next/navigation";

export default function FormSignIn(){
    const searchParams = useSearchParams()
    const error = searchParams.get('error')

    async function login(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const storage = localStorage.getItem('Users')
        if(storage){
            const dataStorage = storage
            console.log(JSON.parse(dataStorage))

            const data = {
                email: formData.get('email'),
                password: formData.get('password'),
                database: dataStorage
            }
    
    
            // Autenticação com NEXT-AUTH
            await signIn("credentials", {
                ...data,
                callbackUrl: '/dashboard',
    
            })
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
                    {error === 'CredentialsSignin' && <span className="text-red-600">Credenciais inválidas</span> }
                </div>
            </form>
        </div>
    )
}