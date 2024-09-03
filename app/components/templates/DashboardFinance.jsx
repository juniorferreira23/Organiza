'use client'

import Card from "./Card";
import { IconArrowNarrowUp, IconArrowNarrowDown, IconCoins, IconPlus } from '@tabler/icons-react';
import Modal from "./Modal";
import { useEffect, useState } from "react";
import ButtonModal from "./ButtonModal";
import TableModal from "./TableModal";

export default function DashboardFinance(){
    const [showModal, setShowModal] = useState(false)
    const [finance, setFinance] = useState([])
    const [entrada, setEntrada] = useState([])

    const handlerButtonClick = () => {
        if(!showModal){
            setShowModal(true)
        }else{
            setShowModal(false)
        }
    }

    const handlerCloseModal = () => {
        setShowModal(false)
    }

    const handlerValues = (values) => {
        console.log(values)
        if(values){
            setShowModal(false)
            setFinance([...finance,values])
            console.log(finance)
        }
    }

    const calculateEntrada = () => {
        const somaEntradas = finance.filter(item => item.type === "entrada")
                   .reduce((total, item) => total + parseInt(item.value), 0);
        
    };

    useEffect(()=> {
        console.log('entrou')
        const somaEntradas = finance.filter(item => item.type === "Entrada")
                   .reduce((total, item) => total + parseInt(item.value), 0);  
        console.log(somaEntradas)
        setEntrada(somaEntradas)
        console.log(entrada)
    }, [finance, entrada])


    return(
        <div className="min-h-screen bg-neutral-200">
            <section className="pt-5">
                <div className="flex justify-center">
                    <Card title="Entradas" value={entrada} icone={IconArrowNarrowUp}/>
                    <Card title="Saídas" value="200" icone={IconArrowNarrowDown}/>
                    <Card title="Capital" value="800" icone={IconCoins}/>
                </div>
                <ButtonModal icone={IconPlus} onhandlerButtonClick={handlerButtonClick}/>
                <Modal isOpen={showModal} onClose={handlerCloseModal} getValues={handlerValues}></Modal>
                <TableModal finance={finance}/>
            </section>
        </div>
    )
}