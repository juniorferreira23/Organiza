import { Inter } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Menu from "../components/templates/Menu";

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({ children }) {
    const session = await getServerSession()

    if(!session) redirect('/')

    return (
        <html lang="pt-br">
        <body className={inter.className}>
            <Menu name={session?.user?.name}/>
            {children}
        </body>
        </html>
    );
}
