"use client";

import useloginModal from "@/hook/Login";
import useregisterModal from "@/hook/Register";
import { signIn } from 'next-auth/react';
import { useCallback, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

function RegisterModal() {
  const [isLoading, setIsLoading ] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const useregister = useregisterModal()
  const userlogin = useloginModal()

  // onsubmit function

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          username,
          name
        })
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      setIsLoading(false);
  
     
  
      await signIn('credentials', {
        email,
        password,
      });
  
      console.log("Account created");
  
      useregister.onClose();
      console.log("Account modal closed");
    } catch (error) {
      console.log("Account error:");
      console.error(error);
      // Handle the error here, show error message, etc.
    } finally {
      setIsLoading(false);
    }
  }, [useregister, email, password, username, name]);
  
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
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <Input
        disabled={isLoading}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        type="password"
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
        onSubmit={onSubmit}
        onClose={useregister.onClose}
      />
    </div>
  );
}

export default RegisterModal;
