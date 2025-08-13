import { Utensils } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-textPrimary text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Section - spans 2 columns */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/Mina's Kitchen Logo.jpg"
                  alt="Mina's Kitchen Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Mina's Kitchen</h3>
              </div>
            </div>
            <p className="text-black mb-4 max-w-md">
              Nourishing Smutsville's future, one meal at a time. Join us in
              feeding 500 children every Saturday and building a stronger South
              Africa.
            </p>
          </div>
          {/* Quick Links Section - 1 column */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4 text-black">
              Quick Links
            </h4>
            <ul className="space-y-2 text-black">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-black transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="hover:text-black transition-colors"
                >
                  Impact
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("challenge")}
                  className="hover:text-black transition-colors"
                >
                  150K Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("donate")}
                  className="hover:text-black transition-colors"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>
          {/* Contact Section - 1 column */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4 text-black">Contact</h4>
            <ul className="space-y-1 text-black text-sm">
              <li>Smutsville, Sedgefield</li>
              <li>Western Cape, South Africa</li>
              <li>admin@minaskitchen.co.za</li>
            </ul>
          </div>

          {/* Follow Us Section - 1 column */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4 text-black">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@minaskitchensa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-black hover:text-primary text-2xl transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M29.656 10.531c-2.094 0-4.031-0.719-5.594-1.938v11.469c0 5.031-4.094 9.125-9.125 9.125s-9.125-4.094-9.125-9.125c0-5.031 4.094-9.125 9.125-9.125 0.25 0 0.5 0.031 0.75 0.031v4.031c-0.25-0.031-0.5-0.062-0.75-0.062-2.812 0-5.094 2.281-5.094 5.094s2.281 5.094 5.094 5.094c2.812 0 5.094-2.281 5.094-5.094v-20.031h4.031c0 3.469 2.812 6.281 6.281 6.281v4.031z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-black text-sm">
          <p>
            &copy; 2025 Mina's Kitchen. All rights reserved. • Founded April
            2024
          </p>
        </div>
      </div>
    </footer>
  );
}
