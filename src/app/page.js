import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
  return null; // Ensures nothing is rendered before redirection
}
