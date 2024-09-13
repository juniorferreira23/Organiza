"use client"

import Card from "./Card";
import { IconArrowNarrowUp, IconArrowNarrowDown, IconCoins, IconPlus } from '@tabler/icons-react';
import Modal from "./Modal";
import { useEffect, useState } from "react";
import ButtonModal from "./ButtonModal";
import TableModal from "./TableModal";
import Subcard from "./Subcard";


const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) return false;
    }
    return true;
}

export default function DashboardFinance(){
    const [showModal, setShowModal] = useState(false)
    const [finance, setFinance] = useState([])
    const [entrada, setEntrada] = useState()
    const [saida, setSaida] = useState()
    const [total, setTotal] = useState()

    // Não apagar o comentariodo eslint 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getStorage = () => {
        let storage = localStorage.getItem('Transaction')
        storage = storage ? JSON.parse(storage) : []
        if (arraysAreEqual(storage, finance)) return null
        setFinance(storage)
    }

    const handlerButtonClick = () => {
        if(!showModal){
            setShowModal(true)
        }else{
            setShowModal(false)
        }
    }

    const handlerCloseModal = () => setShowModal(false)

    const getValues = (values) => {
        if(values){
            setShowModal(false)
            let database = localStorage.getItem('Transaction')
            database = database ? JSON.parse(database) : []
            database.push(values)
            database = JSON.stringify(database)
            localStorage.setItem('Transaction', database)
        }
    }
    
    useEffect(()=> {
        getStorage()

        const somaEntradas = finance.filter(item => item.type === "Entrada")
                   .reduce((total, item) => total + parseInt(item.value), 0);  
        setEntrada(somaEntradas)

        const somaSaidas = finance.filter(item => item.type === "Saída")
                   .reduce((total, item) => total + parseInt(item.value), 0);
        setSaida(somaSaidas)

        const somaTotal = somaEntradas - somaSaidas
        setTotal(somaTotal)

    }, [finance, getStorage])


    return(
        <div className="min-h-screen bg-neutral-200">
            <section className="pt-5">
                <div className="flex justify-center">
                    <Card title="Entradas" value={entrada} icone={IconArrowNarrowUp}/>
                    <Card title="Saídas" value={saida} icone={IconArrowNarrowDown}/>
                    <Card title="Capital" value={total} icone={IconCoins}/>
                </div>
                <div className="flex justify-center">
                    <Subcard title="Saúde" value={entrada} limit={100} icone={IconArrowNarrowUp}/>
                    <Subcard title="Educação" value={saida} limit={100} icone={IconArrowNarrowDown}/>
                    <Subcard title="Lazer" value={total} limit={100} icone={IconCoins}/>
                    <Subcard title="Transporte" value={total} limit={100} icone={IconCoins}/>
                    <Subcard title="Alimentação" value={total} limit={100} icone={IconCoins}/>
                </div>
                <ButtonModal icone={IconPlus} onhandlerButtonClick={handlerButtonClick}/>
                <Modal showModal={showModal} handlerCloseModal={handlerCloseModal} getValues={getValues}></Modal>
                <TableModal finance={finance}/>
            </section>
        </div>
    )
}