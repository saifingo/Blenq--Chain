"use client";
import React, { useState } from 'react';
import { ConnectButton } from './components/ConnectButton';
import { DisconnectButton } from './components/DisconnectButton';
import { WalletInfoCard } from './components/WalletInfoCard';
import { QRCodeModal } from './components/QRCodeModal';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Sparkles } from 'lucide-react';
// import "./components/styles.css";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  // Mock wallet data
  const mockWalletData = {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5',
    balance: '2.4567',
    seedPhrase: 'abandon ability able about above absent absorb abstract absurd abuse access accident'
  };

  const handleConnectClick = () => {
    setShowQRModal(true);
  };

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <div className="min-h-screen bg-w3-bg-primary dark:bg-w3-bg-primary transition-colors duration-300">
      {/* Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-w3-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-w3-accent-purple/10 rounded-full blur-3xl" />
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-6xl space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-w3-accent-blue to-w3-accent-purple rounded-2xl 
                              neon-glow-blue dark:neon-glow-purple-dark">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-w3-text-primary">
              Web3 Wallet Connect
            </h1>
            <p className="text-lg md:text-xl text-w3-text-primary/70 max-w-2xl mx-auto">
              Connect your decentralized wallet securely and manage your digital assets with ease
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-8">
            {!isConnected ? (
              /* Connect State */
              <div className="w-full max-w-md space-y-6">
                <div className="bg-w3-bg-secondary dark:bg-w3-secondary rounded-xl shadow-2xl p-8 
                                border border-w3-primary/10 dark:border-w3-primary/20 space-y-6">
                  <div className="text-center space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-w3-text-primary">
                      Get Started
                    </h2>
                    <p className="text-sm md:text-base text-w3-text-primary/70">
                      Connect your wallet to access the decentralized web
                    </p>
                  </div>

                  <ConnectButton onClick={handleConnectClick} />

                  <div className="space-y-3 pt-4 border-t border-w3-primary/10 dark:border-w3-primary/20">
                    <p className="text-xs text-center text-w3-text-primary/60">Supported Wallets:</p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="px-4 py-2 bg-w3-bg-primary dark:bg-black/50 rounded-lg 
                                      border border-w3-primary/10 dark:border-w3-primary/20">
                        <span className="text-sm font-mono text-w3-text-primary">MetaMask</span>
                      </div>
                      <div className="px-4 py-2 bg-w3-bg-primary dark:bg-black/50 rounded-lg 
                                      border border-w3-primary/10 dark:border-w3-primary/20">
                        <span className="text-sm font-mono text-w3-text-primary">WalletConnect</span>
                      </div>
                      <div className="px-4 py-2 bg-w3-bg-primary dark:bg-black/50 rounded-lg 
                                      border border-w3-primary/10 dark:border-w3-primary/20">
                        <span className="text-sm font-mono text-w3-text-primary">Coinbase</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-w3-bg-secondary dark:bg-w3-secondary rounded-lg p-4 
                                  border border-w3-primary/10 dark:border-w3-primary/20 text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <p className="text-sm font-bold text-w3-text-primary">Secure</p>
                    <p className="text-xs text-w3-text-primary/60 mt-1">End-to-end encryption</p>
                  </div>
                  <div className="bg-w3-bg-secondary dark:bg-w3-secondary rounded-lg p-4 
                                  border border-w3-primary/10 dark:border-w3-primary/20 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <p className="text-sm font-bold text-w3-text-primary">Fast</p>
                    <p className="text-xs text-w3-text-primary/60 mt-1">Instant connection</p>
                  </div>
                  <div className="bg-w3-bg-secondary dark:bg-w3-secondary rounded-lg p-4 
                                  border border-w3-primary/10 dark:border-w3-primary/20 text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <p className="text-sm font-bold text-w3-text-primary">Decentralized</p>
                    <p className="text-xs text-w3-text-primary/60 mt-1">Full control</p>
                  </div>
                </div>
              </div>
            ) : (
              /* Connected State */
              <div className="w-full space-y-6">
                <WalletInfoCard
                  address={mockWalletData.address}
                  balance={mockWalletData.balance}
                  seedPhrase={mockWalletData.seedPhrase}
                />
                <div className="flex justify-center">
                  <DisconnectButton onClick={handleDisconnect} />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center space-y-4 pt-12">
            <p className="text-xs md:text-sm text-w3-text-primary/50">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-1 bg-w3-accent-blue rounded-full" />
              <div className="h-1 w-1 bg-w3-accent-purple rounded-full" />
              <div className="h-1 w-1 bg-w3-accent-blue rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        onConnect={handleConnect}
      />
    </div>
  );
}
