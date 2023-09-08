import React from 'react';
import { Platform } from 'react-native';
import Markdown from 'react-native-markdown-package';
import { MD3Theme } from 'react-native-paper';

/**
 * Text component for rendering Markdown
 * @param props The RN Paper theme that is used
 * to style text and links
 */
export const TextMarkdown = (props: {
  theme: MD3Theme;
  onLink?: (url: string) => Promise<void>;
  textSize?: number;
  children: React.ReactNode;
}): JSX.Element => {
  const { theme, children, textSize, onLink } = props;
  return (
    <Markdown
      onLink={onLink}
      styles={{
        paragraph: {
          fontSize: 16,
        },
        codeBlock: {
          fontFamily: Platform.OS === 'ios' ? 'Courier' : 'Monospace',
          fontWeight: '500',
          backgroundColor: '#999999',
        },
        blockQuoteText: {
          color: 'red',
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
        },
      }}>
      {children}
    </Markdown>
  );
};
