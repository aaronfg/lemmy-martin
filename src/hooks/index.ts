import { useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

/** Landscape/Portrair state */
export interface IOrientation {
  isLandscape: boolean;
  isPortrait: boolean;
}

/** Convenience hook for handling orientation changes */
export const useOrientation = () => {
  const [orientation, setOrientation] = useState<IOrientation>({
    isPortrait: true,
    isLandscape: false,
  });
  Dimensions.addEventListener(
    'change',
    ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
      setOrientation({
        isLandscape: window.width > window.height,
        isPortrait: window.height > window.width,
      });
    },
  );
  return orientation;
};
