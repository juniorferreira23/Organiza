import { getServerSession } from "next-auth";
import Pagina from "../components/templates/Pagina";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession()

  if(!session) redirect("/login")

  return (
    <>
      <div>Olá, {session?.user?.name}</div>
      <Pagina></Pagina>
    </>
  );
}
  