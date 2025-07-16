export type Slide = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
};

export interface HeroSectionProps {
  slides: Slide[];
}
