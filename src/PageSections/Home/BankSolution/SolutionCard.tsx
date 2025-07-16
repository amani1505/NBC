import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

function SolutionCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="!p-0"   >
      <CardHeader className="!px-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-t-xl"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60" /> */}
      </CardHeader>
      <CardContent className="rounded-b-xl">
        <h3 className="text-xl font-bold leading-relaxed text-nbc-dark-700 line-clamp-1">
          {title}
        </h3>
        <p className=" text-[12px]  line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="mb-5">
        <Button className=" text-white hover:text-white bg-nbc-dark-600 font-[600] hover:bg-nbc-dark-500">
          Learn More <ChevronRight />
          {/* <ArrowRight className="ml-1 w-4 h-4" /> */}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SolutionCard;
