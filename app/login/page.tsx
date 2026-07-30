"use client";

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
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen flex-col p-6">
                <h1>
                    Login
                </h1>

                <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit}>
                    <input
                        value={email}
                        type="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        value={password}
                        type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <Button
                        type="submit" variant="primary">Sign in</Button>
                    <Button
                        variant="secondary">Create account</Button>
                </form>
            </main>
        </div>
    )
}