import React from 'react';
import { LogOut } from 'lucide-react';

interface DisconnectButtonProps {
  onClick: () => void;
}

export function DisconnectButton({ onClick }: DisconnectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full md:w-auto px-6 py-3 bg-w3-accent-red text-white rounded-lg 
                 shadow-lg transition-all duration-300 
                 hover:neon-glow-red dark:hover:neon-glow-red-dark
                 hover:scale-105 active:scale-95
                 flex items-center justify-center gap-2"
    >
      <LogOut className="w-5 h-5" />
      <span className="text-lg font-bold">Disconnect</span>
    </button>
  );
}
