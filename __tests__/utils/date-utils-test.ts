import { DateTime, Settings } from 'luxon';
import { DateUtils } from '../../src/utils/DateUtils';
describe('DateUtils()', () => {
  describe('getUserFriendlyPostDate()', () => {
    test('getUserFriendlyPostDate() with date 10 hrs ago returns correctly', () => {
      const expectedNow = DateTime.local(2023, 6, 1, 10, 0, 0);
      Settings.now = () => expectedNow.toMillis();
      const fakeDate = new Date('6/1/2023');
      const iso = fakeDate.toISOString();
      expect(DateUtils.getUserFriendlyPostDate(iso)).toMatchInlineSnapshot(
        `"10 hours ago"`,
      );
    });

    test('getUserFriendlyPostDate() with date 10 days ago returns correctly', () => {
      const expectedNow = DateTime.local(2023, 6, 11, 23, 0, 0);
      Settings.now = () => expectedNow.toMillis();
      const fakeDate = new Date('6/1/2023');
      const iso = fakeDate.toISOString();
      expect(DateUtils.getUserFriendlyPostDate(iso)).toMatchInlineSnapshot(
        `"10 days ago"`,
      );
    });

    test('getUserFriendlyPostDate() with date 1 year ago returns correctly', () => {
      const expectedNow = DateTime.local(2023, 6, 11, 23, 0, 0);
      Settings.now = () => expectedNow.toMillis();
      const fakeDate = new Date('6/1/2022');
      const iso = fakeDate.toISOString();
      expect(DateUtils.getUserFriendlyPostDate(iso)).toMatchInlineSnapshot(
        `"1 year ago"`,
      );
    });
  });

  describe('getSingularOrPluralDuration()', () => {
    test('getSingularOrPluralDuration() with 0 returns plural phrase', () => {
      expect(
        DateUtils.getSingularOrPluralDuration(0, 'hour'),
      ).toMatchInlineSnapshot(`"0 hours ago"`);
    });
    test('getSingularOrPluralDuration() with 1 returns singular phrase', () => {
      expect(
        DateUtils.getSingularOrPluralDuration(1, 'hour'),
      ).toMatchInlineSnapshot(`"1 hour ago"`);
    });
    test('getSingularOrPluralDuration() with 4 returns plural phrase', () => {
      expect(
        DateUtils.getSingularOrPluralDuration(4, 'hour'),
      ).toMatchInlineSnapshot(`"4 hours ago"`);
    });
  });
});
