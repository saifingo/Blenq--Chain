"use client";
import { Wallet, RefreshCw, TrendingUp, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Wallet,
      title: "Secure Wallet",
      description: "Multi-chain wallet with bank-grade security. Store, send, and receive crypto assets with confidence.",
      color: "var(--accent-blue)",
      gradient: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
    },
    {
      icon: RefreshCw,
      title: "Instant Swap",
      description: "Exchange tokens instantly with the best rates. Access liquidity pools across multiple chains.",
      color: "var(--accent-purple)",
      gradient: "linear-gradient(135deg, var(--accent-purple), var(--accent-blue))",
    },
    {
      icon: TrendingUp,
      title: "Yield Staking",
      description: "Earn passive income through our optimized staking pools. Flexible terms with competitive APY rates.",
      color: "var(--accent-green)",
      gradient: "linear-gradient(135deg, var(--accent-green), var(--accent-blue))",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and multi-factor authentication. Your assets are protected 24/7.",
      color: "var(--accent-orange)",
      gradient: "linear-gradient(135deg, var(--accent-orange), var(--accent-red))",
    },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{
        padding:"30px 20px" ,display: "flex",
        justifyContent: "center",  backgroundColor: "var(--bg-primary)" }}
    >
     <div style={{
        width:'100%'
      }} className="max-w-7xl mx-auto">
         <div style={{marginBottom:'20px' , display:'flex' , flexDirection:'column' , alignItems:'center' , gap:'10px'}} className="text-center mb-16">
          <h2 className="section-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Powerful Features
          </h2>
          <p className="body-regular max-w-2xl mx-auto" style={{ marginBottom:"20px" , color: "var(--text-secondary)" }}>
            Everything you need to participate in the decentralized economy, 
            all in one powerful platform
          </p>
        </div>

        <div style={{ padding:'3px'}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-[30px] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                {/* Background Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl"
                  style={{ background: feature.gradient }}
                />

                {/* Content */}
                <div style={{ display:'flex',
                flexDirection:'column',
                alignItems:'center' ,
                justifyContent:'center',
                textAlign:'center' ,
                padding:'20px' ,
                gap:'10px'
                }} className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-[20px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: feature.gradient }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3
                    className="headline-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="body-regular"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {feature.description}
                  </p>

                  <button
                    className="mt-6 caption-bold flex items-center gap-2 group/btn"
                    style={{ color: feature.color }}
                  >
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
