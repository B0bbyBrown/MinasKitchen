import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Utensils, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenDonationModal?: () => void;
}

export default function Header({ onOpenDonationModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDonateClick = () => {
    window.open(
      "https://www.backabuddy.co.za/campaign/help-feed-500-kids-with-minas-kitchen",
      "_blank"
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/Mina's Kitchen Logo.jpg"
                alt="Mina's Kitchen Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-neutral">
                Mina's Kitchen
              </h1>
              {/* <p className="text-sm text-gray-600 font-">
                Believe to receive, live to give
              </p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-neutral hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="text-neutral hover:text-primary transition-colors"
            >
              How to Help
            </button>
            <Button onClick={handleDonateClick} className="btn-primary">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-neutral hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block w-full text-left text-neutral hover:text-primary transition-colors py-2"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="block w-full text-left text-neutral hover:text-primary transition-colors py-2"
            >
              How to Help
            </button>
            <Button onClick={handleDonateClick} className="btn-primary w-full">
              Donate Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
