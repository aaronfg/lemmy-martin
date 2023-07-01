/** Simple error descriptor */
export interface IError {
  /** A user-readable error message */
  message: string;
  /** The error code */
  code?: number | string;
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
  PostView = 'PostView',
  FeedAndPostView = 'FeedAndPostView',
}

/** Names of icons in the Material Design icon set */
export enum MaterialIconNames {
  CheckCircleOutline = 'check-circle-outline',
  Home = 'home',
  Menu = 'menu',
  MenuUp = 'menu-up',
  MenuDown = 'menu-down',
  MinusCircleOutline = 'minus-circle-outline',
  PlusCircleOutline = 'plus-circle-outline',
}

export enum UnicodeText {
  Bullet = '\u2022',
}

export enum ScreenMargin {
  Horizontal = 20,
  Vertical = 20,
}

/** Size for the tab icons in the bottom tab navigator */
export const TAB_ICON_SIZE = 40;

/** Default timeout for api calls in milliseconds */
export const DEFAULT_API_TIMEOUT = 5000;
