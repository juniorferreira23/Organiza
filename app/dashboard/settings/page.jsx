"use client";

import Button from "../../components/templates/Button";
import Title from "../../components/templates/Title";
import Input from "../../components/templates/Input";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Settings() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    const router = useRouter();
    
    const handleLimit = (event) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      
      const limits = {
        saude: formData.get('saude'),
        educacao: formData.get('educacao'),
        lazer: formData.get('lazer'),
        transporte: formData.get('transporte'),
        alimentacao: formData.get('alimentacao')
      }

      // console.log(limits)
      localStorage.setItem('Limits', JSON.stringify(limits))
      router.push('/dashboard')

    }


    return (
        <div className="flex items-center h-screen justify-center bg-white ">
            <form onSubmit={handleLimit} className="px-5 bg-blue-900 rounded-md max-w-full flex flex-col justify-center">
                <Title text="Limites de despesas" />
                <Input placeholder="Limte Despesas Saúde" name="saude"/>
                <Input placeholder="Limte Despesas Educação" name="educacao"/>
                <Input placeholder="Limte Despesas Lazer" name="lazer"/>
                <Input placeholder="Limte Despesas Transporte"  name="transporte"/>
                <Input placeholder="Limte Despesas Alimentação"  name="alimentacao"/>
                
                <div className="flex flex-wrap justify-center gap-4 py-2">
                    <Button name="Alterar" type="submit" />
                    {error === 'CredentialsSignin' && <span className="text-red-600">Credenciais inválidas</span>}
                </div>
            </form>
        </div>
    );
}
