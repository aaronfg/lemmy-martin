/**
 * @format
 */

import 'react-native';
import { ScreenNames } from '../src/types';

test('Default test', () => {
  expect(ScreenNames.Login).toMatchInlineSnapshot(`"Login"`);
});
