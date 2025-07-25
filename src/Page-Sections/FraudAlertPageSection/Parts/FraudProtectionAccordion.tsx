import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Accordion } from "@radix-ui/react-accordion";

function FraudProtectionAccordion() {
  return (
    <div className="text-gray-500 space-y-7 my-5">
      <Accordion type="single" collapsible  defaultValue="beware-fraudsters" className="w-full">
        
        <AccordionItem value="beware-fraudsters" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Beware of fraudsters
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  National Bank of Commerce Limited will never call to request for
                  your Personal Identification Number (PIN) or your online banking
                  password. National Bank of Commerce Limited will never ask you to
                  check if the number on your phone display matches its registered
                  number. Be cautious, fraudsters might alter the number shown on the
                  phone
                </li>
                <li>
                  National Bank of Commerce Limited will never tell you to transfer
                  money to another account
                </li>
                <li>
                  Never disclose your passwords and PINs to anybody
                </li>
                <li>
                  Keep your computer's anti-virus software up to date
                </li>
                <li>
                  Do not assume a caller is genuine because he/she knows your banking
                  details. Fraudsters could have basic information about you, such as
                  your address, bank account number and details of recent transactions
                </li>
              </ul>
              <p>
                Fraudsters are luring people for their bank details. These details are
                the keys to your account security – do not let them in
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="identity-theft" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Identify Theft and Identify Fraud
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <div className="text-gray-700 text-[16px] mb-4 font-[600]">
                Identity theft and identity fraud are crimes in which someone wrongfully
                obtains and uses another person's personal data for financial gain.
              </div>
              <div className="text-gray-700 text-[16px] mb-4">
                Here's how you can protect yourself:
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Make sure that no-one is looking over your shoulder at an ATM or a
                  point of sale
                </li>
                <li>Always shield your PIN when entering it</li>
                <li>Keep information secure</li>
                <li>
                  Shred paper based information when you don't need it any more
                </li>
                <li>
                  Never use a public computer (e.g. internet café) to carry out
                  internet banking
                </li>
                <li>Don't disclose your banking details in an email or the post</li>
                <li>
                  Always keep information about you secure! Fraudsters can obtain and
                  use your personal data unlawfully
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="money-safety" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Keeping you and your money safe
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Remember 'SCAM'...</li>
                <li>
                  S – Shield your personal information, whether it is printed
                  information or entering your PIN
                </li>
                <li>
                  C – Check your financial information regularly and report anything
                  suspicious to us as soon as you can
                </li>
                <li>
                  A – Ask periodically for a copy of your credit report
                </li>
                <li>
                  M – Maintain careful records of your banking and financial accounts
                  and reconcile them frequently
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skimming-protection" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Watch out for skimming
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <div className="space-y-4 mb-3">
                <p>
                  <span className="text-nbc-dark-950 font-[600]">'Skimming'</span>{" "}
                  <span className="text-gray-700">
                    is where criminals use devices to collect and store information from
                    a debit card in the course of the transaction. They later use the
                    details fraudulently.
                  </span>
                </p>

                <p className="text-gray-700">
                  Skimming can happen anywhere you use your debit card. Fraudsters
                  collect and store information during a transaction.
                </p>
                <p className="text-gray-700">
                  Skimming can also happen at pay-at-the-pump locations and in
                  restaurants where portable units are used to skim your debit card
                  information when you pay.
                </p>
              </div>
              
              <div>
                <p className="text-gray-700 font-semibold mb-2">What to do</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Check for any unusual objects not normally found on ATM, e.g. check
                    the card slot of the ATM to ensure that there are no unusual objects
                    covering it
                  </li>
                  <li>
                    Check that the ATM keypad is smooth and numbers are not unusually
                    raised up or tampered with
                  </li>
                  <li>
                    If there are any cameras around the lighting area of the ATM mainly
                    facing the keypad must be treated as suspicious
                  </li>
                  <li>
                    At shops and other pay points: NEVER LOSE SIGHT OF YOUR CARD
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}

export default FraudProtectionAccordion;