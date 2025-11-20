import { Vote, Gift, Zap, Lock } from "lucide-react";

export function TokenUtility() {
  const utilities = [
    {
      icon: Vote,
      title: "Governance",
      description: "Vote on protocol proposals and shape the future",
      percentage: "25%",
    },
    {
      icon: Gift,
      title: "Rewards",
      description: "Earn trading fee rebates and staking rewards",
      percentage: "35%",
    },
    {
      icon: Zap,
      title: "Reduced Fees",
      description: "Get up to 50% discount on trading fees",
      percentage: "20%",
    },
    {
      icon: Lock,
      title: "Exclusive Access",
      description: "Early access to new features and products",
      percentage: "20%",
    },
  ];

  const tokenomics = [
    { label: "Community Rewards", value: "40%", color: "var(--accent-blue)" },
    { label: "Team & Advisors", value: "20%", color: "var(--accent-purple)" },
    { label: "Ecosystem Growth", value: "25%", color: "var(--accent-green)" },
    { label: "Liquidity", value: "15%", color: "var(--accent-orange)" },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{   padding:"30px 20px" ,display: "flex",
        justifyContent: "center",  backgroundColor: "var(--bg-primary)" }}
    >
      <div style={{
        width:'100%'
      }} className="max-w-7xl mx-auto">
        <div style={{marginBottom:'20px' , display:'flex' , flexDirection:'column' , alignItems:'center' , gap:'10px'}} className="text-center mb-16">
          <h2 className="section-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Blenq Token Utility
          </h2>
          <p className="body-regular max-w-2xl mx-auto" style={{ marginBottom:"20px" , color: "var(--text-secondary)" }}>
            Empowering holders with real value and utility across the platform
          </p>
        </div>

        {/* Utilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {utilities.map((utility, index) => {
            const Icon = utility.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-[25px] text-center transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--accent-blue)",
                  display:'flex',
                flexDirection:'column',
                alignItems:'center' ,
                justifyContent:'center',
                textAlign:'center' ,
                padding:'20px' ,
                gap:'10px'
                }}
                
              >
                <div
                  className="w-12 h-12 rounded-[18px] flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="headline-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {utility.title}
                </h4>
                <p className="notes-regular mb-3" style={{ color: "var(--text-secondary)" }}>
                  {utility.description}
                </p>
                <div
                  className="caption-bold"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {utility.percentage}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tokenomics */}
        <div
          className="p-10 rounded-[30px] neon-glow-purple"
          style={{
            width:'100%',
            margin:'40px 0',
            padding:'20px 0px',
              display:'flex',
                flexDirection:'column',
                alignItems:'center' ,
                justifyContent:'center',
                textAlign:'center' ,
                gap:'5px' ,
            backgroundColor: "var(--bg-secondary)",
            border: "2px solid var(--accent-purple)",
          }}
        >
          <h3 className="headline-bold mb-8 text-center" style={{ marginBottom:'10px' , color: "var(--text-primary)" }}>
            Tokenomics Distribution
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tokenomics.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-[25px] text-center overflow-hidden"
              
                style={{ display:'flex',
                  border: "2px solid",
                  borderColor: item.color,
                  backgroundColor: "var(--bg-primary)",
                flexDirection:'column',
                alignItems:'center' ,
                justifyContent:'center',
                textAlign:'center' ,
                padding:'20px' ,
                gap:'10px'
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ backgroundColor: "item.color" }}
                />
                <div
                  className="section-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.value}
                </div>
                <div className="body-regular" style={{ color: "var(--text-secondary)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar Visualization */}
          <div className="flex rounded-[20px] overflow-hidden h-4">
            {tokenomics.map((item, index) => (
              <div
                key={index}
                style={{
                  width: item.value,
                  backgroundColor: "item.color",
                }}
                className="transition-all duration-500"
              />
            ))}
          </div>

          <div style={{display:'flex', flexDirection:'column' , gap:'7px'}} className="text-center mt-8">
            <p className="notes-regular mb-4" style={{ color: "var(--text-secondary)" }}>
              Total Supply: 1,000,000,000 BLNQ
            </p>
            <button
              className="px-6 py-3 rounded-[20px] body-bold transition-all duration-300 hover:scale-105"
              style={{
                padding:'6px 15px',
                background: "linear-gradient(135deg, var(--accent-purple), var(--accent-blue))",
                color: "#ffffff",
              }}
            >
              View Full Tokenomics
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
