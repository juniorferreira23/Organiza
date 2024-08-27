"use client";

import { useRouter } from "next/navigation";
import FormSignIn from "../components/templates/FormSignIn";

export default function Login() {
  const router = useRouter()

    return (
      <main className="bg-blue-900 px-5">
        <div className="container max-auto">
          <FormSignIn/>
        </div>
      </main>
    );
  }