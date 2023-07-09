import Color from 'color';
import { Linking, StyleSheet, View } from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import { IParsedComment } from '../features/lemmy/types';
import { UnicodeText } from '../types';
import { DateUtils } from '../utils/DateUtils';
import { TextMarkdown } from './TextMarkdown';

export const ListItemComment = (props: {
  parsedComment: IParsedComment;
}): JSX.Element => {
  const { parsedComment } = props;
  const { commentView, children } = parsedComment;
  const theme = useTheme();
  const isRootComment = parsedComment.commentView.counts.child_count === 0;

  const styles = createStyleSheet(theme);
  return (
    <View style={styles.container}>
      <View style={styles.creatorContainr}>
        <Text style={styles.creator}>
          {commentView.creator.display_name ?? commentView.creator.name}
        </Text>
        <Text>
          {UnicodeText.Bullet}{' '}
          {DateUtils.getUserFriendlyPostDate(
            commentView.comment.updated ?? commentView.comment.published,
          )}
          {' ' + parsedComment.children.length} children
        </Text>
      </View>
      <TextMarkdown theme={theme} onLink={async url => Linking.openURL(url)}>
        {commentView.comment.content}
      </TextMarkdown>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: theme.colors.surface,
    },
    creator: {
      fontWeight: 'bold',
      color: Color(theme.colors.primary).lighten(0.1).hex(),
      marginRight: 4,
    },
    creatorContainr: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: -5,
    },
  });
};
