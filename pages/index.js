import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

// NEXTAUTH_URL | NEXT_PUBLIC_CLIENT_SECRET | NEXT_PUBLIC_CLIENT_ID | JWT_SECRET

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
