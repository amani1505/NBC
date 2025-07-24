import HeroSection from "@/components/reusable/HeroSection";

function WhistleBlowingPageSection() {
  const slides = [
    {
      title: `Whistle Blowing`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/whistle-blowing.png",
    },
  ];

  return (
    <div>
      <HeroSection slides={slides} hasForex={false} height="60vh" />
      <div className="py-10">
        <h1 className="section-title">Whistle Blowing</h1>
        <p className="section-subtitle">
          Don’t tolerate unethical behavior – blow the whistle.
        </p>
        <p className="text-sm sm:text-base lg:text-md text-center  mx-auto  leading-relaxed sm:leading-relaxed lg:leading-loose text-[#4B5563]  mb-5 md:w-1/2 px-5">
          NBC Bank is dedicated to the highest standards of integrity,
          transparency, and accountability. If you become aware of any
          misconduct fraud, corruption, theft, harassment, misuse of assets,
          regulatory breaches, or unethical behavior by any NBC employee,
          contractor, vendor, or anyone connected to NBC or its subsidiaries,
          you're encouraged to report it. Your report helps us act swiftly and
          responsibly.
        </p>
      </div>

      <div className="px-5">
        <div className="border border-gray-300 rounded-lg p-6 max-w-3xl mx-auto mb-10">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal text-[#304659]">
            Whistle Blowing Contacts
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div>
              <h1 className="font-[600] text-[#3B5266]">LOCAL TELEPHONE:</h1>
              <ul>
                <li>+255 752 043 729</li>
                <li>0800 711 177 (Toll Free)</li>
              </ul>
            </div>
            <div>
              <h1 className="font-[600] text-[#3B5266]">
                INTERNATIONAL TELEPHONE:
              </h1>
              <ul>
                <li>+27 315 715 717</li>
                <li>+27 31 607 7395 (fax option)</li>
              </ul>
            </div>

            <div>
              <h1 className="font-[600] text-[#3B5266]">EMAIL ADDRESS:</h1>
              <ul>
                <li>protect@tip-offs.com</li>
              </ul>
            </div>

            <div>
              <h1 className="font-[600] text-[#3B5266]">WEBSITE:</h1>
              <ul>
                <li>tip-offs.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhistleBlowingPageSection;
