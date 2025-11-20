import { Header } from "./components/Header";
import React from "react";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Ecosystem } from "./components/Ecosystem";
import { TokenUtility } from "./components/TokenUtility";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />
       <main className="pt-20">
        <Hero />
        <Stats />
        <Features />
        <Ecosystem />
        <TokenUtility />
      </main>
      <Footer /> 
    </div>
  );
}
