import HeroSection from "@/components/reusable/HeroSection";
import FraudProtectionAccordion from "./Parts/FraudProtectionAccordion";

// Interface for table headers
interface Header {
  key: string;
  label: string;
}

// Interface for cheque security data
interface ChequeSecurityItem {
  whatToDo: string;
  whatNotToDo: string;
}

function FraudAlertPageSection() {
  const slides = [
    {
      title: `Fraudulent Alert`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/fraud-hero.png",
    },
  ];

  // Dynamic table data with explicit typing
  const chequeSecurityData: ChequeSecurityItem[] = [
    {
      whatToDo: "Complete the beneficiary/payee details in full",
      whatNotToDo:
        "DO NOT use abbreviations or acronyms as beneficiary details, e.g. BTC",
    },
    {
      whatToDo: "Provide your account number when making deposits",
      whatNotToDo: "DO NOT print cheque with pale toner/ribbon/ink",
    },
    {
      whatToDo:
        "Use the appropriate crossings i.e. 'Payee Account Only' or 'Non-Negotiable'",
      whatNotToDo: "DO NOT leave gaps before words and figures",
    },
    {
      whatToDo:
        "Familiarize yourself with the layout of the cheques issued by different banks, especially in business environment",
      whatNotToDo: "DO NOT issue 'cash' cheques",
    },
    {
      whatToDo:
        "Use alternative methods of payment such as electronic payments",
      whatNotToDo: "DO NOT mail cheques",
    },
    {
      whatToDo:
        "Bank statements and chequebooks are required to be locked away at all times",
      whatNotToDo:
        "DO NOT advertise your banking details or provide them to unknown individuals",
    },
    {
      whatToDo:
        "Reconcile your paid cheques to your bank statement as soon as possible",
      whatNotToDo: "",
    },
    {
      whatToDo: "Check daily that there are no missing cheques",
      whatNotToDo: "",
    },
    {
      whatToDo: "Shred any cancelled cheques and make a note of them",
      whatNotToDo: "",
    },
  ];

  const debitCardData: ChequeSecurityItem[] = [
    {
      whatToDo: "Keep your card in a secure place",
      whatNotToDo: "DO NOT share your PIN",
    },
    {
      whatToDo: "Memorise your PIN",
      whatNotToDo:
        "DO NOT keep your PIN in your wallet, mobile phone or any place that another person can access",
    },
    {
      whatToDo: "Shield your PIN from others when entering it'",
      whatNotToDo: "DO NOT let others see your PIN",
    },
    {
      whatToDo: "Sign card on the signature panel",
      whatNotToDo:
        "DO NOT send your card details to strangers, i.e. over the internet",
    },
    {
      whatToDo: "Treat your card as cash",
      whatNotToDo:
        "DO NOT send e-mails that quote your account number and expiry date",
    },
    {
      whatToDo: "Ensure that you get your own card back after every purchase",
      whatNotToDo: "DO NOT lose sight of your card at any time",
    },
  ];

  const atmSecurityData: ChequeSecurityItem[] = [
    {
      whatToDo:
        "At night, use an ATM that is well-lit and where you have a good view of your surroundings",
      whatNotToDo:
        "DO NOT use the ATM if there are any suspicious looking individuals around or if you think it's been tampered with",
    },
    {
      whatToDo: "Use an ATM that is monitored by a security officer",
      whatNotToDo:
        "NEVER accept ATM help from strangers, including security guards,even if you're having trouble with the transaction.",
    },
    {
      whatToDo: "Shield the ATM keypad so that people can't see your PIN",
      whatNotToDo: "DO NOT let anyone see your enter you PIN",
    },
    {
      whatToDo:
        "Carefully secure your card and cash in your wallet, handbag or pocket before leaving the ATM machine",
      whatNotToDo: "DO NOT be in a hurry during the transaction",
    },
    {
      whatToDo: "Destroy your debit card receipts before discarding them",
      whatNotToDo: "DO NOT throw them in a public waste bin",
    },
    {
      whatToDo: "Tell the bank if your card is jammed, retained or lost",
      whatNotToDo:
        "DO NOT advertise your banking details or provide them to unknown individuals",
    },
    {
      whatToDo:
        "Tell the bank and the police if you are interfered with at an ATM",
      whatNotToDo: "",
    },
  ];

  const tableHeaders: Header[] = [
    { key: "whatToDo", label: "What To Do" },
    { key: "whatNotToDo", label: "What Not To Do" },
  ];

  return (
    <>
      <HeroSection slides={slides} hasForex={false} height="60vh" />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="py-10">
          <h1 className="section-title">How to keep yourself safe & secure</h1>
          <p className="section-subtitle">
            Don't tolerate unethical behavior – blow the whistle.
          </p>
        </div>
        <div className="space-y-6 mb-4">
          <FraudProtectionAccordion />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-nbc-dark-950 font-[700] text-[18px]">
              Cheque security
            </h1>
            <p>
              Details on what to do and what not to do with your cheques to
              avoid being a victim of fraud:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0 border border-gray-300 rounded-lg">
              <thead>
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th
                      key={header.key}
                      className={`text-nbc-dark-950 font-[600] border-r border-b border-gray-300 p-3 bg-gray-50 ${
                        index === 0 ? 'rounded-tl-lg border-l-0' : ''
                      } ${index === tableHeaders.length - 1 ? 'rounded-tr-lg border-r-0' : ''}`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chequeSecurityData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {tableHeaders.map((header, colIndex) => (
                      <td
                        key={header.key}
                        className={`border-r border-b border-gray-300 p-3 align-top ${
                          colIndex === 0 ? 'border-l-0' : ''
                        } ${colIndex === tableHeaders.length - 1 ? 'border-r-0' : ''} ${
                          rowIndex === chequeSecurityData.length - 1 && colIndex === 0 ? 'rounded-bl-lg' : ''
                        } ${
                          rowIndex === chequeSecurityData.length - 1 && colIndex === tableHeaders.length - 1 ? 'rounded-br-lg' : ''
                        } ${rowIndex === chequeSecurityData.length - 1 ? 'border-b-0' : ''}`}
                      >
                        {row[header.key as keyof ChequeSecurityItem] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-nbc-dark-950 font-[700] text-[18px]  mt-10">
              Cheque You Receive:
            </h1>
            <p>
              Protect yourself against attempts to defraud you or your business:
            </p>
          </div>

          <div>
            <ul className="space-y-2 list-disc">
              <li className="">
                Do not release goods without checking with your bank, even if a
                bank cheque is presented
              </li>
              <li className="">
                Check the payee details, the amount in words and figures and the
                date carefully for alterations
              </li>
              <li className="">
                Be on the look out for stamps that are placed over areas that
                could conceal alterations
              </li>
              <li className="">
                Be suspicious of cheques written with a black koki pen
              </li>
              <li className="">
                Watch out for errors on the printed areas of the cheques such as
                the name and account number, details of the client, the bank
                branch name, and the MICR code
              </li>
              <li className="">
                Black shaded areas may be an indication that the original
                details were obliterated and replaced
              </li>
              <li>
                Be suspicious if the cheque appears faded, as chemicals could
                have been used to remove information
              </li>
              <li>
                Watch out for shaky signatures – they could indicate that the
                signature was traced
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 mt-10">
          <div>
            <h1 className="text-nbc-dark-950 font-[700] text-[18px] ">
              Debit Cards
            </h1>
            <p>
              Details on what to do and what not to do with your debit card to
              avoid being a victim of fraud.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0 border border-gray-300 rounded-lg">
              <thead>
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th
                      key={header.key}
                      className={`text-nbc-dark-950 font-[600] border-r border-b border-gray-300 p-3 bg-gray-50 ${
                        index === 0 ? 'rounded-tl-lg border-l-0' : ''
                      } ${index === tableHeaders.length - 1 ? 'rounded-tr-lg border-r-0' : ''}`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {debitCardData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {tableHeaders.map((header, colIndex) => (
                      <td
                        key={header.key}
                        className={`border-r border-b border-gray-300 p-3 align-top ${
                          colIndex === 0 ? 'border-l-0' : ''
                        } ${colIndex === tableHeaders.length - 1 ? 'border-r-0' : ''} ${
                          rowIndex === debitCardData.length - 1 && colIndex === 0 ? 'rounded-bl-lg' : ''
                        } ${
                          rowIndex === debitCardData.length - 1 && colIndex === tableHeaders.length - 1 ? 'rounded-br-lg' : ''
                        } ${rowIndex === debitCardData.length - 1 ? 'border-b-0' : ''}`}
                      >
                        {row[header.key as keyof ChequeSecurityItem] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 mt-10">
          <div>
            <h1 className="text-nbc-dark-950 font-[700] text-[18px] ">
              ATM security
            </h1>
            <p>
              Details on how to make your ATM banking experience more secure.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0 border border-gray-300 rounded-lg">
              <thead>
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th
                      key={header.key}
                      className={`text-nbc-dark-950 font-[600] border-r border-b border-gray-300 p-3 bg-gray-50 ${
                        index === 0 ? 'rounded-tl-lg border-l-0' : ''
                      } ${index === tableHeaders.length - 1 ? 'rounded-tr-lg border-r-0' : ''}`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {atmSecurityData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {tableHeaders.map((header, colIndex) => (
                      <td
                        key={header.key}
                        className={`border-r border-b border-gray-300 p-3 align-top ${
                          colIndex === 0 ? 'border-l-0' : ''
                        } ${colIndex === tableHeaders.length - 1 ? 'border-r-0' : ''} ${
                          rowIndex === atmSecurityData.length - 1 && colIndex === 0 ? 'rounded-bl-lg' : ''
                        } ${
                          rowIndex === atmSecurityData.length - 1 && colIndex === tableHeaders.length - 1 ? 'rounded-br-lg' : ''
                        } ${rowIndex === atmSecurityData.length - 1 ? 'border-b-0' : ''}`}
                      >
                        {row[header.key as keyof ChequeSecurityItem] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="py-10">
            <h1 className="section-title">Need More Assistance? Don't Worry</h1>
            <p className="section-subtitle">
              Let us know how we can help you today!
            </p>
          </div>
          <div>
            <div className="px-5">
              <div className="border border-gray-300 rounded-lg p-6 max-w-3xl mx-auto mb-10">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal text-nbc-dark-950 text-center">
                  Fraud Prevention
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                  <div>
                    <h1 className="font-[600] text-[#3B5266]">
                      LOCAL TELEPHONE:
                    </h1>
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
                    <h1 className="font-[600] text-[#3B5266]">
                      EMAIL ADDRESS:
                    </h1>
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
        </div>
      </div>
    </>
  );
}

export default FraudAlertPageSection;