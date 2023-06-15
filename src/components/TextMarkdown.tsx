import React from 'react';
import Markdown from 'react-native-markdown-package';
import { MD3Theme } from 'react-native-paper';

export const TextMarkdown = (props: {
  theme: MD3Theme;
  children: React.ReactNode;
}): JSX.Element => {
  const { theme, children } = props;
  return (
    <Markdown
      styles={{
        text: {
          color: theme.colors.onSurface,
        },
        autolink: {
          color: theme.colors.primary,
        },
        listItemNumber: {
          color: theme.colors.onSurface,
        },
        view: {
          width: '90%',
        },
      }}>
      {children}
    </Markdown>
  );
};
