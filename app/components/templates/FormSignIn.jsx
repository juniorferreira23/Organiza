"use client";

import Button from "./Button";
import InputCamp from "./InputCamp";
import Title from "./Title";


export default function FormSignIn(){
    async function signIn(e){
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="flex flex-col items-center h-screen justify-center">
            <form onSubmit={signIn} className="p-8 bg-white rounded-md">
                <Title text="Sign In"/>
                <InputCamp type="email" name="Email"/>
                <InputCamp type="password" name="Senha"/>
                <div className="flex flex-wrap justify-between py-2">
                    <Button name="Acessar" type="submit"/>
                    <Button name="Cadastrar" type="button"/>
                </div>
            </form>
        </div>
    )
}