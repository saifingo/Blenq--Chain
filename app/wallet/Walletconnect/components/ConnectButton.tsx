import React from 'react';
import { Wallet } from 'lucide-react';

interface ConnectButtonProps {
  onClick: () => void;
}

export function ConnectButton({ onClick }: ConnectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full md:w-auto px-8 py-4 bg-w3-accent-blue text-white rounded-lg 
                 shadow-lg transition-all duration-300 
                 hover:neon-glow-blue dark:hover:neon-glow-blue-dark
                 hover:scale-105 active:scale-95
                 flex items-center justify-center gap-3"
    >
      <Wallet className="w-6 h-6" />
      <span className="text-xl font-bold">Connect Wallet</span>
    </button>
  );
}
