const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center relative bg-base-200 overflow-hidden p-16 rounded-xl shadow-2xl backdrop-blur-md">
      
      {/* Soft grid background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff0a_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10 z-0" />

      {/* Blurred glowing rings */}
      <div className="absolute -top-24 -left-20 w-[400px] h-[400px] rounded-full bg-primary/30 blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute -bottom-24 -right-20 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[100px] opacity-60 animate-ping" />
      
      {/* Animated ring border glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-80 h-80 rounded-full border-2 border-secondary/20 animate-spin-slow blur-[2px] opacity-10" />
      </div>

      {/* Glass card */}
      <div className="relative z-10 max-w-md w-full backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10 shadow-2xl text-center space-y-5">
        <h2 className="text-3xl font-extrabold text-base-content tracking-tight">
          {title}
        </h2>
        <p className="text-base text-base-content/70 leading-relaxed">
          {subtitle}
        </p>

        {/* Elegant underline glow */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default AuthImagePattern;
