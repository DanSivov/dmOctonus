
const FeaturesSection = () => {
  const features = [
    {
      image: "/lovable-uploads/c9ae52dc-0780-4fc1-adf0-722e3961c00d.png",
      title: "DM GOLD: NEW DIGITAL MICROSCOPE",
      description: "OctoNus has released a new product: DM Gold microscope with a fixed magnification with stitching in multilight, coaxial and photometric stereo.",
      link: "Read more"
    },
    {
      image: "/lovable-uploads/3ed42625-24f8-4b91-ba2f-b228263e896e.png",
      title: "MULTI-LIGHT TECHNOLOGY",
      description: "OctoNus 3DDM offers a multilight illumination technology for eliminating overexposed areas and revealing details in image.",
      link: "Read more"
    },
    {
      image: "/lovable-uploads/13a5670b-c5b6-4ef2-af32-c9d7030341d0.png",
      title: "PHOTOMETRIC STEREO TECHNOLOGY",
      description: "Photometric stereo technology reconstructs object's normal map in real-time for analysing microstructure defects, engraving, embossing, etc.",
      link: "Read more"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-48 h-48 object-cover mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 px-4">
                {feature.description}
              </p>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors">
                {feature.link} →
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            CLICK HERE FOR ALL DM FEATURES —
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
