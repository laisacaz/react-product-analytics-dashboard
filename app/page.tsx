import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(email, password);

    // Aqui você chamará sua API
  }
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen flex-col p-6">

        <h1>
          Login
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <Button variant="primary">Sign in</Button>
          <Button
            type="submit"
            variant="secondary">Create account</Button>
        </form>
      </main>
    </div>
  );
}
