import Menu from "./Menu";

export default function Pagina(props){
    return (
        <div className="flex bg-white">
            <Menu></Menu>
            <main className="flex p-7">{props.children}</main>
        </div>
    )
}