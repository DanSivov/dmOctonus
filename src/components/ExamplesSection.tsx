
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ExamplesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const examplePages = [
    [
      {
        image: "/uploads/ex1.png",
        title: "PHOTOMETRIC STEREO WITH STITCHING AND STACKING (STEEL PLATE)",
        details: "Details"
      },
      {
        image: "/uploads/ex2.png",
        title: "STAINLESS STEEL CYLINDER",
        details: "Details"
      },
      {
        image: "/uploads/ex3.png",
        title: "HDR VS MULTI-LIGHT",
        details: "Details"
      },
      {
        image: "/uploads/ex4.png",
        title: "COB LED WITH LENS (VIDEO)",
        details: "Details",
      }
    ],
    [
      {
        image: "/uploads/ex5.png",
        title: "HDR EXAMPLE (RUBY)",
        details: "Details"
      },
      {
        image: "/uploads/ex6.png",
        title: "MULTI-LIGHT EXAMPLE (IPHONE XS INTERNAL LENS QC)",
        details: "Details"
      },
      {
        image: "/uploads/ex7.png",
        title: "COB LED WITH LENS",
        details: "Details"
      },
      {
        image: "/uploads/ex8.png",
        title: "MOTORIZED 4-AXIS OBJECT HOLDER DEMO",
        details: "Details"
      }
    ],
    [
      {
        image: "/uploads/ex9.png",
        title: "SHAPE RECONSTRUCTION EXAMPLE (SCREW)",
        details: "Details"
      },
      {
        image: "/uploads/ex10.png",
        title: "SHAPE RECONSTRUCTION EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/uploads/ex11.png",
        title: "3D MEASUREMENTS FOR STONE EDGES LENGTH AND ANGLES",
        details: "Details"
      },
      {
        image: "/uploads/ex12.png",
        title: "HDR EXAMPLE",
        details: "Details"
      }
    ],
    [
      {
        image: "/uploads/ex13.png",
        title: "HDR EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/uploads/ex14.png",
        title: "HIGH DYNAMIC RANGE EXAMPLE (DIAMOND)",
        details: "Details"
      },
      {
        image: "/uploads/ex15.png",
        title: "EDF EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/uploads/ex16.png",
        title: "MULTIFOCUS EXAMPLE (DEFORMING CUTTING)",
        details: "Details"
      }
    ],
    [
      {
        image: "/uploads/ex14.png",
        title: "HIGH DYNAMIC RANGE EXAMPLE (DIAMOND)",
        details: "Details"
      },
      {
        image: "/uploads/ex15.png",
        title: "EDF EXAMPLE (CHIP)",
        details: "Details"
      },
      {
        image: "/uploads/ex16.png",
        title: "MULTIFOCUS EXAMPLE (DEFORMING CUTTING)",
        details: "Details"
      },
      {
        image: "/uploads/ex17.png",
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
