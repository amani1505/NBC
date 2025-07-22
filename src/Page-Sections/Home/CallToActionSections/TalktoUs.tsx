import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactInfo {
  title: string;
  phones: string[];
  address: {
    company: string;
    street: string;
    poBox: string;
    city: string;
  };
  email: string;
}

interface ContactCentreProps {
  contacts: ContactInfo[];
}

export default function TalktoUs({ contacts }: ContactCentreProps) {
  return (
    <section className="px-4 bg-background">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <Card key={index} className="border border-border bg-background shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {/* Phone Numbers */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="font-semibold text-foreground mb-2">TELEPHONE:</p>
                    <div className="space-y-1">
                      {contact.phones.map((phone, phoneIndex) => (
                        <p key={phoneIndex} className="text-foreground">
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <p className="font-semibold text-foreground mb-2">Address:</p>
                    <div className="space-y-1">
                      <p className="text-foreground">{contact.address.company}</p>
                      <p className="text-foreground">{contact.address.street}</p>
                      <p className="text-foreground">{contact.address.poBox}</p>
                      <p className="text-foreground">{contact.address.city}</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <p className="font-semibold text-foreground mb-2">EMAIL ADDRESS:</p>
                  <p className="text-foreground break-all">
                    {contact.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}