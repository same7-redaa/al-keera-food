export type CategoryType = 'all' | 'madghoot' | 'mbakbaka' | 'sides' | 'drinks';

export interface PortionOption {
  label: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'madghoot' | 'mbakbaka' | 'sides' | 'drinks';
  basePrice: number;
  portions?: PortionOption[];
  image: string;
  badge?: 'bestseller' | 'new' | 'exclusive' | 'signature';
  badgeText?: string;
  rating?: number;
  isPopular?: boolean;
  freshDailyTag?: boolean;
  spicy?: boolean;
}

export interface CartItem {
  id: string; // unique item id + portion
  menuItemId: string;
  name: string;
  selectedPortion?: PortionOption;
  unitPrice: number;
  quantity: number;
  image: string;
  specialInstructions?: string;
}

export interface OfferItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  badge: string;
  itemsIncluded: string[];
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
  favoriteDish: string;
}
