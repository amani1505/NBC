import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarSubItem {
  label: string;
  href: string;
}

interface SidebarItem {
  label: string;
  href?: string;
  hasChildren?: boolean;
  children?: SidebarSubItem[];
  isExpanded?: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    label: 'Accounts & Deposits',
    hasChildren: true,
    children: [
      { label: 'Individual Current Account', href: '/accounts/individual-current' },
      { label: 'Direct Current Account', href: '/accounts/direct-current' },
      { label: 'Savings Account', href: '/accounts/savings' },
      { label: 'Fixed Deposit', href: '/accounts/fixed-deposit' }
    ]
  },
  {
    label: 'Savings & Deposits',
    hasChildren: true,
    children: [
      { label: 'Regular Savings', href: '/savings/regular' },
      { label: 'Premium Savings', href: '/savings/premium' },
      { label: 'Goal Savings', href: '/savings/goal' },
      { label: 'Youth Savings', href: '/savings/youth' }
    ]
  },
  {
    label: 'Insurance',
    hasChildren: true,
    children: [
      { label: 'Life Insurance', href: '/insurance/life' },
      { label: 'Health Insurance', href: '/insurance/health' },
      { label: 'Property Insurance', href: '/insurance/property' },
      { label: 'Travel Insurance', href: '/insurance/travel' }
    ]
  },
  {
    label: 'Loans',
    hasChildren: true,
    children: [
      { label: 'Personal Loans', href: '/loans/personal' },
      { label: 'Home Loans', href: '/loans/home' },
      { label: 'Car Loans', href: '/loans/car' },
      { label: 'Education Loans', href: '/loans/education' }
    ]
  },
  {
    label: 'Cards',
    hasChildren: true,
    children: [
      { label: 'Credit Cards', href: '/cards/credit' },
      { label: 'Debit Cards', href: '/cards/debit' },
      { label: 'Prepaid Cards', href: '/cards/prepaid' },
      { label: 'Business Cards', href: '/cards/business' }
    ]
  }
];

export default function SidebarNavigation() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Accounts & Deposits']);

  const toggleItem = (itemLabel: string) => {
    setExpandedItems(prev =>
      prev.includes(itemLabel)
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  return (
    <aside className="w-80 bg-background border-r border-nav-border h-full">
      <div className="p-6">
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <div key={item.label} className="space-y-1">
              {item.hasChildren ? (
                <div>
                  <button
                    onClick={() => toggleItem(item.label)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-nav-text hover:bg-accent hover:text-nav-text-hover rounded-md transition-colors duration-150"
                  >
                    <span>{item.label}</span>
                    {expandedItems.includes(item.label) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedItems.includes(item.label) && item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-nav-text-hover hover:bg-accent rounded-md transition-colors duration-150"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-nav-text hover:bg-accent hover:text-nav-text-hover rounded-md transition-colors duration-150"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}