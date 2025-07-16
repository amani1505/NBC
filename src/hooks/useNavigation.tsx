import { useState, useEffect } from 'react';
import { navigationData, actionButtonsData } from '@/data/navigationData';
import type { MenuItem, ActionButton } from '@/data/navigationData';


export const useNavigation = () => {
  const [activeThirdLevel, setActiveThirdLevel] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  // Update current path when component mounts or path changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const getNavigationItems = (): MenuItem[] => {
    return navigationData;
  };

  const getActionButtons = (): ActionButton[] => {
    return actionButtonsData;
  };

  const hasThirdLevelItems = (item: MenuItem): boolean => {
    return item.hasDropdown && item.subItems?.some(subItem => subItem.hasThirdLevel) || false;
  };

  const isActiveLink = (href: string): boolean => {
    return currentPath === href;
  };

  const isActiveParent = (item: MenuItem): boolean => {
    if (item.href && isActiveLink(item.href)) return true;
    if (item.subItems) {
      return item.subItems.some(subItem => {
        if (subItem.href && isActiveLink(subItem.href)) return true;
        if (subItem.thirdLevelItems) {
          return subItem.thirdLevelItems.some(thirdItem => isActiveLink(thirdItem.href));
        }
        return false;
      });
    }
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    navigationItems: getNavigationItems(),
    actionButtons: getActionButtons(),
    activeThirdLevel,
    setActiveThirdLevel,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    hasThirdLevelItems,
    isActiveLink,
    isActiveParent,
    currentPath
  };
};