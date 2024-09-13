"use client";

import { signIn } from "next-auth/react"
import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPAssword from "./inputPassword";
import Title from "./Title";
import { useSearchParams } from "next/navigation";
import InputConfirmPassword from "./InputConfirmPassword"
import InputName from "./InputName"
import { useRouter } from 'next/navigation';

export default function FormSignUp() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    function handleClick() {
        router.push('/');
    }

    async function register(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        let storage = localStorage.getItem('Users');
        let users = storage ? JSON.parse(storage) : [];

        if (storage) {
            const data = {
                name: formData.get('name'),
                email: formData.get('email'), 
                password: formData.get('password'),
                confirmPassword: formData.get('ConfirmPassword'),
            };
            console.log(data)
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const existingUser = users.find(user => user.email === data.email);

        if(!data.name || !data.email || !data.password || !data.confirmPassword) {
            alert('adicione os dados do usuário!');
            return;
        }

        if (existingUser) {
            alert('usuário já cadastrado!');
            return;
        }
         // Adiciona o novo usuário à lista
         users.push(data);
         localStorage.setItem('Users', JSON.stringify(users));
 
         // Redireciona para a tela de login após o registro bem-sucedido
         router.push('/');

        }
    }

    return (
        <div className="flex items-center h-screen justify-center">
            <form onSubmit={register} className="px-5 bg-white rounded-md w-96 h-96 max-w-full flex flex-col justify-center gap-4">
                <Title text="Register"/>
                <InputName/>
                <InputEmail/>
                <InputPAssword/>
                <InputConfirmPassword/>
                <div className="flex flex-wrap justify-center gap-4 py-2">
                    <Button onClick={handleClick} name="Voltar" type="button"/>
                    <Button name="Cadastrar" type="submit"/>
                    {error === 'CredentialsSignin' && <span className="text-red-600">Credenciais inválidas</span> }
                </div>
            </form>
        </div>
    )
}