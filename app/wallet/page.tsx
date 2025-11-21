"use client";

import { useState } from "react";
import Image from "next/image";

// TypeScript window extensions for Ethereum & OKX Wallet
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
    };
    okxwallet?: {
      request: (args: { method: string }) => Promise<string[]>;
    };
  }
}

export default function WalletPage() {
  const [status, setStatus] = useState("idle"); // idle | connecting | success | error

  const connectMetaMask = async () => {
    setStatus("connecting");

    if (!window.ethereum) {
      setStatus("error");
      alert("MetaMask not found. Install MetaMask first.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected:", accounts[0]);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const connectOKX = async () => {
    setStatus("connecting");

    if (!window.okxwallet) {
      setStatus("error");
      alert("OKX Wallet extension not found.");
      return;
    }

    try {
      const accounts = await window.okxwallet.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected:", accounts[0]);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const connectWalletConnect = async () => {
    setStatus("connecting");
    alert("WalletConnect flow integrate later. (QR modal required)");
    setStatus("idle");
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ padding: "20px", backgroundColor: "var(--bg-primary)" }}
    >
      <h1
        className="headline-bold mb-10"
        style={{ color: "var(--text-primary)" }}
      >
        Connect Your Wallet
      </h1>

      <div
        style={{ marginTop: "20px" }}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        {/* MetaMask */}
        <button
          onClick={connectMetaMask}
          className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
          style={{
            padding: "0px 10px",
            background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
            color: "#fff",
          }}
        >
          <Image
            style={{ margin: "5px" }}
            src="https://lh3.googleusercontent.com/EQpmNpyWc98Rhu0bDzuPPS8ivQN2xZoc-saVhYHm5394wqS6eCRI5KyQFtxQf1z-OgS5HYVxvnUX8iv3uWy5jM2maw=s60"
            width={32}
            height={32}
            alt="MetaMask"
          />
          <span className="body-bold">Connect MetaMask</span>
        </button>

        {/* OKX */}
        <button
          onClick={connectOKX}
          className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
          style={{
            padding: "0px 10px",
            border: "1px solid var(--accent-blue)",
            color: "var(--text-primary)",
          }}
        >
          <Image
            style={{ margin: "5px" }}
            src="https://play-lh.googleusercontent.com/TjM3iJJHQBi8yvElMbbP3AJieBK0jAjGKO5oQKUVg09qYPZiADjtjQEBAhMCIB09Ky0=w480-h960-rw"
            width={32}
            height={32}
            alt="OKX"
          />
          <span className="body-bold">Connect OKX Wallet</span>
        </button>

        {/* WalletConnect */}
        <button
          onClick={connectWalletConnect}
          className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
          style={{
            padding: "0px 10px",
            border: "1px solid var(--accent-purple)",
            color: "var(--text-primary)",
          }}
        >
          <Image
            style={{ margin: "5px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAALVBMVEVHcEwIiPAIiPAIiPAIiPAIiPAIiPAIiPAIiPAIiPAIiPAIiPAIiPAIiPAIiPAkn9m4AAAAD3RSTlMA/1LKYuq+M906IhIJrYixCTN5AAAAqElEQVQokdWRSRbDIAxDg23m4f7HjQyBFtoLxBv0/DFIcF1vrUQilP6RTM70cpRP5qtZVf3OYkAz1NZqF3GDgk6LOC/HBkz7aGMq83Ju5QMIG0uaCq7LVFiDncpOJTZ0ldWnjI4xVh4LpvZEXgPSVZTBFyhp3CdPdDohcMmsVHe5lVVnLTrsIw/lvt6hn2wcsivdGdzzYIPy8fqeeTrgkyHR6qSfX3lH3W4KBAaKxKsVAAAAAElFTkSuQmCC"
            width={32}
            height={32}
            alt="WalletConnect"
          />
          <span className="body-bold">WalletConnect</span>
        </button>
      </div>

      {/* Status Text */}
      <div
        className="mt-6 body-regular"
        style={{ marginTop: "50px", color: "var(--text-secondary)" }}
      >
        {status === "connecting" && "Connecting..."}
        {status === "success" && "Wallet Connected Successfully!"}
        {status === "error" && "Connection Failed. Try Again."}
      </div>
    </main>
  );
}
