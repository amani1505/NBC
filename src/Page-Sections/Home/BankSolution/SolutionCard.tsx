import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SolutionCard({
  image,
  title,
  description,
  learnMoreLink,
  compareLink,
}: {
  image: string;
  title: string;
  learnMoreLink: string;
  compareLink?: string;
  description: string;
}) {
  return (
    <Card className="!p-0">
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
      <CardFooter className="mb-5 flex justify-between gap-5">
        {compareLink && (
          <Link
            to={compareLink ?? "/"}
            className=" text-nbc-dark-600 hover:text-white border border-nbc-dark-600   font-[500] hover:bg-nbc-dark-600 flex rounded px-4 py-3 w-full items-center justify-center"
          >
            Compare Account
            {/* <ArrowRight className="ml-1 w-4 h-4" /> */}
          </Link>
        )}
        <Link
          to={learnMoreLink ?? "/"}
          className={
            `text-white hover:text-white bg-nbc-dark-600 font-[500] hover:bg-nbc-dark-500 flex rounded px-4 py-3 items-center justify-center ` +
            (compareLink ? "w-full" : "w-auto")
          }
        >
          Learn More <ChevronRight />
          {/* <ArrowRight className="ml-1 w-4 h-4" /> */}
        </Link>
      </CardFooter>
    </Card>
  );
}

export default SolutionCard;
