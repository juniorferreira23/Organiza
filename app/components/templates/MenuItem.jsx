import Link from "next/link"


export default function MenuItem(props){
    return (
        <>
            {props.navegacao.map(item => <li key={item} className="px-4 py-2 hover:bg-black"><Link href={item}>{item}</Link></li>)}
        </>
    )
}