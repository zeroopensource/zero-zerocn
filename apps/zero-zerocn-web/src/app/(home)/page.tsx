"use client";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/docs");
  return <div className="p-2">Redirecting</div>;
}
