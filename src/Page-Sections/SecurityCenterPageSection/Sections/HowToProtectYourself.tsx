import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function HowToProtectYourself() {
  return (
    <div className="text-gray-500 space-y-7 my-5">
      <Accordion
        type="single"
        collapsible
        defaultValue="keep-safe"
        className="w-full"
      >
        <AccordionItem value="keep-safe" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Basic Tips To Keep Safe
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <ul className="space-y-4 list-disc pl-5">
              <li>
                Avoid using shared computers when accessing NBC online banking
              </li>

              <li>
                Don’t log in to NBC Online Banking or use critical passwords at
                internet cafes, libraries, and other public sites to avoid the
                risk of information being copied and re-entered after you leave
              </li>
              <li>Change your passwords regularly</li>
              <li>
                Phone NBC Contact Centre on +255 (0) 768 984 000, +255 (0) 222
                193 000 or +255 (0) 225 511 000 immediately if you suspect your
                online banking password has been compromised
              </li>
              <li>
                Use a password on your computer to prevent unauthorized
                individuals from accessing your information
              </li>
              <li>Disable the 'Auto Complete' function of your browser</li>
              <li>
                Always remember to log off from online banking and close your
                browser when you have finished banking
              </li>

              <li>
                Before you bank online, ensure that you are actually on the
                secure internet banking website. Once you visit www.nbctz.com
                and click on the Internet Banking link, you will be redirected
                to an available banking server. Once there, check the browser
                address. It should begin with ‘https://’ (not ‘http://’). Also
                check the browser for a closed lock and/or key icon – which
                should either be at the top or the bottom of the screen
              </li>
              <li>
                Install good quality security software and ensure that you have
                upgraded to the latest version of your browser. Most of the
                newer browsers have the inherent ability of detecting fraudulent
                websites
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="phishing-scams" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            Phishing Scams
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <ul className="space-y-4 list-disc pl-5">
              <li>
                Some criminals will go to amazing lengths to steal your money –
                but the more aware you are, the less likely it will be that you
                will fall prey to internet or email phishing scams (break-in)
              </li>
              <li>
                Fraudsters often send out emails claiming to be from NBC (or
                other reputable organizations) – commonly known as ‘phishing’ -
                many of these mails look very authentic as they make use of the
                NBC logo and corporate colors to convince you that the email is
                legitimate
              </li>
              <li>
                Often, the content of the email makes reference to your account
                being suspended, and the only ways you can stop this suspension
                is to click on the link supplied and update your personal
                details. Although this link does not link to the real NBC
                website, these websites are usually designed to look exactly
                like our site, and it becomes difficult to differentiate between
                this site and the real site. You should therefore identify that
                the site you are logged onto is the genuine NBC website
              </li>
            </ul>
            <div className="mt-4 space-y-5">
              <h1 className="font-bold">
                Below is an example of a phishing email:
              </h1>
              <p>
                Dear ABC Bank Member,, <br />
                This email was sent by the ABC Bank server to verify your e-mail
                address. You must complete this process by clicking on the link
                below and entering in the small window your ABC Bank User ID and
                Password.
              </p>
              <p>
                This is done for your protection - because some of our members
                no longer have access to their email addresses and we must
                verify it. To verify your e-mail address and access your bank
                account, click on the link below:
              </p>

              <p>
                <a
                  href="http://www.abc.co.tz/wjwwU3gcnUhkTrqcR9AmuEvaPKkmvqsegOptMRPAqYof9UecGDV0xoNa3f0s3cz0a2"
                  className="text-nbc-dark-950 hover:underline"
                >
                  http://www.abc.co.tz/wjwwU3gcnUhkTrqcR9AmuEvaPKkmvqsegOptMRPAqYof9UecGDV0xoNa3f0s3cz0a2
                </a>
              </p>

              <p>
                It will then link to a fraudulent verification page like the one
                below:
              </p>
              <div>
                <img src="/images/security-form.png" alt="Security Form" />
              </div>

              <div>
                <h1 className="font-bold">Delayed phishing attacks:</h1>
                <div className=" space-y-5">
                  <p>
                    In some cases, fraudsters may obtain your access credentials
                    long before any attempt is made to defraud your account. It
                    is very important to change your banking logon information
                    such as your PIN and password regularly to prevent delayed
                    phishing attacks.
                  </p>
                  <p>
                    Steps to avoid being a victim of phishing attacks:
                    <p>
                      Although we have a number of security measures in place to
                      protect you, your awareness is the key to avoid being a
                      victim of phishing attacks; so bear the following in mind
                      when you receive an email claiming to be from NBC:
                    </p>
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Never reply to these emails, and don’t click on any links
                    </li>
                    <li>
                      Never provide your personal details such as your PIN or
                      account details via email or on any links within these
                      emails. We already have details like your ID number, cell
                      number and email address and will never ask for those via
                      email
                    </li>
                    <li>
                      Never navigate to our site using a link from an email –
                      always type in the address (www.nbctz.com)
                    </li>
                    <li>
                      Delete spam emails immediately. Even a request to remove
                      your email address from the mailing list will confirm to
                      the fraudsters that your email account is active, and
                      could open you up to more attacks
                    </li>
                    <li>
                      Never open an email attachment unless you know who sent
                      the message
                    </li>
                    <li>
                      Use the latest browsers which come with filters that alert
                      you when you visit a website that contains potentially
                      unsafe website
                    </li>
                    <li>
                      NBC will never send you a letter or email requesting you
                      to complete your personal details by clicking on a link in
                      an email
                    </li>
                    <li>
                      Be aware that phishing scams have also been received
                      through instant messaging systems such as Google Talk or
                      Skype; as well as through social networking websites such
                      as Facebook. When in doubt of the authenticity of a link
                      or a claim, simply don’t click on it
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sim-swap" className="border-gray-300">
          <AccordionTrigger
            className="font-bold text-[18px] hover:text-finance-blue-light text-nbc-dark-950"
            iconType="plus-minus"
          >
            SIM Swap
          </AccordionTrigger>
          <AccordionContent className="text-[#4B5563]">
            <div className="space-y-4">
              <p>
                A fraudster is able to perform an illegitimate (illegal) SIM
                swap with your cellphone service provider by for example
                carrying a false copy of your identity document. This allows the
                fraudster full use of your cellphone account and to receive
                messages intended for you. They will also receive the
                confidential banking notifications and approval SMSs that the
                bank sends to customers. If they have already tricked you to
                give them your personal and account details, they can transfer
                money from your account without you knowing.
              </p>
              <ul>
                <li>
                  You should: Protect your personal, bank account and cellphone
                  account information – also when you’re online
                </li>
                <li>
                  Immediately investigate when you notice that you are not
                  receiving calls and messages
                </li>
                <li>
                  Keep your phone switched on – otherwise you will not notice
                  when your SIM card has been swapped
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default HowToProtectYourself;
