"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Token", href: "#token" },
    { label: "Docs", href: "#docs" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-lg"
      style={{
        backgroundColor: "var(--bg-primary)",
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid var(--accent-blue)",
        opacity: 0.98,
      }}
    >
      <div
        style={{ padding: "10px 20px", width: "100%" }}
        className="max-w-7xl mx-auto flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          className="headline-bold cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Blenq-Chain
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="body-regular transition-all duration-300 hover:opacity-70"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />

          {/* Connect Wallet Button - Desktop */}
          <button
            onClick={() => router.push("/wallet")}
            className="hidden lg:block px-6 py-3 rounded-[20px] body-bold transition-all duration-300 hover:scale-105"
            style={{
              padding: "6px 15px",
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              color: "#ffffff",
            }}
          >
            Connect Wallet
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: "var(--text-primary)" }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 p-6 border-t"
            style={{
              backgroundColor: "var(--bg-primary)",
              padding: "10px 20px",
              borderColor: "var(--accent-blue)",
            }}
          >
            <nav className="flex flex-col gap-4 mb-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="body-regular py-2 transition-all duration-300 hover:opacity-70"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Connect Button Mobile */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/wallet");
              }}
              className="w-full px-6 py-3 rounded-[20px] body-bold transition-all duration-300"
              style={{
                marginTop: "10px",
                padding: "6px 15px",
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                color: "#ffffff",
              }}
            >
              Connect Wallet
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
