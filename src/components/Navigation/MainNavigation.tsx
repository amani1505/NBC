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
import { quickLinks } from "@/data/navigationData";

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

  const closeAllDropdowns = () => {
    setActiveThirdLevel(null);
    setActiveParent(null);
    setHoveredSubItem(null);
    setHoveredSecondLevel(null);
    setExpandedAccordions(new Set());
    closeMobileMenu();
  };

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
            content: subItem.thirdLevelContent,
          };
        }
      }
    }
    return null;
  };

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
      items,
      hasItems: items.length > 0,
    }));
  };

  const isIndependentCategory = (category: {
    items: { label: string; href?: string; description?: string }[];
    hasItems?: boolean;
  }) => {
    return !category.hasItems || category.items.length === 0;
  };

  interface SubItemType {
    href: string;
  }

  const getIndependentCategoryHref = (
    categoryName: string,
    subItem: SubItemType
  ) => {
    const slug = categoryName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return `${subItem.href}/${slug}`;
  };

  const thirdLevelContent = getThirdLevelContent();

  return (
    <header className="w-full border-nav-border border-b-[4px] border-[#DD0A14] py-2 sticky top-0 z-[10000] bg-white">
      {activeThirdLevel && thirdLevelContent && (
        <div
          className="absolute left-0 top-full w-full shadow-lg z-50 border-t border-gray-20 bg-white"
          onMouseEnter={() => setActiveThirdLevel(activeThirdLevel)}
          onMouseLeave={() => {
            setActiveThirdLevel(null);
            setHoveredSubItem(null);
            setHoveredSecondLevel(null);
          }}
        >
          <div className="container mx-auto grid grid-cols-3 gap-0 min-h-[400px] max-h-[700px]">
            <div className="bg-gray-50 border-r border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                  {thirdLevelContent.subItem.label}
                </h3>
                <div className="space-y-1 overflow-y-auto max-h-[480px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
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
            <div className="bg-white border-r border-gray-200">
              {hoveredSubItem && thirdLevelContent.subItem.categories && (
                <div
                  className="p-6 h-full flex flex-col"
                  onMouseEnter={() => setHoveredSubItem(hoveredSubItem)}
                >
                  <h4 className="text-md font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300 flex-shrink-0">
                    {hoveredSubItem} Categories
                  </h4>
                  <div className="flex-1 overflow-y-auto max-h-[480px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="space-y-1">
                      {getCategorizedItems(thirdLevelContent.subItem).map(
                        (category, idx) => {
                          const itemId = `${hoveredSubItem}-${idx}`;
                          const isExpanded = expandedAccordions.has(itemId);
                          const independent = isIndependentCategory(category);
                          const isHovered =
                            hoveredSecondLevel === category.label;
                          return (
                            <div
                              key={idx}
                              className={`rounded-lg overflow-hidden transition-all duration-200 ${
                                isHovered || isExpanded
                                  ? "shadow-md shadow-gray-300/50"
                                  : "shadow-none"
                              }`}
                            >
                              {independent ? (
                                <Link
                                  to={getIndependentCategoryHref(
                                    category.label,
                                    {
                                      ...thirdLevelContent.subItem,
                                      href:
                                        thirdLevelContent.subItem.href || "#",
                                    }
                                  )}
                                  onClick={closeAllDropdowns}
                                  className={`group flex items-center justify-between p-3 transition-all duration-200 cursor-pointer w-full rounded-lg ${
                                    isHovered
                                      ? "bg-gray-50 shadow-md shadow-gray-300/50"
                                      : "hover:bg-gray-50 hover:shadow-md hover:shadow-gray-300/50"
                                  }`}
                                  onMouseEnter={() =>
                                    setHoveredSecondLevel(category.label)
                                  }
                                  onMouseLeave={() =>
                                    setHoveredSecondLevel(null)
                                  }
                                >
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-700 group-hover:text-gray-900">
                                      {category.label}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      {thirdLevelContent.content?.[
                                        category.label
                                      ]?.description || "Explore our services"}
                                    </div>
                                  </div>
                                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                                </Link>
                              ) : (
                                <>
                                  <div
                                    className={`group flex items-center justify-between p-3 transition-all duration-200 cursor-pointer rounded-lg ${
                                      isHovered || isExpanded
                                        ? "bg-gray-50"
                                        : "hover:bg-gray-50"
                                    }`}
                                    onMouseEnter={() =>
                                      setHoveredSecondLevel(category.label)
                                    }
                                    onMouseLeave={() => {
                                      if (!isExpanded) {
                                        setHoveredSecondLevel(null);
                                      }
                                    }}
                                    onClick={() => toggleAccordion(itemId)}
                                  >
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-700 group-hover:text-gray-900">
                                        {category.label}
                                      </div>
                                      <div className="text-sm text-gray-500 mt-1">
                                        {category.items.length} options
                                        available
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
                                  <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                      isExpanded
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                                  >
                                    <div className="bg-gray-50 rounded-b-lg">
                                      <div className="p-3 space-y-2">
                                        {category.items.map(
                                          (categoryItem, subIdx) => (
                                            <Link
                                              key={subIdx}
                                              to={categoryItem.href || "#"}
                                              onClick={closeAllDropdowns}
                                              className="group/nested flex items-center justify-between p-2 rounded hover:bg-white hover:shadow-sm transition-all duration-150 cursor-pointer"
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
                                </>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white">
              {hoveredSecondLevel &&
              thirdLevelContent.content?.[hoveredSecondLevel] ? (
                <div className="p-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-4">
                    {hoveredSecondLevel}
                  </h4>
                  <div className="space-y-4">
                    <img
                      src={
                        thirdLevelContent.content[hoveredSecondLevel].imageUrl
                      }
                      alt={
                        thirdLevelContent.content[hoveredSecondLevel].altText
                      }
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        const altText =
                          thirdLevelContent?.content?.[hoveredSecondLevel]
                            ?.altText || "Image not found";
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='128' viewBox='0 0 300 128'%3E%3Crect width='300' height='128' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3E${altText}%3C/text%3E`;
                      }}
                    />
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Key Features
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {thirdLevelContent.content[
                          hoveredSecondLevel
                        ].keyFeatures.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={closeAllDropdowns}
                      className="w-full"
                      asChild
                      icon={ChevronRight}
                      iconPosition="right"
                    >
                      <Link
                        to={
                          thirdLevelContent.content[hoveredSecondLevel]
                            .buttonLink
                        }
                      >
                        {
                          thirdLevelContent.content[hoveredSecondLevel]
                            .buttonText
                        }
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : hoveredSubItem &&
                thirdLevelContent.content?.[hoveredSubItem] ? (
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {hoveredSubItem}
                  </h4>
                  <div className="space-y-4">
                    <img
                      src={thirdLevelContent.content[hoveredSubItem].imageUrl}
                      alt={thirdLevelContent.content[hoveredSubItem].altText}
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        const altText =
                          thirdLevelContent?.content?.[hoveredSubItem]
                            ?.altText || "Image not found";
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='160' viewBox='0 0 300 160'%3E%3Crect width='300' height='160' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3E${altText}%3C/text%3E`;
                      }}
                    />
                    <p className="text-gray-600 text-sm mb-4">
                      {thirdLevelContent.content[hoveredSubItem].description}
                    </p>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Key Features
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {thirdLevelContent.content[
                          hoveredSubItem
                        ].keyFeatures.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={closeAllDropdowns}
                      className="w-full"
                      asChild
                      icon={ChevronRight}
                      iconPosition="right"
                    >
                      <Link
                        to={
                          thirdLevelContent.content[hoveredSubItem].buttonLink
                        }
                      >
                        {thirdLevelContent.content[hoveredSubItem].buttonText}
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {thirdLevelContent.parentItem.label} Solutions
                  </h4>
                  <div className="space-y-4">
                    <img
                      src={
                        thirdLevelContent.subItem.thirdLevelContent?.[
                          thirdLevelContent.subItem.label
                        ]?.imageUrl || "/images/default-solution.jpg"
                      }
                      alt={thirdLevelContent.subItem.label}
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='160' viewBox='0 0 300 160'%3E%3Crect width='300' height='160' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3E${thirdLevelContent.subItem.label}%3C/text%3E`;
                      }}
                    />
                    <p className="text-gray-600 text-sm">
                      {thirdLevelContent.subItem.thirdLevelContent?.[
                        thirdLevelContent.subItem.label
                      ]?.description ||
                        `Our ${thirdLevelContent.parentItem.label.toLowerCase()} solutions are designed to meet your financial needs.`}
                    </p>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Key Features
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {thirdLevelContent.subItem.thirdLevelContent?.[
                          thirdLevelContent.subItem.label
                        ]?.keyFeatures?.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        )) || (
                          <>
                            <li>• Tailored financial products</li>
                            <li>• Expert advisory services</li>
                            <li>• Digital banking convenience</li>
                            <li>• 24/7 customer support</li>
                          </>
                        )}
                      </ul>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={closeAllDropdowns}
                      className="w-full"
                      asChild
                      icon={ChevronRight}
                      iconPosition="right"
                    >
                      <Link
                        to={
                          thirdLevelContent.subItem.thirdLevelContent?.[
                            thirdLevelContent.subItem.label
                          ]?.buttonLink ||
                          thirdLevelContent.subItem.href ||
                          "#"
                        }
                      >
                        {thirdLevelContent.subItem.thirdLevelContent?.[
                          thirdLevelContent.subItem.label
                        ]?.buttonText ||
                          `Explore ${thirdLevelContent.parentItem.label} Solutions`}
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center gap-6">
                <span className="text-gray-500 font-medium text-sm">
                  Quick Links:
                </span>
                <div className="flex gap-6">
                  {quickLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-nbc-dark-950 hover:underline transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <nav className="container mx-auto px-4 group">
        <div className="min-h-16 has-[.has-third-level:hover]:min-h-28 transition-all duration-200">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
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
            <div className="hidden lg:flex items-center space-x-4 gap-5">
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
                        {hasThirdLevel && (
                          <div className="absolute left-7 top-full opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-40 flex items-center justify-start h-12">
                            <div className="flex items-center space-x-8">
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
                                        className={`text-nav-text hover:text-nav-text-hover transition-colors duration-150 font-medium whitespace-nowrap flex items-center h-12 space-x-1 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200 ${
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
                        {!hasThirdLevel && item.subItems && (
                          <div className="absolute left-0 top-full mt-1 w-80 bg-nav-dropdown border border-nav-border rounded-lg shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
                            <div className="p-4">
                              <div className="grid gap-2">
                                {item.subItems?.map((subItem, index) => (
                                  <Link
                                    key={index}
                                    to={subItem.href ?? "/"}
                                    onClick={closeAllDropdowns}
                                    className="block p-3 rounded-md hover:bg-accent transition-colors duration-150"
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
            <div className="hidden lg:flex items-center space-x-4">
              {actionButtons
                .filter((btn) => btn.label !== "Login")
                .map((actionButton) => (
                  <div key={actionButton.label}>
                    {actionButton.items ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant={actionButton.variant} size="sm" icon={ChevronDown} iconPosition="right">
                            {actionButton.icon &&
                              renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                            {actionButton.label}
                            
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-[10000000]">
                          {actionButton.items.map((item) => (
                            <DropdownMenuItem
                              key={item.label}
                              onClick={closeAllDropdowns}
                            >
                              <Link to={item.href}>{item.label}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Button
                        variant={actionButton.variant}
                        size="sm"
                        className="text-nav-text hover:text-nav-text-hover"
                        asChild
                      >
                        <Link
                          to={actionButton.href ?? "#"}
                          onClick={closeAllDropdowns}
                          className="flex items-center"
                        >
                          {actionButton.icon &&
                            renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                          {actionButton.label}
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-40 bg-gray-50 border-gray-200 focus:ring-0 focus:border-nbc-dark-700"
                />
              </div>
              {actionButtons
                .filter((btn) => btn.label === "Login")
                .map((actionButton) => (
                  <div key={actionButton.label}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={actionButton.variant} size="sm" icon={ChevronDown} iconPosition="right">
                          {actionButton.icon &&
                            renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                          {actionButton.label}
                       
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="z-[10000000]">
                        {actionButton.items?.map((item) => (
                          <DropdownMenuItem
                            key={item.label}
                            onClick={closeAllDropdowns}
                          >
                            <Link to={item.href}>{item.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
            </div>
            <div className="lg:hidden flex items-center">
              <Button
                variant="iconRounded"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-nav-text font-medium py-2"
                          onClick={() => toggleAccordion(item.label)}
                        >
                          {item.label}
                          {expandedAccordions.has(item.label) ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </button>
                        {expandedAccordions.has(item.label) &&
                          item.subItems && (
                            <div className="pl-4 space-y-2 mt-2">
                              {item.subItems.map((subItem, subIndex) => (
                                <div key={subIndex}>
                                  {subItem.hasThirdLevel ? (
                                    <div>
                                      <button
                                        className="flex items-center justify-between w-full text-nav-text text-sm py-2"
                                        onClick={() =>
                                          toggleAccordion(
                                            `${item.label}-${subItem.label}`
                                          )
                                        }
                                      >
                                        {subItem.label}
                                        {expandedAccordions.has(
                                          `${item.label}-${subItem.label}`
                                        ) ? (
                                          <Minus className="h-4 w-4" />
                                        ) : (
                                          <Plus className="h-4 w-4" />
                                        )}
                                      </button>
                                      {expandedAccordions.has(
                                        `${item.label}-${subItem.label}`
                                      ) &&
                                        subItem.thirdLevelItems && (
                                          <div className="pl-4 space-y-2 mt-2">
                                            {subItem.thirdLevelItems.map(
                                              (thirdLevelItem, thirdIndex) => (
                                                <Link
                                                  key={thirdIndex}
                                                  to={thirdLevelItem.href}
                                                  onClick={closeAllDropdowns}
                                                  className="block text-sm text-gray-600 hover:text-nbc-dark-950"
                                                >
                                                  {thirdLevelItem.label}
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        )}
                                    </div>
                                  ) : (
                                    <Link
                                      to={subItem.href ?? "#"}
                                      onClick={closeAllDropdowns}
                                      className="block text-sm text-gray-600 hover:text-nbc-dark-950 py-2"
                                    >
                                      {subItem.label}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ) : (
                      <Link
                        to={item.href ?? "#"}
                        onClick={closeAllDropdowns}
                        className="block text-nav-text font-medium py-2"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full bg-gray-50 border-gray-200 focus:ring-0 focus:border-nbc-dark-700"
                  />
                </div>
                <div className="space-y-2">
                  {actionButtons.map((actionButton, index) => (
                    <div key={index}>
                      {actionButton.items ? (
                        <div>
                          <button
                            className="flex items-center justify-between w-full text-nav-text text-sm py-2"
                            onClick={() =>
                              toggleAccordion(`action-${actionButton.label}`)
                            }
                          >
                            {actionButton.icon &&
                              renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                            {actionButton.label}
                            {expandedAccordions.has(
                              `action-${actionButton.label}`
                            ) ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </button>
                          {expandedAccordions.has(
                            `action-${actionButton.label}`
                          ) && (
                            <div className="pl-4 space-y-2 mt-2">
                              {actionButton.items.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.href}
                                  onClick={closeAllDropdowns}
                                  className="block text-sm text-gray-600 hover:text-nbc-dark-950"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={actionButton.href ?? "#"}
                          onClick={closeAllDropdowns}
                          className="flex items-center text-sm text-gray-600 hover:text-nbc-dark-950 py-2"
                        >
                          {actionButton.icon &&
                            renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                          {actionButton.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-2">
                    <span className="text-gray-500 font-medium text-sm">
                      Quick Links:
                    </span>
                    {quickLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.href}
                        onClick={closeAllDropdowns}
                        className="text-sm text-gray-600 hover:text-nbc-dark-950 hover:underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
