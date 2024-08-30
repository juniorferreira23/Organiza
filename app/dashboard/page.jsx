import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Menu from "../components/templates/Menu";

export default async function Dashboard() {
  const session = await getServerSession()

  if(!session) redirect('/')

  return (
    <>
      <div>Olá, {session?.user?.name}</div>
      <Menu/>
    </>
  );
}
  