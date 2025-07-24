import CallToActionBanner from "@/components/sections/CallToActionBanner";

function CarriesandVacancies() {
  return (
    <>
      <CallToActionBanner
        title="Careers & Vacancies"
        description="  A visual guide could be a wireframe, creative composition, or
            information architecture. A device that enables collaboration will
            lessen the chance of work having to be completely redone. A manager
            could create a visual guide for the team to complete the build-out."
        buttonText="View Vacancies"
        onButtonClick={() => {
          window.open("https://absa.wd3.myworkdayjobs.com/NBC_Careers", "_blank");
        }}
      />
    </>
  );
}

export default CarriesandVacancies;