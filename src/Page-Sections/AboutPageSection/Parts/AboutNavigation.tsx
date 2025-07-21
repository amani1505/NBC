import {  NavLink } from "react-router-dom";

function AboutNavigation() {
  const navLinks = [
    {
      title: "Overview",
      link: "",
    },

    {
      title: "Governance",
      link: "governance",
    },

    {
      title: "Investor Relations",
      link: "investor-relations",
    },
    {
      title: "Sustainability",
      link: "sustainability",
    },
    {
      title: "News & Media Center",
      link: "news",
    },
    {
        title:"Tenders",
        link:"tenders"
    },{
        title:"careers",
        link:"careers"
    }
  ];

  return (
    <div className="border-b-[2px] border-[#DD0A14] py-5 mb-8">
      <div className="container mx-auto w-full ">
        <div className="flex justify-center text-[#7E939A] gap-10">
          {navLinks?.map((link) => (
            <NavLink
              to={link.link}
              end={link.link === ""}
              className={({ isActive }) =>
                `capitalize py-1 transition-all ease-in duration-300
                hover:text-nbc-dark-950 hover:border-b-[2px] hover:border-nbc-dark-950
                ${isActive ? "text-nbc-dark-950 border-b-[2px] border-nbc-dark-950" : "text-[#7E939A]"}`
              }
              key={link.title}
            >
              {link.title}
            </NavLink>
          ))}

        
        </div>
      </div>
    </div>
  );
}

export default AboutNavigation;
