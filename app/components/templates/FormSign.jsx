import Button from "./Button";
import InputCamp from "./InputCamp";


export default function FormSign(){
    return (
        <div className="p-3 flex flex-col items-center h-screen justify-center">
            <div className="p-20 bg-blue-200 rounded-md">
                <InputCamp type="email" name="Email"/>
                <InputCamp type="password" name="Senha"/>
                <div className="flex justify-between py-2">
                    <Button name="Acessar" type="submit"/>
                    <Button name="Cadastrar" type="button"/>
                </div>
            </div>
        </div>
    )
}