
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ExamplesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const examplePages = [
    [
      {
        image: "/lovable-uploads/404fe428-c4b6-400e-ab70-745c3ec637c6.png",
        title: "PHOTOMETRIC STEREO WITH STITCHING AND STACKING (STEEL PLATE)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/683f0e1a-d992-4a3f-8dd2-54db6e918dd6.png",
        title: "STAINLESS STEEL CYLINDER",
        details: "Details"
      },
      {
        image: "/lovable-uploads/9c2ce4c4-4a33-42f3-a97b-be30908184fe.png",
        title: "HDR VS MULTI-LIGHT",
        details: "Details"
      },
      {
        image: null,
        title: "COB LED WITH LENS (VIDEO)",
        details: "Details",
        emoji: "🔬"
      }
    ],
    [
      {
        image: "/lovable-uploads/8496fd7b-0d8a-409e-ad44-44ddc4d1c3e4.png",
        title: "HDR EXAMPLE (RUBY)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/112e0769-b14c-4841-a02b-94d9d071d36f.png",
        title: "MULTI-LIGHT EXAMPLE (IPHONE XS INTERNAL LENS QC)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/5ff51199-0d7b-460e-9af2-f96c816e3f31.png",
        title: "COB LED WITH LENS",
        details: "Details"
      },
      {
        image: "/lovable-uploads/da447af6-3307-4a8d-aca5-adf0c97546e6.png",
        title: "MOTORIZED 4-AXIS OBJECT HOLDER DEMO",
        details: "Details"
      }
    ],
    [
      {
        image: "/lovable-uploads/772087ed-8233-430c-9599-c8fd1d5e0e4b.png",
        title: "SHAPE RECONSTRUCTION EXAMPLE (SCREW)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/8496fd7b-0d8a-409e-ad44-44ddc4d1c3e4.png",
        title: "SHAPE RECONSTRUCTION EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/112e0769-b14c-4841-a02b-94d9d071d36f.png",
        title: "3D MEASUREMENTS FOR STONE EDGES LENGTH AND ANGLES",
        details: "Details"
      },
      {
        image: "/lovable-uploads/5ff51199-0d7b-460e-9af2-f96c816e3f31.png",
        title: "HDR EXAMPLE",
        details: "Details"
      }
    ],
    [
      {
        image: "/lovable-uploads/da447af6-3307-4a8d-aca5-adf0c97546e6.png",
        title: "HDR EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/772087ed-8233-430c-9599-c8fd1d5e0e4b.png",
        title: "HIGH DYNAMIC RANGE EXAMPLE (DIAMOND)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/8496fd7b-0d8a-409e-ad44-44ddc4d1c3e4.png",
        title: "EDF EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/112e0769-b14c-4841-a02b-94d9d071d36f.png",
        title: "MULTIFOCUS EXAMPLE (DEFORMING CUTTING)",
        details: "Details"
      }
    ],
    [
      {
        image: "/lovable-uploads/5ff51199-0d7b-460e-9af2-f96c816e3f31.png",
        title: "HIGH DYNAMIC RANGE EXAMPLE (DIAMOND)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/da447af6-3307-4a8d-aca5-adf0c97546e6.png",
        title: "EDF EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/772087ed-8233-430c-9599-c8fd1d5e0e4b.png",
        title: "MULTIFOCUS EXAMPLE (DEFORMING CUTTING)",
        details: "Details"
      },
      {
        image: "/lovable-uploads/8496fd7b-0d8a-409e-ad44-44ddc4d1c3e4.png",
        title: "MULTIFOCUS EXAMPLE",
        details: "Details"
      }
    ]
  ];

  const totalPages = examplePages.length;

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 tracking-wide">
            EXAMPLES
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="grid md:grid-cols-4 gap-6 px-12">
            {examplePages[currentPage].map((example, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square">
                  {example.image ? (
                    <img 
                      src={example.image} 
                      alt={example.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-yellow-100 flex items-center justify-center">
                      <span className="text-4xl">{example.emoji}</span>
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-medium text-gray-800 text-sm mb-2 tracking-wide">
                    {example.title}
                  </h4>
                  <button className="text-red-500 text-sm hover:text-red-600 transition-colors">
                    → {example.details}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage ? 'bg-red-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
