'use client'

import MenuItem from "./MenuItem";
import ButtonSignOut from "./ButtonSignOut";
import { IconHome, IconZoomMoney, IconUserCircle, IconSettings, IconLogout } from "@tabler/icons-react"

export default function Menu(){

    return (
        <aside className="w-72 bg-blue-900 h-screen gap-1">
            <nav className="flex-col py-7">
                <MenuItem url="/" icone={IconHome} page="Início"/>
                <MenuItem url="/Investimentos" icone={IconZoomMoney} page="Investimentos"/>
                <MenuItem url="/Perfil" icone={IconUserCircle} page="Perfil"/>
                <MenuItem url="/Configurações" icone={IconSettings} page="Configurações"/>
                <ButtonSignOut icone={IconLogout} page="Sair"/>
            </nav>
        </aside>
    )
}