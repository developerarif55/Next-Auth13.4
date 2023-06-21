import LoginModal from "./component/LoginModal";
import RegisterModal from "./component/RegisterModal";

export default function Home() {
  return (  
    <>
    <div className="h-screen bg-black">
    <RegisterModal />
    <LoginModal />
    </div>
    </>
  ) 
}
