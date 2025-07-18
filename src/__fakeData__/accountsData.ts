import type { AccountType, AccountFeature, AccountComparison } from '@/types/accounts';

export const accountTypes: AccountType[] = [
  { id: 'chanua', name: 'Chanua Account', category: 'personal', customerType: 'individual' },
  { id: 'matengo', name: 'Matengo Account', category: 'personal', customerType: 'individual' },
  { id: 'student', name: 'Student Account', category: 'personal', customerType: 'individual' },
  { id: 'pasta', name: 'Pasta Account', category: 'business', customerType: 'corporate' },
  { id: 'johari', name: 'Johari Account', category: 'business', customerType: 'individual' },
  { id: 'mwalimu', name: 'Mwalimu Account', category: 'personal', customerType: 'individual' },
  { id: 'shambani', name: 'Shambani Account', category: 'business', customerType: 'corporate' },
];

export const accountFeatures: AccountFeature[] = [
  { id: 'multi-currency', name: 'Multi-Currency (TZS, GBP, USD)' },
  { id: 'min-balance', name: 'Minimum Operating Balance' },
  { id: 'interest', name: 'Earns Interest on deposits' },
  { id: 'joint-operation', name: 'Joint Account Operation' },
  { id: 'mobile-banking', name: 'Access to mobile banking & Internet banking' },
  { id: 'visa-mastercard', name: 'Visa/Mastercard' },
];

export const accountComparisons: AccountComparison[] = [
  {
    id: 'chanua',
    name: 'Chanua Account',
    features: {
      'multi-currency': true,
      'min-balance': true,
      'interest': true,
      'joint-operation': true,
      'mobile-banking': true,
      'visa-mastercard': true,
    },
  },
  {
    id: 'matengo',
    name: 'Matengo Account',
    features: {
      'multi-currency': false,
      'min-balance': true,
      'interest': false,
      'joint-operation': false,
      'mobile-banking': true,
      'visa-mastercard': false,
    },
  },
  {
    id: 'student',
    name: 'Student Account',
    features: {
      'multi-currency': true,
      'min-balance': true,
      'interest': true,
      'joint-operation': true,
      'mobile-banking': true,
      'visa-mastercard': true,
    },
  },
  {
    id: 'johari',
    name: 'Johari Account',
    features: {
      'multi-currency': false,
      'min-balance': true,
      'interest': true,
      'joint-operation': false,
      'mobile-banking': true,
      'visa-mastercard': true,
    },
  },
  {
    id: 'mwalimu',
    name: 'Mwalimu Account',
    features: {
      'multi-currency': true,
      'min-balance': true,
      'interest': true,
      'joint-operation': true,
      'mobile-banking': true,
      'visa-mastercard': true,
    },
  },
  {
    id: 'shambani',
    name: 'Shambani Account',
    features: {
      'multi-currency': true,
      'min-balance': true,
      'interest': true,
      'joint-operation': true,
      'mobile-banking': true,
      'visa-mastercard': true,
    },
  },
];