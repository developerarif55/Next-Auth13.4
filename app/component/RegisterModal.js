"use client";

import useloginModal from "@/hook/Login";
import useregisterModal from "@/hook/Register";
import { useCallback, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

function RegisterModal() {
  const [isLoading, setIsloading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const useregister = useregisterModal()
  const userlogin = useloginModal()
  // add toggler for register
  const onToggle = useCallback(() => {
    if(isLoading){
      return
    }
    useregister.onClose()
    userlogin.onOpen()

  }, [useregister, userlogin, isLoading])
  const bodyContainer = (
    <div className="flex flex-col gap-4 ">
      <Input
        disabled={isLoading}
        placeholder="Email"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="User Name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );

  // footer container
  const footerContainer = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an Account
        <span className="text-white cursor-poiter hover:underline"
        onClick={onToggle}
        >
          Sing in
        </span>
      </p>

    </div>
  )
  return (
    <div>
      <Modal
        disabled={isLoading}
        title="Register an Account"
        actionLabel="Register"
        body={bodyContainer}
        footer={footerContainer}
        isOpen={useregister.isOpen}
       
      />
    </div>
  );
}

export default RegisterModal;
