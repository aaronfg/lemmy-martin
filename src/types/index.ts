/** Simple error descriptor */
export interface IError {
  /** A user-readable error message */
  message: string;
  /** The error code */
  code?: number;
}

/**
 * String names for the screens.
 *
 * Used in the stack navigators.
 */
export enum ScreenNames {
  Communities = 'Communities',
  Feed = 'Feed',
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
