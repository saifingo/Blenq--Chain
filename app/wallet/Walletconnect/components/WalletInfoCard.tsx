import React, { useState } from 'react';
import { Copy, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

interface WalletInfoCardProps {
  address: string;
  balance: string;
  seedPhrase: string;
}

export function WalletInfoCard({ address, balance, seedPhrase }: WalletInfoCardProps) {
  const [showSeed, setShowSeed] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedSeed, setCopiedSeed] = useState(false);

  const copyToClipboard = (text: string, type: 'address' | 'seed') => {
    navigator.clipboard.writeText(text);
    if (type === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } else {
      setCopiedSeed(true);
      setTimeout(() => setCopiedSeed(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-w3-bg-secondary dark:bg-w3-secondary rounded-xl shadow-2xl p-6 space-y-6 
                    border border-w3-primary/10 dark:border-w3-primary/20">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-w3-text-primary">
          Wallet Connected
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-w3-accent-blue via-w3-accent-purple to-w3-accent-blue mx-auto rounded-full" />
      </div>

      {/* Address Section */}
      <div className="space-y-3">
        <label className="text-sm uppercase tracking-wider text-w3-text-primary/70">
          Wallet Address
        </label>
        <div className="flex items-center gap-2 bg-w3-bg-primary dark:bg-black/50 rounded-lg p-4 
                        border border-w3-primary/10 dark:border-w3-primary/20">
          <code className="flex-1 text-base md:text-lg font-mono text-w3-text-primary break-all">
            {address}
          </code>
          <button
            onClick={() => copyToClipboard(address, 'address')}
            className="p-2 hover:bg-w3-accent-blue/20 rounded-lg transition-colors"
            title="Copy address"
          >
            {copiedAddress ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5 text-w3-text-primary/70" />
            )}
          </button>
        </div>
      </div>

      {/* Balance Section */}
      <div className="space-y-3">
        <label className="text-sm uppercase tracking-wider text-w3-text-primary/70">
          Balance
        </label>
        <div className="bg-gradient-to-r from-w3-accent-blue to-w3-accent-purple rounded-lg p-4 text-center">
          <p className="text-3xl md:text-4xl font-bold text-white">
            {balance}
          </p>
          <p className="text-sm text-white/80 mt-1">ETH</p>
        </div>
      </div>

      {/* Seed Phrase Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm uppercase tracking-wider text-w3-text-primary/70">
            Seed Phrase
          </label>
          <button
            onClick={() => setShowSeed(!showSeed)}
            className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-w3-accent-purple/20 
                       rounded-lg transition-colors text-w3-text-primary/70"
          >
            {showSeed ? (
              <>
                <EyeOff className="w-4 h-4" />
                <span>Hide</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span>Show</span>
              </>
            )}
          </button>
        </div>
        <div className="relative bg-w3-bg-primary dark:bg-black/50 rounded-lg p-4 
                        border border-w3-accent-red/30 dark:border-w3-accent-red/40">
          {showSeed ? (
            <div className="flex items-start gap-2">
              <code className="flex-1 text-sm font-mono text-w3-text-primary break-words">
                {seedPhrase}
              </code>
              <button
                onClick={() => copyToClipboard(seedPhrase, 'seed')}
                className="p-2 hover:bg-w3-accent-purple/20 rounded-lg transition-colors flex-shrink-0"
                title="Copy seed phrase"
              >
                {copiedSeed ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-w3-text-primary/70" />
                )}
              </button>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-w3-text-primary/50 text-sm blur-sm select-none">
                word word word word word word word word word word word word
              </p>
            </div>
          )}
        </div>
        <p className="text-xs text-w3-accent-red/80 flex items-start gap-2">
          <span className="text-base">⚠️</span>
          <span>Never share your seed phrase with anyone. Store it securely offline.</span>
        </p>
      </div>
    </div>
  );
}
