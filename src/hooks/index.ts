import { useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export interface IOrientation {
  isLandscape: boolean;
  isPortrait: boolean;
}

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<IOrientation>({
    isPortrait: true,
    isLandscape: false,
  });
  Dimensions.addEventListener(
    'change',
    ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
      console.log(screen);
      setOrientation({
        isLandscape: window.width > window.height,
        isPortrait: window.height > window.width,
      });
    },
  );
  return orientation;
};
