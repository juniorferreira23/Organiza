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
    const [valuesSectors, setValuesSectors] = useState({})
    const [limits, setLimits] = useState()

    const handlerAlert = () => {
        const teste = valuesSectors?.['Lazer']?.saida||0
        const teste2 = limits?.lazer||200
        if(teste >= teste2){
            alert('ultrapassou o limite')
        }
    }

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getValuesSectors = () => {
        const result = finance.reduce((acc, { type, sector, value }) => {
            // Converta o valor para número
            const valorNumerico = parseFloat(value);
        
            // Inicialize o sector no acumulador, se ainda não estiver
            if (!acc[sector]) {
            acc[sector] = { entrada: 0, saida: 0 };
            }
        
            // Acumule os valores com base na movimentação
            if (type === 'Entrada') {
            acc[sector].entrada += valorNumerico;
            } else if (type === 'Saída') {
            acc[sector].saida += valorNumerico;
            }

            return acc
        }, {});
        if(JSON.stringify(valuesSectors) === JSON.stringify(result)) return null
        setValuesSectors(result)
    }

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

    const deleteRegister = (id) => {
        console.log('ta funcionando' + id)
        let database = localStorage.getItem('Transaction')
        database = database ? JSON.parse(database) : []
        database = database.filter((item, index) => index !== id - 1);
        database = JSON.stringify(database)
        localStorage.setItem('Transaction', database)
        getStorage()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getLimits = () => {
        let storage = localStorage.getItem('Limits')
        storage = storage ? JSON.parse(storage) : []
        if (JSON.stringify(storage) === JSON.stringify(limits)) return null
        setLimits(storage)
    }


    
    useEffect(()=> {
        getStorage()
        getLimits()
        handlerAlert()

        const somaEntradas = finance.filter(item => item.type === "Entrada")
                   .reduce((total, item) => total + parseInt(item.value), 0);  
        setEntrada(somaEntradas)

        const somaSaidas = finance.filter(item => item.type === "Saída")
                   .reduce((total, item) => total + parseInt(item.value), 0);
        setSaida(somaSaidas)
        
        const somaTotal = somaEntradas - somaSaidas
        setTotal(somaTotal)

        getValuesSectors()

    }, [finance, getStorage, getLimits, getValuesSectors])


    return(
        <div className="min-h-screen bg-neutral-200">
            <section className="pt-5">
                <div className="flex justify-center">
                    <Card title="Entradas" value={entrada} icone={IconArrowNarrowUp}/>
                    <Card title="Saídas" value={saida} icone={IconArrowNarrowDown}/>
                    <Card title="Capital" value={total} icone={IconCoins}/>
                </div>
                <div className="flex justify-center">
                    <Subcard title="Saúde" value={valuesSectors?.['Saúde']?.saida||0} limit={limits?.saude||200} icone={IconArrowNarrowUp}/>
                    <Subcard title="Educação" value={valuesSectors?.['Educação']?.saida||0} limit={limits?.educacao||200} icone={IconArrowNarrowDown}/>
                    <Subcard title="Lazer" value={valuesSectors?.['Lazer']?.saida||0} limit={limits?.lazer||200} icone={IconCoins}/>
                    <Subcard title="Transporte" value={valuesSectors?.['Transporte']?.saida||0} limit={limits?.transporte||200} icone={IconCoins}/>
                    <Subcard title="Alimentação" value={valuesSectors?.['Alimentação']?.saida||0} limit={limits?.alimentacao||200} icone={IconCoins}/>
                </div>
                <ButtonModal icone={IconPlus} onhandlerButtonClick={handlerButtonClick}/>
                <Modal showModal={showModal} handlerCloseModal={handlerCloseModal} getValues={getValues}></Modal>
                <TableModal finance={finance} deleteRegister={deleteRegister}/>
            </section>
        </div>
    )
}