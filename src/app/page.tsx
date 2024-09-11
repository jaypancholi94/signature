import { MainLayout } from "@/components/layouts/main";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="h-screen">
      <NavBar />
      <MainLayout />
    </main>
  );
}
