import Button  from "../ui/button";
import { Input } from "../ui/input";
import { Twitter, Facebook, Linkedin } from "lucide-react";


const footerLinkPaths: Record<string, string> = {
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
  "Security Tips": "/security-tips",
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
    <div className="bg-nbc-dark-500 border-t-2 border-[#DD0A14] ">
      <div className="container w-full mx-auto py-5">
        <div className="flex justify-between items-center">
          <div className="bg-white rounded-b-[13.58px] rounded-tr-[12.61px] px-2 ">
            <img src="/images/logo.svg" alt="" width={80} />
          </div>
          <div className="flex gap-5 justify-end">
            <Input
              placeholder="Enter your email to subscribe to our newsletter "
              className="!bg-nbc-dark-200 w-100 border-[var(--border-primary)] text-white"
            />
            <div>
              <Button className="bg-white hover:bg-white text-nbc-dark-950 font-[600]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 my-4"></div>
        <div className="flex justify-between">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h5 className="uppercase text-[#81BEDB] font-[700] mb-5">
                {section.title}
              </h5>
              <ul className="text-white space-y-5">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-xs">
                    <a
                      href={footerLinkPaths[item] || "#"}
                      className="hover:underline hover:text-[#81BEDB] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              {section.hasIcon && (
                <div>
                  <h5 className="uppercase text-[#81BEDB] font-[700] mt-5 mb-3">
                    {section.title}
                  </h5>
                  <div className="flex gap-3">
                    <div className="flex items-center bg-black text-white rounded-lg px-4 py-1 gap-4">
                      <div className="">
                        <img
                          src="/images/GooglePlaylogo.svg"
                          alt=""
                          className="w-8"
                        />
                      </div>
                      <div className="">
                        <p className="uppercase text-sm">get it on</p>
                        <p className="capitalize font-[600]">google play</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-black text-white rounded-lg px-4 py-1 gap-4">
                      <div className="uppercase">
                        <img
                          src="/images/Applestore-white.svg"
                          alt=""
                          className="w-8"
                        />
                      </div>
                      <div className="">
                        <p className="font-[500] text-sm">Download on the</p>
                        <p className="capitalize font-[600]">App store</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      
        <div className="border-t-2 border-gray-500 py-5 mt-5 text-gray-200 text-sm">
          <div className="flex justify-between items-center">
            <p>&copy; NBC - {new Date().getFullYear()}</p>
            <p>
              National Bank of Commerce Limited (registerd number 32700) is
              regulated by the Bank of Tanzania
            </p>
            <p>Data Privacy Statement</p>
            <p>Terms & Condition</p>
            <p>Website Terms of use</p>

         
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-white h-6 w-6 hover:text-[#81BEDB]" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-white h-6 w-6 hover:text-[#81BEDB]" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-white h-6 w-6 hover:text-[#81BEDB]" />
          </a>
        



          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;