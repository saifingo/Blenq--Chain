import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Animated Background Gradient Sphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, var(--accent-purple) 0%, var(--accent-blue) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-[25px] mb-8 border-2 neon-glow-blue"
          style={{
            padding: "6px 15px",
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--accent-blue)",
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "var(--accent-blue)" }} />
          <span className="caption-bold" style={{ color: "var(--text-primary)" }}>
            Next-Gen Web3 Platform
          </span>
        </div>

        <h1
          className="title-bold mb-6 max-w-4xl mx-auto"
          style={{paddingTop:'10px' , color: "var(--text-primary)" }}
        >
          Your Gateway to the
          <span
            className="block mt-2"
            style={{
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Decentralized Future
          </span>
        </h1>

        <p 
          className="body-regular mb-12 max-w-2xl mx-auto"
          style={{paddingTop:'10px' , color: "var(--text-secondary)" }}
        >
          Experience seamless crypto trading, secure wallet management, and high-yield staking.
          Join the revolution with our all-in-one Web3 platform designed for the modern investor.
        </p>

        {/* CTA Buttons */}
        <div style={{margin:'15px 0'}} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            className="px-8 py-4 rounded-[25px] body-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 neon-glow-blue"
            style={{
                padding: "6px 15px",
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              color: "#ffffff",
            }}
          >
            Launch App
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            className="px-8 py-4 rounded-[25px] body-bold border-2 transition-all duration-300 hover:scale-105"
            style={{
                padding: "6px 15px",
              backgroundColor: "transparent",
              borderColor: "var(--accent-purple)",
              color: "var(--text-primary)",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Decorative Elements */}
        <div style={{marginTop:'20px' , padding:'0 20px'}} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Trusted by", value: "50K+" },
            { label: "Countries", value: "150+" },
            { label: "Transactions", value: "1M+" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-[20px]"
              style={{
                padding:'4px' ,
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--accent-blue)",
              }}
            >
              <div
                className="headline-bold"
                style={{
                  background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="caption-regular" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
