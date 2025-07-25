import { Link } from "react-router-dom";
import Button from "../ui/button";
import { Input } from "../ui/input";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const footerLinkPaths = {
  // Banking Solution
  "Personal Banking": "/personal-banking",
  "Business Banking": "/business-banking",
  "Corporate Banking": "/corporate-banking",
  "LaRiba Banking": "/lariba-banking",
  // Useful Links
  "Ways to bank": "/ways-to-bank",
  "Forms & Tariff Guides": "/forms-tariff-guides",
  "Whistle Blowing": "/whistle-blowing",
  "Fraud Alert": "/fraud-alert",
  
  "Calculators": "/calculators",
  // About US
  "Investor Relation": "/investor-relation",
  "Tender & Procurement": "/tender-procurement",
  "News & Media Centers": "/news-media-centers",
  "Carries & Vacancies": "/carries-vacancies",
  "Citzenship": "/citizenship",
  // Help & Support
  "Contact Us": "/contact-us",
  "Feedback & Complains": "/feedback-complains",
  "ATMs & Branches": "/atms-branches",
  "Security Tips": "/security-center",
  "Cookies": "/cookies",
  // Micro Sites
  "NBC League": "/nbc-league",
  "NBC Marathon": "/nbc-marathon",
};

function Footer() {
  const footerSections = [
    {
      title: "Banking Solution",
      items: [
        "Personal Banking",
        "Business Banking",
        "Corporate Banking",
        "LaRiba Banking",
      ],
      hasIcon: false,
    },
    {
      title: "Useful Links",
      items: [
        "Ways to bank",
        "Forms & Tariff Guides",
        "Whistle Blowing",
        "Fraud Alert",
        "Calculators",
      ],
      hasIcon: false,
    },
    {
      title: "About US",
      items: [
        "Investor Relation",
        "Tender & Procurement",
        "News & Media Centers",
        "Carries & Vacancies",
        "Citzenship",
      ],
      hasIcon: false,
    },
    {
      title: "Help & Support",
      items: [
        "Contact Us",
        "Feedback & Complains",
        "ATMs & Branches",
        "Security Tips",
        "Cookies",
      ],
      hasIcon: false,
    },
    {
      title: "Micro Sites",
      items: ["NBC League", "NBC Marathon"],
      hasIcon: true,
    },
  ];

  return (
    <div className="bg-nbc-dark-500 border-t-[4px] border-[#DD0A14]">
      <div className="container w-full mx-auto px-4 py-5">
        {/* Header Section - Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6 border-b border-gray-500 py-5">
          <div className="bg-white rounded-b-[13.58px] rounded-tr-[12.61px] px-2 w-fit">
            <img src="/images/logo.svg" alt="NBC Logo" width={80} />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end w-full lg:w-auto">
            <Input
              placeholder="Enter your email to subscribe to our newsletter"
              className="!bg-nbc-dark-700 w-full sm:w-80 border border-[#D3D8E7] text-white placeholder:text-[#9CA3AF]"
            />
            <Button >
              Subscribe
            </Button>
          </div>
        </div>

      

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  mb-8 ">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h5 className="uppercase text-[#81BEDB] font-[700] text-sm">
                {section.title}
              </h5>
              <ul className="text-white space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-xs">
                    <Link
                      to={footerLinkPaths[item as keyof typeof footerLinkPaths] || "#"}
                      className="hover:underline hover:text-[#81BEDB] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* App Store Downloads - only for Micro Sites section */}
              {section.hasIcon && (
          <div className="mt-6">
  <h5 className="uppercase text-[#81BEDB] font-[700] text-sm mb-3">
    Download Our App
  </h5>
  <div className="flex flex-col sm:flex-row gap-2">
    <div className="flex items-center bg-black text-white rounded-lg px-3 py-2 gap-3">
      <img
        src="/images/GooglePlaylogo.svg"
        alt="Google Play"
        className="w-6 h-6"
      />
      <div className="flex flex-col whitespace-nowrap">
        <p className="uppercase text-xs pr-1">get it on</p>
  <div>
          <p className="capitalize font-[600] text-sm">google play</p>
  </div>
      </div>
    </div>
    <div className="flex items-center bg-black text-white rounded-lg px-3 py-2 gap-3">
      <img
        src="/images/Applestore-white.svg"
        alt="App Store"
        className="w-6 h-6"
      />
      <div className="flex  whitespace-nowrap flex-col">
        <p className="font-[500] text-xs pr-1">Download on the</p>
        <p className="capitalize font-[600] text-sm">App store</p>
      </div>
    </div>
  </div>
</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-gray-500 pt-5">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-gray-200 text-xs">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 flex-1">
              <p className="whitespace-nowrap">&copy; NBC - {new Date().getFullYear()}</p>
              <p className="text-xs leading-relaxed lg:max-w-md">
                National Bank of Commerce Limited (registerd number 32700) is
                regulated by the Bank of Tanzania
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs">
                <Link to="/data-privacy" className="hover:text-[#81BEDB] transition-colors">
                  Data Privacy Statement
                </Link>
                <Link to="/terms-condition" className="hover:text-[#81BEDB] transition-colors">
                  Terms & Condition
                </Link>
                <Link to="/website-terms" className="hover:text-[#81BEDB] transition-colors">
                  Website Terms of use
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center lg:justify-end">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-white h-5 w-5 hover:text-[#81BEDB] transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-white h-5 w-5 hover:text-[#81BEDB] transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white h-5 w-5 hover:text-[#81BEDB] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;