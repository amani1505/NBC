import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SecondaryNavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const secondaryNavItems: SecondaryNavItem[] = [
  { label: 'Individual', href: '/personal/individual', isActive: true },
  { label: 'Private', href: '/personal/private' },
  { label: 'Privileged', href: '/personal/privileged' },
  { label: 'Diaspora', href: '/personal/diaspora' }
];

export default function SecondaryNavigation() {
  const [activeItem, setActiveItem] = useState('Individual');

  return (
    <div className="w-full bg-nav-secondary border-b border-nav-border">
      <div className="container mx-auto px-4">
        {/* Desktop Secondary Navigation */}
        <div className="hidden md:flex items-center space-x-8 py-3">
          {secondaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeItem === item.label
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-nav-text hover:text-nav-text-hover'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Secondary Navigation */}
        <div className="md:hidden py-3">
          <div className="relative">
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-nav-text bg-background border border-nav-border rounded-md">
              <span>{activeItem}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {/* Mobile dropdown would go here - simplified for now */}
          </div>
        </div>
      </div>
    </div>
  );
}