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
    const [entrada, setEntrada] = useState()
    const [saida, setSaida] = useState()
    const [total, setTotal] = useState()

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

    useEffect(()=> {
        const somaEntradas = finance.filter(item => item.type === "Entrada")
                   .reduce((total, item) => total + parseInt(item.value), 0);  
        setEntrada(somaEntradas)

        const somaSaidas = finance.filter(item => item.type === "Saída")
                   .reduce((total, item) => total + parseInt(item.value), 0);
        setSaida(somaSaidas)

        const somaTotal = somaEntradas - somaSaidas
        setTotal(somaTotal)

    }, [finance])


    return(
        <div className="min-h-screen bg-neutral-200">
            <section className="pt-5">
                <div className="flex justify-center">
                    <Card title="Entradas" value={entrada} icone={IconArrowNarrowUp}/>
                    <Card title="Saídas" value={saida} icone={IconArrowNarrowDown}/>
                    <Card title="Capital" value={total} icone={IconCoins}/>
                </div>
                <ButtonModal icone={IconPlus} onhandlerButtonClick={handlerButtonClick}/>
                <Modal isOpen={showModal} onClose={handlerCloseModal} getValues={handlerValues}></Modal>
                <TableModal finance={finance}/>
            </section>
        </div>
    )
}