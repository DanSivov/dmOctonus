
const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/3a61ad42-9618-452f-8062-137528450438.png')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide leading-tight">
            ENJOY GLOBAL TEAMWORK IN 3D AUGMENTED MICRO-WORLD
          </h1>
          <div className="w-24 h-1 bg-red-500 mb-8"></div>
          <p className="text-xl text-white/90 max-w-2xl">
            Experience cutting-edge digital microscopy technology designed for professional collaboration and precision analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
