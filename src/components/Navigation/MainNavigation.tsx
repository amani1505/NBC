import {
  ChevronDown,
  Search,
  MapPin,
  Globe,
  User,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigation } from "@/hooks/useNavigation";

export default function MainNavigation() {
  const {
    navigationItems,
    actionButtons,
    activeThirdLevel,
    setActiveThirdLevel,
    isMobileMenuOpen,
    toggleMobileMenu,
    hasThirdLevelItems,
    isActiveLink,
    isActiveParent,
  } = useNavigation();

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

  return (
    <header className="w-full bg-background border-nav-border border-b-[4px] border-[#DD0A14] py-2 relative">
      {/* Third Level Full Width Dropdown - Moved outside nav container */}
      {activeThirdLevel && (
        <div
          className="absolute left-0 top-full w-full bg-nav-dropdown border-b border-nav-border shadow-lg z-50 bg-white"
          onMouseEnter={() => setActiveThirdLevel(activeThirdLevel)}
          onMouseLeave={() => setActiveThirdLevel(null)}
        >
          <div className="container mx-auto px-4 py-8">
            {navigationItems.map(
              (item) =>
                item.subItems?.find(
                  (subItem) => subItem.label === activeThirdLevel
                )?.thirdLevelItems && (
                  <div key={item.label} className="grid grid-cols-3 gap-8">
                    {item.subItems
                      .find((subItem) => subItem.label === activeThirdLevel)
                      ?.thirdLevelItems?.map((thirdItem, index) => (
                        <a
                          key={index}
                          href={thirdItem.href}
                          className="block p-4 rounded-lg hover:bg-accent transition-colors duration-150"
                        >
                          <div className="font-medium text-nav-text mb-2">
                            {thirdItem.label}
                          </div>
                          {thirdItem.description && (
                            <div className="text-sm text-muted-foreground">
                              {thirdItem.description}
                            </div>
                          )}
                        </a>
                      ))}
                  </div>
                )
            )}
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
                          <div className="absolute left-0 top-full opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-40 flex items-center justify-start h-12">
                            <div className="flex items-center space-x-8">
                              {item.subItems?.map((subItem, index) => (
                                <div
                                  key={index}
                                  className="relative group/subitem"
                                  onMouseEnter={() =>
                                    subItem.hasThirdLevel &&
                                    setActiveThirdLevel(subItem.label)
                                  }
                                >
                                  {subItem.hasThirdLevel ? (
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
                                  ) : (
                                    <a
                                      href={subItem.href}
                                      className={`text-nav-text hover:text-nav-text-hover transition-colors duration-150 font-medium whitespace-nowrap flex items-center h-12 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200 ${
                                        subItem.href &&
                                        isActiveLink(subItem.href)
                                          ? "after:w-full"
                                          : "after:w-0"
                                      }`}
                                    >
                                      {subItem.label}
                                    </a>
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
                              <div className="grid gap-2">
                                {item.subItems?.map((subItem, index) => (
                                  <a
                                    key={index}
                                    href={subItem.href}
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
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className={`text-nav-text hover:text-nav-text-hover transition-colors duration-200 font-medium py-2 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-nbc-dark-700 after:transition-all after:duration-200 ${
                          item.href && isActiveLink(item.href)
                            ? "after:w-full"
                            : "after:w-0"
                        }`}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {actionButtons.map((actionButton) => (
                <div key={actionButton.label}>
                  {actionButton.items ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant={actionButton.variant}
                          size="sm"
                         
                          className={
                            actionButton.variant === "default"
                              ? "bg-nbc-dark-700 hover:bg-nbc-dark-500"
                              : "text-nav-text hover:text-nav-text-hover"
                          }
                        >
                          {actionButton.icon &&
                            renderIcon(actionButton.icon, "h-4 w-4 mr-2")}
                          {actionButton.label}
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {actionButton.items.map((item) => (
                          <DropdownMenuItem key={item.label}>
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

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="w-48 pl-10 h-9" />
              </div>
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
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-nav-text hover:text-nav-text-hover transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block font-medium text-nav-text hover:text-nav-text-hover transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-nav-border space-y-3">
                {actionButtons.map((actionButton, index) => (
                  <button
                    key={index}
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
