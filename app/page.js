import { getServerSession } from "next-auth";
import LoginModal from "./component/LoginModal";
import RegisterModal from "./component/RegisterModal";

import { handler } from "./api/auth/[...nextauth]/route";
export default async function Home() {

  const session = await getServerSession(handler)
  return (  
    <>
    <div className="h-screen bg-black">
    <RegisterModal />
    <LoginModal />
    <pre className="text-white">{JSON.stringify(session)}</pre>
    </div>
    </>
  ) 
}
