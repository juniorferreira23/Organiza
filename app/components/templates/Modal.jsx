import { useState } from "react"
import Input from "./Inpux"
import SelectModal from "./SelectModal"

export default function Modal({isOpen, onClose, getValues}){
    const [selectValue, setSelectValue] = useState()
    const [inputValue, setInputValue] = useState()

    if(!isOpen) return null

    const handlerSelect = (event) => {
        setSelectValue(event.target.value)
        console.log(selectValue)
    }

    const handlerInput = (event) => {
        setInputValue(Number(event.target.value))
        console.log(inputValue)
    }

    const sendValues = () => {
        if(!selectValue){
            return null
        }
        if(!Number.isInteger(inputValue)){
            return null
        }

        const values = {
            type: selectValue,
            value: inputValue
        }

        return values
    }

    return(
        <div className="absolute top-1/4 right-1/3">
            <div className="bg-gray-400 p-10 rounded-md">
                <SelectModal onChange={handlerSelect}/>
                <Input onChange={handlerInput}/>
                <div className="py-2 flex justify-between">
                    <button className="btn" onClick={onClose}>Fechar</button>
                    <button className="btn" onClick={() => getValues(sendValues())}>Confirmar</button>
                </div>
            </div>
            
        </div>
    )
}