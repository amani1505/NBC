import Faq from "./CallToActionSections/Faq";
import FeedbackandComplains from "./CallToActionSections/FeedbackandComplains";
import TalktoUs from "./CallToActionSections/TalktoUs";
// import {
//     HelpCircle,
//   MessageCircle,
//   MessageSquare,
// } from "lucide-react";
// import { useState } from "react";
import "./styles/calltoaction.css";

import OfferingSection from "@/components/sections/OfferingSection";

function CallToAction() {
  const contactData = [
    {
      title: "NBC Contact Centre",
      phones: [
        "+255 (0) 768 984 000",
        "+255 (0) 222 193 000",
        "+255 (0) 225 511 000",
        "0800711177 (Free)"
      ],
      address: {
        company: "NBC Ltd. Head Office",
        street: "Sokoine Drive & Azikiwe Street",
        poBox: "P.O. Box 1863, Dar es Salaam,",
        city: "Tanzania"
      },
      email: "contact.centre@nbc.co.tz"
    },
    {
      title: "NBC Contact Centre",
      phones: [
        "+255 (0) 768 984 000",
        "+255 (0) 222 193 000",
        "+255 (0) 225 511 000",
        "0800711177 (Free)"
      ],
      address: {
        company: "NBC Ltd. Head Office",
        street: "Sokoine Drive & Azikiwe Street",
        poBox: "P.O. Box 1863, Dar es Salaam,",
        city: "Tanzania"
      },
      email: "contact.centre@nbc.co.tz"
    },
    {
      title: "NBC Contact Centre",
      phones: [
        "+255 (0) 768 984 000",
        "+255 (0) 222 193 000",
        "+255 (0) 225 511 000",
        "0800711177 (Free)"
      ],
      address: {
        company: "NBC Ltd. Head Office",
        street: "Sokoine Drive & Azikiwe Street",
        poBox: "P.O. Box 1863, Dar es Salaam,",
        city: "Tanzania"
      },
      email: "contact.centre@nbc.co.tz"
    },
    {
      title: "NBC Contact Centre",
      phones: [
        "+255 (0) 768 984 000",
        "+255 (0) 222 193 000",
        "+255 (0) 225 511 000",
        "0800711177 (Free)"
      ],
      address: {
        company: "NBC Ltd. Head Office",
        street: "Sokoine Drive & Azikiwe Street",
        poBox: "P.O. Box 1863, Dar es Salaam,",
        city: "Tanzania"
      },
      email: "contact.centre@nbc.co.tz"
    },
    {
      title: "NBC Contact Centre",
      phones: [
        "+255 (0) 768 984 000",
        "+255 (0) 222 193 000",
        "+255 (0) 225 511 000",
        "0800711177 (Free)"
      ],
      address: {
        company: "NBC Ltd. Head Office",
        street: "Sokoine Drive & Azikiwe Street",
        poBox: "P.O. Box 1863, Dar es Salaam,",
        city: "Tanzania"
      },
      email: "contact.centre@nbc.co.tz"
    },
    {
      title: "NBC Contact Centre",
      phones: [
        "+255 (0) 768 984 000",
        "+255 (0) 222 193 000",
        "+255 (0) 225 511 000",
        "0800711177 (Free)"
      ],
      address: {
        company: "NBC Ltd. Head Office",
        street: "Sokoine Drive & Azikiwe Street",
        poBox: "P.O. Box 1863, Dar es Salaam,",
        city: "Tanzania"
      },
      email: "contact.centre@nbc.co.tz"
    }
  ];

  const tabs = [
    {
      label: "Talk to Us",
      value: "talktous",
      content:<TalktoUs contacts={contactData} />,
      // icon: <MessageCircle className="w-5 h-5" />
    },
    {
      label: "Feedback & Complains",
      value: "feedback",
      content:<FeedbackandComplains />,
      // icon:  <MessageSquare className="w-5 h-5" />
      
    },
    {
      label: "Frquently Asked Question",
      value: "faq",
      content:  <Faq />,
      // icon: <HelpCircle className="w-5 h-5" />
    },
   
  ];







  return (
    <>
       <OfferingSection
        title="Have A Problem? Don't Worry"
        description="Let us know how we can help you today!"
        tabs={tabs}
        defaultTab="talktous"
        maxWidth="max-w-4xl"
       
      />
     
    </>
  );
}

export default CallToAction;
