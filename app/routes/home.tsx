import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hello World" },
    { name: "description", content: "Hello World with an animated background" },
  ];
}

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden animate-gradient bg-[length:400%_400%] bg-gradient-to-br from-rose-400 via-amber-300 via-sky-400 to-emerald-400">
      <h1 className="animate-pulse-scale text-6xl font-extrabold text-white drop-shadow-lg">
        Hello, World!
      </h1>
    </main>
  );
}
