import Color from 'color';
import { CommentView } from 'lemmy-js-client';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import { UnicodeText } from '../types';
import { DateUtils } from '../utils/DateUtils';
import { TextMarkdown } from './TextMarkdown';

export const ListItemComment = (props: {
  commentView: CommentView;
}): JSX.Element => {
  const { commentView } = props;
  const theme = useTheme();
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
        </Text>
      </View>
      <TextMarkdown theme={theme}>{commentView.comment.content}</TextMarkdown>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    creator: {
      fontWeight: 'bold',
      color: Color(theme.colors.primary).lighten(0.1).hex(),
      marginRight: 4,
    },
    creatorContainr: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
