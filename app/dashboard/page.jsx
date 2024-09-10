import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Menu from "../components/templates/Menu";
import DashboardFinance from "../components/templates/DashboardFinance";

export default async function Dashboard() {
  const session = await getServerSession()

  if(!session) redirect('/')

  return (
    <>
      <Menu name={session?.user?.name}/>
      <DashboardFinance/>
    </>
  );
}
  