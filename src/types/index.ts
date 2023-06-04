export interface IError {
  message: string;
  code?: number;
}

/**
 * String names for the screens.
 *
 * Used in the stack navigators.
 */
export enum ScreenNames {
  Feed = 'feed',
  Login = 'Login',
  MainMenu = 'MainMenu',
}

/** Names of icons in the Material Design icon set */
export enum MaterialIconNames {
  Home = 'home',
  Menu = 'menu',
}

/** Size for the tab icons in the bottom tab navigator */
export const TAB_ICON_SIZE = 40;
