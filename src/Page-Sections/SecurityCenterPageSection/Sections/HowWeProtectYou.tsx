import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Accordion } from "@radix-ui/react-accordion";


function HowWeProtectYou() {
  return (
    <div className="text-gray-500 space-y-7 my-5">
      <Accordion type="multiple" defaultValue={["nbc-security"]} className="w-full">
        
        <AccordionItem value="nbc-security" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            NBC Online Security
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <p>
                The security infrastructure comprises a firewall, intrusion
                detection systems (IDS), virus monitoring tools and many more. The
                security requirements have been implemented and audited by an
                international consulting firm, using internationally accepted
                standards and practices.
              </p>

              <p>
                Online banking uses 128-bit digital certificate from VeriSign for
                encryption of the Secure Sockets Layer (SSL) session. SSL is the
                industry standard for encrypted communication and ensures that
                customers' interaction with the bank over the internet is secure.
                Besides technological solutions, security is also built into the
                login process. Online Banking enforces the use of a minimum
                8-character password including alphanumeric (code inclusively with
                numbers and letters) plus special. We also use secret questions and
                answers to protect your online banking details.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="otp" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            One-Time Passwords (OTP)
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <p>
                When creating a new beneficiary, doing one-time transfers, or other
                sensitive transactions, a special one-time password (OTP), will be
                sent to your mobile phone. You must type this number into the
                indicated field for verification. These codes can only be used once,
                and dramatically decrease the risk of being defrauded.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="timed-logout" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Timed Logout
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <p>
                Online banking logs you out if you are inactive for five minutes.
                This gives you added protection if you forget to log yourself out.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="virtual-keyboard" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Virtual Keyboard
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <p>
                Virtual or dynamic keyboards are designed to reduce the risk of programs that download themselves to your computer and create a keystroke log (access time) that can be used to gain access to your accounts. Virtual keyboards are an important component in securing your online banking experience.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="password-failure" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Three password failure result in account suspension
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <p>
                If the incorrect PIN or password is entered three times consecutively, the online banking service will be temporarily suspended or locked and you will have to visit your preferred branch or call our Contact Centre.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}

export default HowWeProtectYou;