import MenuItem from "./MenuItem";
import { listaNavegacao } from "./monkMenu";

export default function Menu(){

    return (
        <aside className="w-72 bg-blue-900 h-screen gap-1">
            <nav className="flex-col py-7">
                <ul>
                    <MenuItem navegacao={listaNavegacao}/>
                </ul>
            </nav>
        </aside>
    )
}