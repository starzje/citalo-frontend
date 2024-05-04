import { Dispatch, SetStateAction } from 'react';

/**
 * types/mobileMenu.ts
 * interface file koj je vezan za mobile menu
 */

/**
 * @interface MobileMenuProps
 * @property {boolean} [isOpen] - Indicates whether the mobile menu is open or closed.
 * @property {(value: boolean) => void} setIsOpen - A callback function that sets the value of isOpen.
 */
export interface MobileMenuProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
