import { Button } from "@/components/ui/button";

function CarriesandVacancies() {
  return (
    <div className="container mx-auto py-16">
      <div
        className="relative w-full bg-cover bg-center h-[55vh] rounded-lg"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url('images/call.png')       
          `,
          backgroundPosition:`center`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          width:'100%'
        }}
        
      >
        <div className="flex flex-col justify-center h-full w-[40%] text-white px-10 gap-3">
          <div className="text-4xl md:text-5xl font-bold mb-4">
            Careers & Vacancies
          </div>
          <div className="tracking-wider leading-6">
            A visual guide could be a wireframe, creative composition, or
            information architecture. A device that enables collaboration will
            lessen the chance of work having to be completely redone. A manager
            could create a visual guide for the team to complete the build-out.
          </div>

          <div>
            <Button
              className="border border-white text-white font-semibold bg-transparent hover:bg-nbc-dark-700 hover:border-nbc-dark-700 w-1/2"
              size="lg"
            >
            View All News and Insights
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarriesandVacancies;
