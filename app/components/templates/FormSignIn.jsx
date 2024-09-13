"use client";

import { signIn } from "next-auth/react";
import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPassword from "./inputPassword";
import Title from "./Title";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function FormSignIn() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const router = useRouter();

    function handleClick() {
        router.push('/Register');
    }

    async function login(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        // Busca os dados de usuários do localStorage
        let storage = localStorage.getItem('Users');
        if (storage) {
            const data = {
                email: formData.get('email'),
                password: formData.get('password'), // Senha digitada
                database: storage // Banco de dados armazenado no localStorage
            };

            console.log(localStorage.getItem("Users")); // Debug para garantir que os dados estão sendo carregados

            // Autenticação com NEXT-AUTH
            const res = await signIn("credentials", {
                ...data,
                redirect: false, // Impede o redirecionamento automático
                callbackUrl: '/dashboard',    
            });

            if (res?.error) {
                console.error("Erro no login:", res.error);
            } else {
                console.log("Login bem-sucedido!", res);
                // Redireciona para o dashboard após login
                router.push("/dashboard");
            }
        }
    }

    return (
        <div className="flex items-center h-screen justify-center">
            <form onSubmit={login} className="px-5 bg-white rounded-md w-96 h-96 max-w-full flex flex-col justify-center gap-4">
                <Title text="Sign In" />
                <InputEmail />
                <InputPassword />
                <div className="flex flex-wrap justify-center gap-4 py-2">
                    <Button name="Acessar" type="submit" />
                    <Button onClick={handleClick} name="Cadastrar" type="button" />
                    {error === 'CredentialsSignin' && <span className="text-red-600">Credenciais inválidas</span>}
                </div>
            </form>
        </div>
    );
}
