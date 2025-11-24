import logoImage from "@assets/C6F88A45-86CD-4D36-ABFB-9DAD43818DEF_1756322163697.png";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative group cursor-pointer overflow-visible z-50`}>
      {/* Elegant expanding golden glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-yellow-400/60 to-accent/50 rounded-2xl blur-3xl opacity-60 group-hover:opacity-100 group-hover:scale-[5] group-hover:blur-[40px] transition-all duration-700 ease-in-out animate-pulse"></div>
      
      {/* Secondary outer glow ring */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent/40 via-yellow-300/50 to-accent/40 rounded-3xl blur-3xl opacity-0 group-hover:opacity-90 group-hover:scale-[6] transition-all duration-700 ease-in-out"></div>
      
      {/* Tertiary wide glow */}
      <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/30 via-accent/40 to-yellow-400/30 rounded-full blur-[80px] opacity-0 group-hover:opacity-70 group-hover:scale-[7] transition-all duration-700 ease-in-out"></div>
      
      {/* Logo container with elegant 2x expansion */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-3 shadow-2xl border border-accent/30 backdrop-blur-sm scale-100 group-hover:scale-[2] group-hover:shadow-[0_0_100px_rgba(255,215,0,0.8)] transition-all duration-700 ease-in-out transform-gpu">
        {/* Inner golden border that explodes */}
        <div className="absolute inset-2 border-2 border-accent/20 group-hover:border-accent group-hover:border-4 rounded-xl transition-all duration-700 ease-in-out"></div>
        
        {/* Intense inner glow for depth */}
        <div className="absolute inset-1 bg-gradient-radial from-accent/10 via-yellow-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
        
        {/* Logo image with dramatic scaling */}
        <img 
          src={logoImage} 
          alt="Credit Dispute Resolvers - Your Partners in Blacklisting Removals" 
          className="w-full h-full object-contain filter brightness-110 contrast-110 relative z-10 group-hover:brightness-150 group-hover:contrast-150 group-hover:saturate-150 transition-all duration-700 ease-in-out"
        />
        
        {/* Enhanced explosive golden shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-900 ease-in-out rounded-2xl"></div>
        
        {/* Rotating golden ring effect */}
        <div className="absolute -inset-2 border-4 border-transparent bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-700 ease-in-out"></div>
        
        {/* Additional rotating outer ring */}
        <div className="absolute -inset-4 border-2 border-transparent bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0 rounded-3xl opacity-0 group-hover:opacity-80 group-hover:animate-spin-slow transition-opacity duration-700 ease-in-out" style={{animationDirection: 'reverse'}}></div>
      </div>
      
      {/* Elegant particle effects radiating outward */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <div className="absolute top-2 left-2 w-2 h-2 bg-accent rounded-full group-hover:animate-ping group-hover:scale-[4] transition-transform duration-700 ease-in-out"></div>
        <div className="absolute top-4 right-3 w-2 h-2 bg-yellow-400 rounded-full group-hover:animate-ping group-hover:scale-[3] transition-transform duration-700 ease-in-out" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute bottom-3 left-4 w-2 h-2 bg-accent rounded-full group-hover:animate-ping group-hover:scale-[3.5] transition-transform duration-700 ease-in-out" style={{animationDelay: '0.4s'}}></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-yellow-300 rounded-full group-hover:animate-ping group-hover:scale-[4.5] transition-transform duration-700 ease-in-out" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-yellow-500 rounded-full group-hover:animate-ping group-hover:scale-[5] transition-transform duration-700 ease-in-out" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/2 right-0 w-1 h-1 bg-accent rounded-full group-hover:animate-ping group-hover:scale-[4] transition-transform duration-700 ease-in-out" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Expanding backdrop overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none -z-10"></div>
    </div>
  );
}
