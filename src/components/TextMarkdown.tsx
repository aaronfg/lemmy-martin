import React from 'react';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';
import Markdown from 'react-native-markdown-package';
import { MD3Theme } from 'react-native-paper';
import { LemmyMartinBrandingColors } from '../theme';

/**
 * Text component for rendering Markdown
 * @param props The RN Paper theme that is used
 * to style text and links
 */
export const TextMarkdown = (props: {
  /** App Theme */
  theme: MD3Theme;
  /** Event handler for clinking href links in text */
  onLink?: (url: string) => Promise<void>;
  /** Text size. Default is 16  */
  textSize?: number;
  /** Style for the containing View */
  containerStyle?: StyleProp<ViewStyle>;
  /** Child nodes */
  children: React.ReactNode;
}): JSX.Element => {
  const { theme, children, textSize, containerStyle, onLink } = props;
  return (
    <View style={containerStyle}>
      <Markdown
        onLink={onLink}
        styles={{
          paragraph: {
            fontSize: 16,
            margin: 0,
          },
          codeBlock: {
            fontFamily: Platform.OS === 'ios' ? 'Courier' : 'Monospace',
            fontWeight: '500',
            backgroundColor: '#999999',
          },
          blockQuoteText: {
            color: theme.colors.onSurfaceVariant,
            marginTop: 10,
          },
          // anything within ``
          inlineCode: {
            backgroundColor: '#333333',
            borderRadius: 3,
            borderWidth: 1,
            fontFamily: Platform.OS === 'ios' ? 'Courier' : 'Monospace',
            fontWeight: 'bold',
            paddingHorizontal: 2,
          },
          text: {
            color: theme.colors.onSurface,
            fontSize: textSize ?? 16,
          },
          autolink: {
            color: theme.colors.primary,
          },
          listItemNumber: {
            color: theme.colors.onSurface,
          },
          view: {
            width: '100%',
            padding: 0,
            margin: 0,
          },
        }}>
        {children}
      </Markdown>
    </View>
  );
};
