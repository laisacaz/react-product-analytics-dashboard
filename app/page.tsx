import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen flex-col p-6">
        <Button>Sign in</Button>
      </main>
    </div>
  );
}
