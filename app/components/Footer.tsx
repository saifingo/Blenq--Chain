"use client";
import { Github, Twitter, MessageCircle, Send } from "lucide-react";

export function Footer() {
  const links = {
    Product: ["Wallet", "Swap", "Staking", "Bridge", "NFT Marketplace"],
    Resources: ["Documentation", "API Reference", "Tutorials", "Blog", "FAQs"],
    Company: ["About Us", "Careers", "Press Kit", "Partners", "Contact"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Disclaimer"],
  };

  const socials = [
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Github, url: "#", label: "GitHub" },
    { icon: MessageCircle, url: "#", label: "Discord" },
    { icon: Send, url: "#", label: "Telegram" },
  ];

  return (
    <footer
      className="py-16 px-6 border-t-2"
      style={{
        padding:'40px 20px 20px',
         display: "flex",
        justifyContent: "center",
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--accent-blue)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div
              className="headline-bold mb-4"
              style={{
                background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Blenq-Chain
            </div>
            <p className="body-regular mb-6" style={{ color: "var(--text-secondary)" }}>
              Building the future of decentralized finance with cutting-edge technology
              and user-first design.
            </p>

            {/* Social Links */}
            <div style={{margin:'20px 0'}} className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-[15px] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--accent-blue)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="body-bold mb-4" style={{ color: "var(--text-primary)" }}>
                {category}
              </h4>
              <ul style={{margin:'10px 0'}} className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="notes-regular transition-colors duration-300 hover:opacity-80"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="p-8 rounded-[25px] mb-12"
          style={{ 
            display: "flex",
            flexDirection: "column",
            margin: "20px 0",
            padding: "20px",
            alignItems: "center",
            backgroundColor: "var(--bg-primary)",
            border: "2px solid var(--accent-purple)",
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="headline-bold mb-3" style={{ marginBottom:'3px', color: "var(--text-primary)" }}>
              Stay Updated
            </h3>
            <p className="body-regular mb-6" style={{ color: "var(--text-secondary)" }}>
              Subscribe to our newsletter for the latest updates and exclusive offers
            </p>

            <div style={{margin:'20px 0 10px 0'}} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-[20px] body-regular transition-all duration-300 focus:outline-none"
                style={{
                  padding:'4px 15px',
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid transparent",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-blue)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                }}
              />
              <button
                className="px-6 py-3 rounded-[20px] body-bold transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{
                  padding:'6px 15px',
                  background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  color: "#ffffff",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div  className="flex flex-col md:flex-row justify-between items-center pt-8 border-t"
          style={{
            paddingTop:'8px' ,
             borderColor: "var(--accent-blue)" 
            }}
        >
          <p className="caption-regular mb-4 md:mb-0" style={{ color: "var(--text-muted)" }}>
            © 2025 CiapherFinance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="caption-regular transition-colors duration-300 hover:opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              Security
            </a>
            <a
              href="#"
              className="caption-regular transition-colors duration-300 hover:opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              Audit Reports
            </a>
            <a
              href="#"
              className="caption-regular transition-colors duration-300 hover:opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              Bug Bounty
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
