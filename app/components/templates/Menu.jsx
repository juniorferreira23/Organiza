'use client'

import MenuItem from "./MenuItem";
import ButtonSignOut from "./ButtonSignOut";
import { IconHome, IconZoomMoney, IconUserCircle, IconSettings, IconLogout } from "@tabler/icons-react"

export default function Menu(props){
    return(
        <div className="navbar bg-blue-900">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-blue-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <MenuItem url="/dashboard" icone={IconHome} page="Início"/>
                    <MenuItem url="/Investimentos" icone={IconZoomMoney} page="Investimentos"/>
                    <MenuItem url="/Perfil" icone={IconUserCircle} page="Perfil"/>
                    <MenuItem url="dashboard/settings" icone={IconSettings} page="Configurações"/>
                    <ButtonSignOut icone={IconLogout} page="Sair"/>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <p className="text-xl">Entradas e Despesas</p>
            </div>
            <div className="navbar-end">
                <p className="text-base">Olá, {props.name}</p>
                {/* <input type="checkbox" value="synthwave" class="toggle theme-controller" /> */}
            </div>
        </div>
    )
}