"use client";

import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPAssword from "./inputPassword";
import Title from "./Title";
import InputConfirmPassword from "./InputConfirmPassword"
import InputName from "./InputName"
import { useRouter } from 'next/navigation';


export default function FormSignUp() {

    const router = useRouter();


    function handleClick() {
        router.push('/');
    }

    const stringRegex = /^[a-zA-Z]+$/;
    const isString = (value) => {
        if(stringRegex.test(value)){
            return true
        }
        return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = (value) => {
        if(emailRegex.test(value)){
            return true
        }
        return false
    }
    
    async function register(e) {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'), 
            password: formData.get('password'),
            confirmPassword: formData.get('ConfirmPassword')
        };
        // console.log(data)
        
        let storage = localStorage.getItem('Users');
        let users = storage ? JSON.parse(storage) : [];
        
        if(!data.name || !data.email || !data.password || !data.confirmPassword) {
            alert('adicione os dados do usuário!');
            return;
        }

        if (data.name.length <= 4) {
            alert('Nome inválido, deve possuir no mínimo 5 caracteres')
            return;
        } 

        if (!isString(data.name)) {
            alert('Nome inválido, deve possuir apenas letras')
            return;
        }

        if (!isEmail(data.email)) {
            alert('E-mail inválido')
            return;
        }

        if (data.password.length <= 4) {
            alert('Senha inválida, deve possuir no mínimo 5 caracteres ou números')
            return;
        }

        if (data.password !== data.confirmPassword) {
            alert('Divergência na confirmação de senha');
            return;
        }
        
        const existingUser = users.find(user => user.email === data.email);
        if (existingUser) {
            alert('usuário já cadastrado!');
            return;
        }
        

        if (storage) {
         // Adiciona o novo usuário à lista
         users.push(data);
         localStorage.setItem('Users', JSON.stringify(users));
 
         // Redireciona para a tela de login após o registro bem-sucedido
         router.push('/');

        }
    }

    return (
        <div className="flex items-center h-screen justify-center">
            <form onSubmit={register} className="px-5 bg-white rounded-md w-96 h-4/6 max-w-full flex flex-col justify-center gap-4">
                <Title text="Register"/>
                <InputName/>
                <InputEmail/>
                <InputPAssword/>
                <InputConfirmPassword/>
                <div className="flex flex-wrap justify-center gap-4 py-2">
                    <Button onClick={handleClick} name="Voltar" type="button"/>
                    <Button name="Cadastrar" type="submit"/>
                </div>
            </form>
        </div>
    )
}