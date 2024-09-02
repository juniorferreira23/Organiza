'use client'

import Card from "./Card";
import { IconArrowNarrowUp, IconArrowNarrowDown, IconCoins, IconPlus } from '@tabler/icons-react';
import Modal from "./Modal";
import { useState } from "react";
import ButtonModal from "./ButtonModal";
import TableModal from "./TableModal";

export default function DashboardFinance(){
    const [showModal, setShowModal] = useState(false)
    const [finance, setFinance] = useState([])

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


    return(
        <div className="min-h-screen bg-neutral-200">
            <section className="pt-5">
                <div className="flex justify-center">
                    <Card title="Entradas" value="1000" icone={IconArrowNarrowUp}/>
                    <Card title="Saídas" value="200" icone={IconArrowNarrowDown}/>
                    <Card title="Capital" value="800" icone={IconCoins}/>
                </div>
                <ButtonModal icone={IconPlus} onhandlerButtonClick={handlerButtonClick}/>
                <Modal isOpen={showModal} onClose={handlerCloseModal} getValues={handlerValues}></Modal>
                <TableModal/>
            </section>
        </div>
    )
}