import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';

/** App branding colors */
export enum LemmyMartinBrandingColors {
  primary = '#63da9e',
  secondaryDark = '#797979',
  tertiary = '#2b2732',
}

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

/** Merged light theme of `react-native-paper` and `react-navigation` */
export const CombinedLightTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};

/** Merged dark theme of `react-native-paper` and `react-navigation` */
export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

/** Dark theme for the app */
export const LemmyDarkTheme = {
  ...CombinedDarkTheme,
  colors: {
    ...CombinedDarkTheme.colors,
    primary: LemmyMartinBrandingColors.primary,
    secondary: LemmyMartinBrandingColors.secondaryDark,
    tertiary: LemmyMartinBrandingColors.tertiary,
  },
};
