import { useState } from "react"
import Input from "./Inpux"
import SelectModal from "./SelectModal"
import InputArea from "./inputArea"

export default function Modal({isOpen, onClose, getValues}){
    const [selectValue, setSelectValue] = useState()
    const [dateValue, setDateValue] = useState()
    const [inputValue, setInputValue] = useState()
    const [inputAreaValue, setInputAreaValue] = useState()
    const [error, setError] = useState()

    if(!isOpen) return null

    const handlerSelect = (event) => {
        setSelectValue(event.target.value)
        // console.log(selectValue)
    }

    function isDate(input) {
        // Expressão regular para validar datas no formato DD/MM/AAAA
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateRegex.test(input);
    }

    const handlerDate = (event) => {
        const date = event.target.value
        // console.log(dateValue)
        setDateValue(date)
    }

    const handlerInput = (event) => {
        setInputValue(Number(event.target.value))
        // console.log(inputValue)
    }

    const handlerInputArea = (event) => {
        setInputAreaValue(event.target.value)
        // console.log(inputAreaValue)
    }

    const sendValues = () => {
        setError('')

        if(!selectValue){
            setError('Preencha o tipo de movimentação')
            return null
        
        }

        if(!isDate(dateValue)){
            setError('Data inválida')
            return null
        }

        if(!Number.isInteger(inputValue)){
            setError('Valor inválido')
            return null
        }



        const values = {
            type: selectValue,
            date: dateValue,
            value: inputValue,
            details: inputAreaValue
        }

        setSelectValue('')
        setDateValue('')
        setInputValue('')
        setInputAreaValue('')

        return values
    }

    const handlerClose = () => {
        setError()
        onClose()
    }

    return(
        <div className="absolute top-20 right-1/3">
            <div className="bg-gray-400 p-10 rounded-md z-40">
                <h1 className="text-white">Lançamento de movimentações</h1>
                <SelectModal onChange={handlerSelect}/>
                <Input placeholder="Data" onChange={handlerDate}/>
                <Input placeholder="Valor" onChange={handlerInput}/>
                <InputArea onChange={handlerInputArea}/>
                <div className="py-2 flex justify-between">
                    <button className="btn" onClick={() => handlerClose()}>Fechar</button>
                    <button className="btn" onClick={() => getValues(sendValues())}>Confirmar</button>
                </div>
                <span>{error && <span className="text-red-600">{error}</span>}</span>
            </div>
            
        </div>
    )
}