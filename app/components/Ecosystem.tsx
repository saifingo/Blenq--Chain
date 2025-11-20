"use client";
import { Chrome, Smartphone, Coins, GraduationCap } from "lucide-react";

export function Ecosystem() {
  const ecosystemItems = [
    {
      icon: Chrome,
      title: "Wallet Extension",
      description: "Browser extension for Chrome, Firefox, and Edge. Seamlessly interact with dApps.",
      tag: "Available Now",
      color: "var(--accent-blue)",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Trade on the go with our iOS and Android apps. Full-featured mobile experience.",
      tag: "Download",
      color: "var(--accent-purple)",
    },
    {
      icon: Coins,
      title: "Blenq Coin",
      description: "Our native utility token with governance rights, staking rewards, and exclusive benefits.",
      tag: "BLNQ Token",
      color: "var(--accent-green)",
    },
    {
      icon: GraduationCap,
      title: "Web3 One Academy",
      description: "Learn blockchain, DeFi, and Web3 development. Free courses for the community.",
      tag: "Learn Free",
      color: "var(--accent-orange)",
    },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{ padding:"30px 20px" ,display: "flex",
        justifyContent: "center",  backgroundColor: "var(--bg-secondary)" }}
    >
      <div style={{
        width:'100%'
      }} className="max-w-7xl mx-auto">
        <div style={{marginBottom:'20px' , display:'flex' , flexDirection:'column' , alignItems:'center' , gap:'10px'}} className="text-center mb-16">
          <h2 className="section-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Complete Ecosystem
          </h2>
          <p className="body-regular max-w-2xl mx-auto" style={{ marginBottom:"20px", color: "var(--text-secondary)" }}>
            A comprehensive suite of tools and resources to power your Web3 journey
          </p>
        </div>

        <div style={{ padding:'3px'}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-[30px] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.classList.add("neon-glow-blue");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.classList.remove("neon-glow-blue");
                }}
              >
                {/* Hover Glow Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                />

                {/* Content */}
                <div style={{display:'flex' ,  flexDirection:'column',
                alignItems:'center' ,
                justifyContent:'center',
                textAlign:'center' ,
                padding:'20px' ,
                gap:'10px'}} className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-[20px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: item.color,
                      opacity: 0.3,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "var(--bg-primary)" }} />
                  </div>

                  {/* Tag */}
                  <div
                    className="caption-bold inline-block px-3 py-1 rounded-[15px] mb-4"
                    style={{
                      padding:'4px 12px',
                      backgroundColor: item.color,
                      color: "#ffffff",
                    }}
                  >
                    {item.tag}
                  </div>

                  {/* Title */}
                  <h3
                    className="headline-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="notes-regular"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
