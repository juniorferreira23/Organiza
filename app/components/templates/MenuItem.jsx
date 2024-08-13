import Link from "next/link"


export default function MenuItem(props){
    return (
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
            <props.icone size={24} stroke={1}/>
            <span>{props.page}</span>
        </Link>
    )
}