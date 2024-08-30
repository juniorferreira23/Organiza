'use client'

import { signOut } from "next-auth/react"


export default function ButtonSignOut(props){
    return (
        <button onClick={() => signOut()} className="flex gap-2 px-4 py-2 w-full hover:bg-black">
            <props.icone size={24} stroke={1}/>
            {props.page}
        </button>
    )
}