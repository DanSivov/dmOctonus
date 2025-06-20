
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "FEATURES", hasDropdown: true },
    { name: "PRODUCTS", hasDropdown: false },
    { name: "MODELS", hasDropdown: false },
    { name: "GALLERY", hasDropdown: false },
    { name: "SOFTWARE", hasDropdown: false },
    { name: "ABOUT US", hasDropdown: false },
    { name: "SUPPORT", hasDropdown: false }
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e9bd000b-e6d2-48fe-af4f-079c4783264c.png"
            alt="Digital Microscope by Octonus" 
            className="h-12"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium tracking-wide">
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
