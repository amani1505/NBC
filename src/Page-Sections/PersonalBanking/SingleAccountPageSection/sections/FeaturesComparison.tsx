import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";

interface Feature {
  text: string;
  included: boolean;
}

interface FeatureSection {
  title: string;
  subtitle: string;
  whatYouGet: Feature[];
  whatItCosts: Feature[];
}

interface HowToGetItSection {
  title: string;
  nbcCustomers: string[];
  nonNbcCustomers: string[];
}

interface FeaturesComparisonProps {
  featureSection: FeatureSection;
  howToGetItSection: HowToGetItSection;
}

const FeatureList = ({ features, title }: { features: Feature[]; title: string }) => (
  <div>
    {title && <h3 className="font-semibold text-lg text-foreground mb-4">{title}</h3>}
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-success" />
          <span className="text-sm text-foreground leading-relaxed">
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const HowToGetItList = ({ items, title }: { items: string[]; title: string }) => (
  <div>
    {title && <h3 className="font-semibold text-lg text-foreground mb-4">{title}</h3>}
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-success" />
          <span className="text-sm text-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function FeaturesComparison({ featureSection, howToGetItSection }: FeaturesComparisonProps) {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Features Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold section-title  mb-2">
            {featureSection.title}
          </h2>
          <p className="section-subtitle text-base ">
            {featureSection.subtitle}
          </p>
        </div>

        {/* Features Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-border shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-nbc-dark-950 font-semibold">What You Get</CardTitle>
            </CardHeader>
            <CardContent>
              <FeatureList features={featureSection.whatYouGet} title="" />
            </CardContent>
          </Card>

          <Card className="border border-border shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-foreground font-semibold text-nbc-dark-950">What It Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <FeatureList features={featureSection.whatItCosts} title="" />
            </CardContent>
          </Card>
        </div>

        {/* How to Get It Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold  text-center mb-12 text-nbc-dark-950">
            {howToGetItSection.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground font-semibold">NBC Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <HowToGetItList items={howToGetItSection.nbcCustomers} title="" />
              </CardContent>
            </Card>

            <Card className="border border-border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground font-semibold">Non-NBC Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <HowToGetItList items={howToGetItSection.nonNbcCustomers} title="" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" className="min-w-40 border-2">
            Compare Account
          </Button>
          <Button variant="default" size="lg" className="min-w-40 bg-nbc-dark-950 hover:bg-nbc-dark-900">
            Open Account
          </Button>
        </div>
      </div>
    </section>
  );
}