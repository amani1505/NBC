import { Link } from "react-router-dom";
import {
  ChevronDown,
  Search,
  MapPin,
  Globe,
  User,
  Menu,
  X,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigation } from "@/hooks/useNavigation";
import { useState } from "react";

export default function MainNavigation() {
  const {
    navigationItems,
    actionButtons,
    activeThirdLevel,
    setActiveThirdLevel,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    hasThirdLevelItems,
    isActiveLink,
    isActiveParent,
    setActiveParent,
  } = useNavigation();

  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [hoveredSecondLevel, setHoveredSecondLevel] = useState<string | null>(
    null
  );
  const [expandedAccordions, setExpandedAccordions] = useState<Set<string>>(
    new Set()
  );

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setActiveThirdLevel(null);
    setActiveParent(null);
    setHoveredSubItem(null);
    setHoveredSecondLevel(null);
    setExpandedAccordions(new Set());
    closeMobileMenu();
  };

  // Toggle accordion expansion
  const toggleAccordion = (itemId: string) => {
    setExpandedAccordions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const renderIcon = (iconName: string, className = "h-4 w-4") => {
    const icons: Record<
      string,
      React.ComponentType<React.SVGProps<SVGSVGElement>>
    > = {
      MapPin,
      Globe,
      User,
      Search,
      ChevronDown,
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  // Get the active third level content
  const getThirdLevelContent = () => {
    if (!activeThirdLevel) return null;

    for (const item of navigationItems) {
      if (item.subItems) {
        const subItem = item.subItems.find(
          (sub) => sub.label === activeThirdLevel
        );
        if (subItem?.thirdLevelItems) {
          return {
            parentItem: item,
            subItem: subItem,
            items: subItem.thirdLevelItems,
          };
        }
      }
    }
    return null;
  };

  // Get categorized items for second level display
  interface SubItem {
    categories?: Record<
      string,
      { label: string; href?: string; description?: string }[]
    >;
  }

  const getCategorizedItems = (subItem: SubItem) => {
    if (!subItem || !subItem.categories) return [];

    return Object.entries(subItem.categories).map(([categoryName, items]) => ({
      label: categoryName,
      items: items as { label: string; href?: string; description?: string }[],
    }));
  };

  const thirdLevelContent = getThirdLevelContent();

  return (
    <header className="w-full border-nav-border border-b-[4px] border-[#DD0A14] py-2 sticky top-0 z-[10000] bg-white">
      {/* Third Level Full Width Dropdown */}
      {activeThirdLevel && thirdLevelContent && (
        <div
          className="absolute left-0 top-full w-full bg-white shadow-lg z-50 border-t border-gray-200"
          onMouseEnter={() => setActiveThirdLevel(activeThirdLevel)}
          onMouseLeave={() => {
            setActiveThirdLevel(null);
            setHoveredSubItem(null);
            setHoveredSecondLevel(null);
          }}
        >
          <div className="container mx-auto grid grid-cols-3 gap-0 min-h-[400px]">
            {/* First Column - Main Items from navigationData */}
            <div className="bg-gray-50 border-r border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                  {thirdLevelContent.subItem.label}
                </h3>
                <div className="space-y-1">
                  {thirdLevelContent.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredSubItem(item.label);
                        setHoveredSecondLevel(null);
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={closeAllDropdowns}
                        className="group flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 text-gray-700 hover:text-gray-900"
                      >
                        <div>
                          <div className="font-medium">{item.label}</div>
                          {item.description && (
                            <div className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Column - Categories based on hovered first level item */}
            <div className="bg-white border-r border-gray-200">
              {hoveredSubItem && thirdLevelContent.subItem.categories && (
                <div
                  className="p-6"
                  onMouseEnter={() => setHoveredSubItem(hoveredSubItem)}
                >
                  <h4 className="text-md font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                    {hoveredSubItem} Categories
                  </h4>
                  <div className="space-y-1">
                    {getCategorizedItems(thirdLevelContent.subItem).map(
                      (category, idx) => {
                        const itemId = `${hoveredSubItem}-${idx}`;
                        const isExpanded = expandedAccordions.has(itemId);

                        return (
                          <div
                            key={idx}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <div
                              className="group flex items-center justify-between p-3 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                              onMouseEnter={() =>
                                setHoveredSecondLevel(category.label)
                              }
                              onClick={() => toggleAccordion(itemId)}
                            >
                              <div className="flex-1">
                                <div className="font-medium text-gray-700 group-hover:text-gray-900">
                                  {category.label}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {category.items.length} options available
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleAccordion(itemId);
                                  }}
                                >
                                  {isExpanded ? (
                                    <Minus className="h-4 w-4 text-gray-600" />
                                  ) : (
                                    <Plus className="h-4 w-4 text-gray-600" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Accordion Content */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                isExpanded
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="bg-gray-50 border-t border-gray-200">
                                <div className="p-3 space-y-2">
                                  {category.items.map(
                                    (categoryItem, subIdx) => (
                                      <Link
                                        key={subIdx}
                                        to={categoryItem.href || "#"}
                                        onClick={closeAllDropdowns}
                                        className="group/nested flex items-center justify-between p-2 rounded hover:bg-white transition-all duration-150 cursor-pointer"
                                        onMouseEnter={() =>
                                          setHoveredSecondLevel(
                                            categoryItem.label
                                          )
                                        }
                                      >
                                        <div className="flex-1">
                                          <div className="text-sm font-medium text-gray-700 group-hover/nested:text-gray-900">
                                            {categoryItem.label}
                                          </div>
                                          {categoryItem.description && (
                                            <div className="text-xs text-gray-500 mt-0.5">
                                              {categoryItem.description}
                                            </div>
                                          )}
                                        </div>
                                        <ChevronRight className="h-3 w-3 opacity-0 group-hover/nested:opacity-100 transition-opacity text-gray-400" />
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Third Column - Featured Content or Additional Details */}
            <div className="bg-white">
              {hoveredSecondLevel ? (
                <div className="p-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-4">
                    {hoveredSecondLevel}
                  </h4>
                  <div className="space-y-4">
                    <img
                      src="/images/service-feature.jpg"
                      alt={hoveredSecondLevel}
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='128' viewBox='0 0 300 128'%3E%3Crect width='300' height='128' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3EService Image%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Key Features
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 24/7 customer support</li>
                        <li>• Competitive rates and terms</li>
                        <li>• Easy online application process</li>
                        <li>• Quick approval and processing</li>
                        <li>• Flexible payment options</li>
                      </ul>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={closeAllDropdowns}
                      className="w-full"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : hoveredSubItem ? (
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {hoveredSubItem}
                  </h4>
                  <div className="space-y-4">
                    <img
                      src="/images/recent-product.jpg"
                      alt={hoveredSubItem}
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='160' viewBox='0 0 300 160'%3E%3Crect width='300' height='160' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3EProduct Image%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div>
                      <p className="text-gray-600 text-sm mb-4">
                        Discover our comprehensive{" "}
                        {hoveredSubItem.toLowerCase()} solutions designed to
                        meet your financial needs with competitive rates and
                        excellent service.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Competitive rates and flexible terms
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Simple and fast application process
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Expert guidance and support
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Secure and reliable service
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      onClick={closeAllDropdowns}
                      className="w-full"
                    >
                      Get Started
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {thirdLevelContent.parentItem.label} Banking Solutions
                  </h4>
                  <div className="space-y-4">
                    <img
                      src="/images/recent-product.jpg"
                      alt={`${thirdLevelContent.parentItem.label} Banking`}
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='160' viewBox='0 0 300 160'%3E%3Crect width='300' height='160' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3E{thirdLevelContent.parentItem.label} Banking%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <p className="text-gray-600 text-sm">
                      Our {thirdLevelContent.parentItem.label.toLowerCase()}{" "}
                      banking solutions are designed to provide you with the
                      financial tools and services you need to achieve your
                      goals and manage your finances effectively.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">
                        Why Choose Our {thirdLevelContent.parentItem.label}{" "}
                        Solutions:
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          Tailored financial products
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          Expert advisory services
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          Digital banking convenience
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          24/7 customer support
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      onClick={closeAllDropdowns}
                      className="w-full"
                    >
                      Explore {thirdLevelContent.parentItem.label} Solutions
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links Footer - Dynamic based on parent category */}
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center gap-6">
                <span className="text-gray-500 font-medium text-sm">
                  Quick Links:
                </span>
                <div className="flex gap-6">
                  {/* <Link
                    to={`${thirdLevelContent.parentItem.href || "#"}/apply`}
                    className="text-sm text-gray-600 hover:text-nbc-dark-950 hover:underline transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    Apply Now
                  </Link> */}

                  <Link
                    to="/find-branches-atm"
                    className="text-sm text-gray-600 hover:text-nbc-dark-950 hover:underline transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    Find Branch & ATMs
                  </Link>
                  <Link
                    to={"/whistle-blowing"}
                    className="text-sm text-gray-600 hover:text-nbc-dark-950 hover:underline transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    Whistleblowing
                  </Link>

                  <Link
                    to="/contact-us"
                    className="text-sm text-gray-600 hover:text-nbc-dark-950 hover:underline transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <nav className="container mx-auto px-4 group">
        <div className="min-h-16 has-[.has-third-level:hover]:min-h-28 transition-all duration-200">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center ">
              <div className="flex-shrink-0 py-10">
                <img
                  src="/images/logo.svg"
                  alt="NBC Logo"
                  width={90}
                  height={100}
                  className="z-[10000000]"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => {
                const hasThirdLevel = hasThirdLevelItems(item);
                return (
                  <div
                    key={index}
                    className={`relative group/item ${
                      hasThirdLevel ? "has-third-level" : ""
                    }`}
                    onMouseEnter={() =>
                      !item.hasDropdown && setActiveThirdLevel(null)
                    }
                  >
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button
                          className={`flex items-center space-x-1 text-nav-text hover:text-nav-text-hover transition-colors duration-200 py-2 relative group-hover/item:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200 ${
                            isActiveParent(item) ? "after:w-full" : "after:w-0"
                          }`}
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown className="h-4 w-4 group-hover/item:rotate-180 transition-transform duration-200" />
                        </button>

                        {/* Second Level Links - Inside Navbar */}
                        {hasThirdLevel && (
                          <div className=" absolute left-7 top-full opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-40 flex items-center justify-start h-12">
                            <div className="flex items-center space-x-8 ">
                              {item.subItems?.map((subItem, index) => (
                                <div
                                  key={index}
                                  className="relative group/subitem"
                                  onMouseEnter={() => {
                                    if (subItem.hasThirdLevel) {
                                      setActiveThirdLevel(subItem.label);
                                      setHoveredSubItem(null);
                                      setHoveredSecondLevel(null);
                                    }
                                  }}
                                >
                                  {subItem.hasThirdLevel ? (
                                    subItem.href ? (
                                      <Link
                                        to={subItem.href ?? "#"}
                                        onClick={closeAllDropdowns}
                                        className={`text-nav-text hover:text-nav-text-hover transition-colors duration-150 font-medium whitespace-nowrap flex items-center h-12 space-x-1 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200 ${
                                          subItem.href &&
                                          isActiveLink(subItem.href)
                                            ? "after:w-full"
                                            : "after:w-0"
                                        }`}
                                      >
                                        <span>{subItem.label}</span>
                                        <ChevronDown className="h-4 w-4" />
                                      </Link>
                                    ) : (
                                      <button
                                        className={`text-nav-text hover:text-nav-text-hover transition-colors duration-150 font-medium whitespace-nowrap flex items-center h-12 space-x-1 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200  ${
                                          subItem.href &&
                                          isActiveLink(subItem.href)
                                            ? "after:w-full"
                                            : "after:w-0"
                                        }`}
                                      >
                                        <span>{subItem.label}</span>
                                        <ChevronDown className="h-4 w-4" />
                                      </button>
                                    )
                                  ) : subItem.href ? (
                                    <Link
                                      to={subItem.href ?? "#"}
                                      onClick={closeAllDropdowns}
                                      className={`text-nav-text hover:text-nav-text-hover transition-colors duration-150 font-medium whitespace-nowrap flex items-center h-12 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200 ${
                                        subItem.href &&
                                        isActiveLink(subItem.href)
                                          ? "after:w-full"
                                          : "after:w-0"
                                      }`}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ) : (
                                    <span
                                      className={`text-nav-text hover:text-nav-text-hover transition-colors duration-150 font-medium whitespace-nowrap flex items-center h-12 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200`}
                                    >
                                      {subItem.label}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Regular Dropdown for items without third level */}
                        {!hasThirdLevel && item.subItems && (
                          <div className="absolute left-0 top-full mt-1 w-80 bg-nav-dropdown border border-nav-border rounded-lg shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                            <div className="p-4">
                              <div className="grid gap-2 ">
                                {item.subItems?.map((subItem, index) => (
                                  <Link
                                    key={index}
                                    to={subItem.href ?? "/"}
                                    onClick={closeAllDropdowns}
                                    className="block p-3 rounded-md hover:bg-accent transition-colors duration-150 "
                                  >
                                    <div className="font-medium text-nav-text">
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <div className="text-sm text-muted-foreground mt-1">
                                        {subItem.description}
                                      </div>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href ?? "/"}
                        onClick={closeAllDropdowns}
                        className={`text-nav-text hover:text-nav-text-hover transition-colors duration-200 font-medium py-2 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200 ${
                          item.href && isActiveLink(item.href)
                            ? "after:w-full"
                            : "after:w-0"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Render action buttons except Login */}
              {actionButtons
                .filter((btn) => btn.label !== "Login")
                .map((actionButton) => (
                  <div key={actionButton.label}>
                    {actionButton.items ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant={actionButton.variant} size="sm">
                            {actionButton.icon &&
                              renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                            {actionButton.label}
                            <ChevronDown className="h-4 w-4 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-[10000000]">
                          {actionButton.items.map((item) => (
                            <DropdownMenuItem
                              key={item.label}
                              onClick={closeAllDropdowns}
                            >
                              {item.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button
                        variant={actionButton.variant}
                        size="sm"
                        className="text-nav-text hover:text-nav-text-hover"
                      >
                        {actionButton.icon &&
                          renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                        {actionButton.label}
                      </Button>
                    )}
                  </div>
                ))}

              {/* Search Bar before Login button */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="w-48 pl-10 h-9" />
              </div>

              {/* Render Login button last */}
              {actionButtons
                .filter((btn) => btn.label === "Login")
                .map((actionButton) => (
                  <div key={actionButton.label}>
                    {actionButton.items ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant={actionButton.variant} size="md">
                            {actionButton.icon &&
                              renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                            {actionButton.label}
                            <ChevronDown className="h-4 w-4 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-[10000000] ">
                          {actionButton.items.map((item) => (
                            <DropdownMenuItem
                              key={item.label}
                              onClick={closeAllDropdowns}
                              className="text-nav-text hover:bg-gray-100 transition-colors duration-200 hover:text-nbc-dark-200 cursor-pointer"
                            >
                              {item.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button
                        variant={actionButton.variant}
                        size="sm"
                        className="text-nav-text hover:text-nav-text-hover"
                      >
                        {actionButton.icon &&
                          renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                        {actionButton.label}
                      </Button>
                    )}
                  </div>
                ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-nav-text"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-nav-border bg-nav-secondary">
            <div className="px-4 py-6 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="w-full pl-10" />
              </div>

              {/* Navigation Items */}
              {navigationItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  {item.hasDropdown ? (
                    <div>
                      <div className="font-medium text-nav-text py-2 border-b border-nav-border">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-2 mt-2">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href ?? "#"}
                            onClick={closeAllDropdowns}
                            className="block py-2 text-nav-text hover:text-nav-text-hover transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href ?? "#"}
                      onClick={closeAllDropdowns}
                      className="block font-medium text-nav-text hover:text-nav-text-hover transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-nav-border space-y-3">
                {actionButtons.map((actionButton, index) => (
                  <button
                    key={index}
                    onClick={closeAllDropdowns}
                    className="flex items-center space-x-1 text-[15px] font-semibold px-2 py-1 border-0 transition-all duration-200 rounded-md text-white hover:text-gray-200 hover:underline hover:underline-offset-8 hover:decoration-2"
                  >
                    {actionButton.icon &&
                      renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                    {actionButton.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
