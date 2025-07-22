import FeedbackForm from "@/components/sections/FeedbackForm";
import Button from "@/components/ui/button";
import { useState } from "react";

function FeedbackandComplains() {
  const [feedbackType, setFeedbackType] = useState<"feedback" | "complaint">(
    "feedback"
  );

  const handleFeedbackTypeChange = (type: "feedback" | "complaint") => {
    setFeedbackType(type);
  };

  return (
    <div className="space-y-6 animate-fade-in container">
      <div className="flex items-center gap-3 mb-4">
        <Button
          className={`${
            feedbackType === "feedback"
              ? "bg-nbc-dark-950 hover:bg-nbc-dark-800"
              : "border border-gray-500 bg-transparent text-gray-500 hover:bg-nbc-dark-950 hover:text-white"
          }`}
          onClick={() => handleFeedbackTypeChange("feedback")}
        >
          FeedBack
        </Button>
        <Button
          className={`${
            feedbackType === "complaint"
              ? "bg-nbc-dark-950 hover:bg-nbc-dark-800"
              : "border border-gray-500 bg-transparent text-gray-500 hover:bg-nbc-dark-950 hover:text-white"
          }`}
          onClick={() => handleFeedbackTypeChange("complaint")}
        >
          Raise A Complain
        </Button>
      </div>
      {feedbackType === "feedback" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            className="rounded-lg "
            style={{
              backgroundImage: "url('/images/feedback.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img src="/images/feedback.jpg" alt="" className="rounded-lg h-full w-full" /> */}
          </div>
          <div>
            <h1 className="text-lg sm:text-3xl lg:text-xl font-bold text-nbc-dark-950">
              Help Us Improve!
            </h1>
            <p className="text-sm sm:text-base lg:text-md mx-auto  leading-relaxed sm:leading-relaxed lg:leading-loose text-[#4B5563] mb-4">
              Leave us a message and let us know what we can do to make your
              experience better.
            </p>
            <FeedbackForm />
          </div>
        </div>
      )}
      {feedbackType === "complaint" && (
        <div className="w-full flex flex-col items-center justify-center p-2 gap-y-5  animate-fade-in">
          <div>
            <img src="/images/complaince.svg" alt="" />
          </div>
          <div>
            <p className="text-nbc-dark-950 capitalize mb-2 font-[600]">
              {" "}
              please login to continue!
            </p>
            <div>
              <Button className="bg-nbc-dark-950 hover:bg-nbc-dark-800 w-full">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackandComplains;
