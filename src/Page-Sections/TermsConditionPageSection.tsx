import HeroSection from "@/components/reusable/HeroSection";

function TermsConditionPageSection() {
  const slides = [
    {
      title: `Terms and Conditions`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/individual-hero.jpg",
    },
  ];
  return (
    <>
      <HeroSection slides={slides} hasForex={false} height="60vh" />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-5">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-nbc-dark-950">
            Introduction
          </h1>
          <p className="text-gray-700">
            Welcome to [Your Company Name] ("us," "we," or "our"). At [Your
            Company Name], we are committed to protecting your privacy and
            providing a secure and enjoyable online experience. This Privacy
            Policy governs the manner in which we collect, use, maintain, and
            disclose information collected from users (each, a "User") of the
            [Your Website] product website ("Site").
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">
            Personal identification information
          </h1>
          <p className="text-gray-700">
            We may collect personal identification information from Users in
            various ways, including but not limited to when Users visit our
            site, register on the site, place an order, subscribe to the
            newsletter, respond to a survey, fill out a form, and in connection
            with other activities, services, features, or resources we make
            available on our Site.
          </p>
          <p className="mt-4 text-gray-700">
            Users may be asked for, as appropriate, name, email address, mailing
            address, phone number, and payment information. Users may, however,
            visit our Site anonymously. We will collect personal identification
            information from Users only if they voluntarily submit such
            information to us.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">
            Non-personal identification information
          </h1>
          <p className="text-gray-700">
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer, and
            technical information about Users' means of connection to our Site,
            such as the operating system and the Internet service providers
            utilized.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">
            Payment information
          </h1>
          <p className="text-gray-700">
            We may collect payment information when Users make a purchase on our
            Site. This information is used solely for the purpose of processing
            payments and is securely handled by our payment processing partners.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">
            How we use collected information
          </h1>
          <p className="text-gray-700">
            [Your Company Name] may collect and use Users' personal information
            for the following purposes:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 ">
            <li>
              To process transactions: We may use the information Users provide
              when placing an order only to provide service to that order. We do
              not share this information with outside parties except to the
              extent necessary to provide the service.
            </li>
            <li>
              To send periodic emails: The email address provided for order
              processing may be used to send information and updates pertaining
              to their order. It may also be used to respond to their inquiries,
              questions, and/or other requests.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">
            How we protect your information
          </h1>
          <p className="text-gray-700">
            We adopt appropriate data collection, storage, and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure, or destruction of your personal
            information, username, password, transaction information, and data
            stored on our Site.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">
            Sharing your personal information
          </h1>
          <p className="text-gray-700">
            We do not sell, trade, or rent Users' personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates, and advertisers for the purposes outlined above.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">Cookies</h1>
          <p className="text-gray-700">
            Our Site may use "cookies" to enhance User experience. Users' web
            browsers place cookies on their hard drive for record-keeping
            purposes and sometimes to track information about them. Users may
            choose to set their web browser to refuse cookies or to alert you
            when cookies are being sent. If they do so, note that some parts of
            the Site may not function properly.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4 text-nbc-dark-950">
            Changes to this privacy policy
          </h1>
          <p className="text-gray-700">
            Our Site may use "cookies" to enhance User experience. Users' web
            browsers place cookies on their hard drive for record-keeping
            purposes and sometimes to track information about[Your Company Name]
            has the discretion to update this privacy policy at any time. When
            we do, we will revise the updated date at the bottom of this page.
            We encourage Users to frequently check this page for any changes to
            stay informed about how we are helping to protect the personal
            information we collect. You acknowledge and agree that it is your
            responsibility to review this privacy policy periodically and become
            aware of modifications.them. Users may choose to set their web
            browser to refuse cookies or to alert you when cookies are being
            sent. If they do so, note that some parts of the Site may not
            function properly.
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsConditionPageSection;
