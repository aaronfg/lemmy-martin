import React from 'react';
import Markdown from 'react-native-markdown-package';
import { MD3Theme } from 'react-native-paper';

/**
 * Text component for rendering Markdown
 * @param props The RN Paper theme that is used
 * to style text and links
 */
export const TextMarkdown = (props: {
  theme: MD3Theme;
  textSize?: number;
  children: React.ReactNode;
}): JSX.Element => {
  const { theme, children, textSize } = props;
  return (
    <Markdown
      styles={{
        paragraph: {
          fontSize: 20,
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
