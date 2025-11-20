import { TrendingUp, Users, DollarSign, Repeat } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: DollarSign,
      label: "Total Value Locked",
      value: "$2.4B",
      change: "+12.5%",
      color: "var(--accent-blue)",
    },
    {
      icon: Users,
      label: "Active Users",
      value: "500K+",
      change: "+8.3%",
      color: "var(--accent-purple)",
    },
    {
      icon: TrendingUp,
      label: "24h Volume",
      value: "$156M",
      change: "+15.7%",
      color: "var(--accent-green)",
    },
    {
      icon: Repeat,
      label: "Trading Pairs",
      value: "450+",
      change: "+5 new",
      color: "var(--accent-orange)",
    },
  ];

  return (
    <section
      // className="py-20 px-6"
      style={{display: "flex",
        justifyContent: "center", 
        backgroundColor: "var(--bg-secondary)" ,
        padding:"30px 20px"
      }}
    >
      <div style={{
        width:'100%'
      }} className="max-w-7xl mx-auto">
        <div style={{marginBottom:'20px'}} className="text-center mb-12">
          <h2 className="section-bold mb-4" style={{ marginBottom:'4px', color: "var(--text-primary)" }}>
            Trusted by the Community
          </h2>
          <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
            Real-time platform statistics and growth metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-[25px] transition-all duration-300 hover:scale-105 neon-glow-blue relative overflow-hidden group"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "2px solid",
                  borderColor: stat.color,
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-50"
                  style={{ backgroundColor: stat.color }}
                />

                <div style={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  padding:'20px 0',
                  gap:'5px'
                }} className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-[20px] flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: stat.color,
                      opacity: 0.3,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "var(--bg-primary)" }} />
                  </div>

                  <div className="headline-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {stat.value}
                  </div>

                  <div className="body-regular mb-2" style={{ color: "var(--text-secondary)" }}>
                    {stat.label}
                  </div>

                  <div
                    className="caption-bold inline-flex items-center gap-1 px-3 py-1 rounded-[15px]"
                    style={{
                      padding: "4px 12px",
                      backgroundColor: stat.color,
                      color: "#ffffff",
                      opacity: 0.9,
                    }}
                  >
                    {stat.change}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
