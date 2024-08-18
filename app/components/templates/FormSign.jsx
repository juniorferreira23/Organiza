import ButtonSubmit from "./ButtonSubmit";
import InputCamp from "./InputCamp";


export default function FormSign(){
    return (
        <div className="p-3 bg-red-300 content-center">
            <InputCamp type="email" name="email"/>
            <InputCamp type="password" name="senha"/>
            <ButtonSubmit name="cadastrar" type="submit"/>
        </div>
    )
}