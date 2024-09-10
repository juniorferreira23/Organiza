"use client";

import { useEffect } from "react";
import FormSignIn from "./components/templates/FormSignIn";

export default function Login() {

    useEffect(() => {
      localStorage.setItem('Users', JSON.stringify([{id: '1', name: 'Teste', email: 'teste', password: 'teste'}]))
    })

    return (
      <main className="bg-blue-900 px-5">
        <div className="container max-auto">
          <FormSignIn/>
        </div>
      </main>
    );
  }