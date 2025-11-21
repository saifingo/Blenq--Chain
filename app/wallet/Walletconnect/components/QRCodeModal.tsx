"use client";

import React, { useEffect } from "react";
import { X, Scan } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export function QRCodeModal({ isOpen, onClose, onConnect }: QRCodeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleConnect = () => {
    onConnect();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: 'spring' }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-w3-bg-primary dark:bg-w3-bg-secondary rounded-2xl shadow-2xl 
                       max-w-md w-full p-8 space-y-6
                       border-2 border-w3-accent-blue dark:border-w3-accent-purple
                       dark:neon-glow-purple-dark neon-glow-blue"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-w3-bg-secondary dark:hover:bg-w3-secondary 
                         rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-w3-text-primary" />
            </button>

            {/* Header */}
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-to-br from-w3-accent-blue to-w3-accent-purple rounded-2xl">
                  <Scan className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-w3-text-primary">
                Scan QR Code
              </h3>
              <p className="text-sm text-w3-text-primary/70">
                Scan with your wallet app to connect
              </p>
            </div>

            {/* QR Code Placeholder */}
            <div className="relative aspect-square bg-white rounded-xl p-6 
                            border-2 border-w3-primary/10 shadow-inner">
              {/* QR Code Grid Pattern */}
              <div className="absolute inset-6 grid grid-cols-8 gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-w3-accent-blue to-w3-accent-purple 
                                rounded-xl shadow-lg flex items-center justify-center">
                  <Scan className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-w3-text-primary/80">
                <span className="flex-shrink-0 w-6 h-6 bg-w3-accent-blue text-white rounded-full 
                                 flex items-center justify-center font-bold">1</span>
                <p>Open your Web3 wallet app</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-w3-text-primary/80">
                <span className="flex-shrink-0 w-6 h-6 bg-w3-accent-purple text-white rounded-full 
                                 flex items-center justify-center font-bold">2</span>
                <p>Scan this QR code</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-w3-text-primary/80">
                <span className="flex-shrink-0 w-6 h-6 bg-w3-accent-blue text-white rounded-full 
                                 flex items-center justify-center font-bold">3</span>
                <p>Approve the connection</p>
              </div>
            </div>

            {/* Simulate Connect Button */}
            <button
              onClick={handleConnect}
              className="w-full px-6 py-3 bg-gradient-to-r from-w3-accent-blue to-w3-accent-purple 
                         text-white rounded-lg shadow-lg transition-all duration-300 
                         hover:neon-glow-purple dark:hover:neon-glow-purple-dark
                         hover:scale-105 active:scale-95 font-bold"
            >
              Simulate Connection
            </button>

            <p className="text-xs text-center text-w3-text-primary/50">
              This is a demo. In production, this would connect to your actual wallet.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
