import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Search, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { NavLink } from "react-router-dom";

type DropdownSection = {
  section: string;
  links: { title: string; href: string }[];
};

type NavigationItem = {
  title: string;
  href: string;
  hasChildren?: boolean;
  children?: DropdownSection[];
};

// Default navigation data
const defaultNavigationItems: NavigationItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Personal",
    href: "/personal-accounts",
    hasChildren: true,
    children: [
      {
        section: "Personal Banking",
        links: [
          { title: "Savings Accounts", href: "/personal/savings-accounts" },
          { title: "Current Accounts", href: "/personal/current-accounts" },
          { title: "Fixed Deposits", href: "/personal/fixed-deposits" },
          { title: "Mobile Banking", href: "/personal/mobile-banking" },
        ],
      },
      {
        section: "Loans & Credit",
        links: [
          { title: "Personal Loans", href: "/personal/loans" },
          { title: "Home Loans", href: "/personal/home-loans" },
          { title: "Car Loans", href: "/personal/car-loans" },
          { title: "Credit Cards", href: "/personal/credit-cards" },
        ],
      },
      {
        section: "Digital Services",
        links: [
          { title: "SimBanking", href: "/personal/simbanking" },
          { title: "Online Banking", href: "/personal/online-banking" },
          { title: "Mobile App", href: "/personal/mobile-app" },
        ],
      },
    ],
  },
  {
    title: "Business",
    href: "/business",
    hasChildren: true,
    children: [
      {
        section: "Business Accounts",
        links: [
          {
            title: "Business Current Account",
            href: "/business/current-account",
          },
          { title: "Business Savings", href: "/business/savings" },
          { title: "SME Banking", href: "/business/sme-banking" },
          { title: "Corporate Banking", href: "/business/corporate-banking" },
        ],
      },
      {
        section: "Business Loans",
        links: [
          { title: "Working Capital", href: "/business/loans/working-capital" },
          { title: "Asset Financing", href: "/business/loans/asset-financing" },
          { title: "Trade Finance", href: "/business/loans/trade-finance" },
          {
            title: "Equipment Finance",
            href: "/business/loans/equipment-finance",
          },
        ],
      },
      {
        section: "Business Solutions",
        links: [
          {
            title: "Cash Management",
            href: "/business/solutions/cash-management",
          },
          {
            title: "Payroll Services",
            href: "/business/solutions/payroll-services",
          },
          {
            title: "Business Cards",
            href: "/business/solutions/business-cards",
          },
        ],
      },
    ],
  },
  {
    title: "Corporate",
    href: "/corporate",
    hasChildren: true,
    children: [
      {
        section: "Investment Products",
        links: [
          {
            title: "Unit Trusts",
            href: "/corporate/investment-products/unit-trusts",
          },
          {
            title: "Treasury Bills",
            href: "/corporate/investment-products/treasury-bills",
          },
          {
            title: "Government Bonds",
            href: "/corporate/investment-products/government-bonds",
          },
          {
            title: "Corporate Bonds",
            href: "/corporate/investment-products/corporate-bonds",
          },
        ],
      },
      {
        section: "Investment Services",
        links: [
          {
            title: "Custody Services",
            href: "/corporate/investment-services/custody",
          },
          {
            title: "Portfolio Management",
            href: "/corporate/investment-services/portfolio-management",
          },
          {
            title: "Investment Advisory",
            href: "/corporate/investment-services/advisory",
          },
        ],
      },
      {
        section: "Market Information",
        links: [
          { title: "Market Research", href: "/corporate/market-info/research" },
          {
            title: "Economic Updates",
            href: "/corporate/market-info/economic-updates",
          },
          {
            title: "Investment Reports",
            href: "/corporate/market-info/reports",
          },
        ],
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    hasChildren: true,
    children: [
      {
        section: "About Us",
        links: [
          { title: "Our History", href: "/about/history" },
          { title: "Vision & Mission", href: "/about/vision-mission" },
          { title: "Leadership Team", href: "/about/leadership" },
          { title: "Corporate Governance", href: "/about/governance" },
        ],
      },
      {
        section: "News & Updates",
        links: [
          { title: "Latest News", href: "/about/news" },
          { title: "Press Releases", href: "/about/press-releases" },
          { title: "Annual Reports", href: "/about/annual-reports" },
          { title: "Financial Results", href: "/about/financial-results" },
        ],
      },
      {
        section: "Careers & CSR",
        links: [
          { title: "Job Opportunities", href: "/about/careers/jobs" },
          {
            title: "Graduate Programs",
            href: "/about/careers/graduate-programs",
          },
          { title: "CSR Initiatives", href: "/about/csr/initiatives" },
          { title: "Community Support", href: "/about/csr/community-support" },
        ],
      },
    ],
  },
];

function Navbar({
  navigationItems = defaultNavigationItems,
  logoSrc = "/images/logo.svg",
  logoAlt = "crdb logo",
  showFindUs = true,
  showSearch = true,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openChildDropdown, setOpenChildDropdown] = useState<number | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [childDropdownTimeout, setChildDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleFindUsClick = () => {};
  const handleSearchClick = () => {};

  // Main dropdown handlers
  const handleDropdownEnter = (index: number) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(index);
    // Only reset child dropdown if a different main dropdown is opened
    if (openDropdown !== index) {
      setOpenChildDropdown(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
      setOpenChildDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  // Child dropdown handlers
  const handleChildDropdownEnter = (index: number) => {
    if (childDropdownTimeout) {
      clearTimeout(childDropdownTimeout);
      setChildDropdownTimeout(null);
    }
    setOpenChildDropdown(index);
  };

  const handleChildDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenChildDropdown(null);
    }, 150);
    setChildDropdownTimeout(timeout);
  };

  const handleChildDropdownMouseEnter = () => {
    if (childDropdownTimeout) {
      clearTimeout(childDropdownTimeout);
      setChildDropdownTimeout(null);
    }
  };

  return (
    <header className="border-b-[4px] border-[#DD0A14]">
      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md transition-shadow duration-300">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <img src={logoSrc} alt={logoAlt} width={100} height={100} />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 lg:flex">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => item.hasChildren && handleDropdownEnter(index)}
                  onMouseLeave={() => item.hasChildren && handleDropdownMouseLeave()}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center space-x-1 text-[15px] font-semibold px-2 py-1 border-0 transition-all duration-200 rounded-md
                      ${
                        isActive
                          ? "text-[#213A89] underline underline-offset-8 decoration-2"
                          : "text-gray-700"
                      }
                      hover:text-[#213A89] hover:underline hover:underline-offset-8 hover:decoration-2 `
                    }
                    style={{ position: "relative" }}
                  >
                    <span>{item.title}</span>
                    {item.hasChildren && <ChevronDown size={16} />}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden items-center space-x-4 md:flex"
              >
                {showSearch && (
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-gray-400">
                      <Search size={16} />
                    </span>
                    <Input placeholder="Search" className="pl-9 pr-2" />
                  </div>
                )}
                {showFindUs && (
                  <div
                    className="flex items-center space-x-2 text-gray-600 transition-colors cursor-pointer hover:text-crdb-green-600"
                    onClick={handleFindUsClick}
                  >
                    <Button className="bg-nbc-dark-950 hover:bg-nbc-dark-700">
                      Login
                      <ChevronDown size={16} />
                    </Button>
                  </div>
                )}
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 border-0 transition-colors lg:hidden hover:text-crdb-green-600 focus:outline-none focus:ring-0"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Second Desktop Navigation (Dropdown) */}
          <div>
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.hasChildren && openDropdown === index && (
                  <div 
                    className=""
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="container mx-auto">
                      <div className="hidden lg:flex space-x-8 rounded-md px-4 py-2 ml-[310px]">
                        {item.children?.map((dropdownSection, sectionIndex) => (
                          <motion.div
                            key={sectionIndex}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sectionIndex * 0.1 }}
                            className="relative group"
                            onMouseEnter={() => handleChildDropdownEnter(index)}
                            onMouseLeave={handleChildDropdownMouseLeave}
                          >
                            <button
                              className="flex items-center space-x-1 text-[15px] font-semibold px-2 py-1 border-0 transition-all duration-200 rounded-md text-white hover:text-gray-200 hover:underline hover:underline-offset-8 hover:decoration-2"
                            >
                              <span>{dropdownSection.section}</span>
                              <ChevronDown size={16} />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Third Level Dropdown (Child Dropdown) */}
            {openChildDropdown !== null && openDropdown !== null && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={handleChildDropdownMouseEnter}
                onMouseLeave={handleChildDropdownMouseLeave}
              >
                <div className="container mx-auto py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {navigationItems[openChildDropdown].children?.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        <div className="text-sm font-bold tracking-wide uppercase text-[#213A89] border-b border-gray-200 pb-2">
                          {section.section}
                        </div>
                        <ul className="space-y-2">
                          {section.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <NavLink
                                to={link.href}
                                className={({ isActive }) =>
                                  `block px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-gray-100 ${
                                    isActive ? 'text-[#213A89] bg-gray-50' : 'text-gray-700 hover:text-[#213A89]'
                                  }`
                                }
                              >
                                {link.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          className="overflow-hidden bg-white border-t lg:hidden"
        >
          <div className="container px-4 py-4 mx-auto">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex justify-between items-center py-2 px-2 rounded-md text-[15px] font-semibold border-0 transition-all duration-200
                    ${
                      isActive
                        ? "text-[#213A89] underline underline-offset-8 decoration-2"
                        : "text-gray-700"
                    }
                    hover:text-[#213A89] hover:underline hover:underline-offset-8 hover:decoration-2 hover:bg-gray-100`
                  }
                >
                  <span>{item.title}</span>
                  {item.hasChildren && <ChevronDown size={16} />}
                </NavLink>
              ))}
              <div className="flex items-center pt-4 space-x-4 border-t">
                {showFindUs && (
                  <div
                    className="flex items-center space-x-2 text-gray-600"
                    onClick={handleFindUsClick}
                  >
                    <MapPin size={16} />
                    <span className="text-sm">FIND US</span>
                  </div>
                )}
                {showSearch && (
                  <div
                    className="flex items-center space-x-2 text-gray-600"
                    onClick={handleSearchClick}
                  >
                    <Search size={16} />
                    <span className="text-sm">SEARCH</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}

export default Navbar;