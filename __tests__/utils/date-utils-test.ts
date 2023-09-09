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
        `"10 hours"`,
      );
    });

    test('getUserFriendlyPostDate() with date 10 days ago returns correctly', () => {
      const expectedNow = DateTime.local(2023, 6, 21, 23, 0, 0);
      Settings.now = () => expectedNow.toMillis();
      const fakeDate = DateTime.local(2023, 6, 12, 23, 0, 0);
      const iso = fakeDate.toISO() ?? '';
      expect(DateUtils.getUserFriendlyPostDate(iso)).toMatchInlineSnapshot(
        `"8 days"`,
      );
    });

    test('getUserFriendlyPostDate() with date 1 year ago returns correctly', () => {
      const expectedNow = DateTime.local(2023, 6, 11, 23, 0, 0);
      Settings.now = () => expectedNow.toMillis();
      const fakeDate = new Date('6/1/2022');
      const iso = fakeDate.toISOString();
      expect(DateUtils.getUserFriendlyPostDate(iso)).toMatchInlineSnapshot(
        `"1 year"`,
      );
    });
  });

  describe('getSingularOrPluralPhrase()', () => {
    test('getSingularOrPluralPhrase() with 0 returns plural phrase', () => {
      expect(
        DateUtils.getSingularOrPluralPhrase(0, 'hour', ' ago'),
      ).toMatchInlineSnapshot(`"0 hours ago"`);
    });
    test('getSingularOrPluralPhrase() with 1 returns singular phrase', () => {
      expect(
        DateUtils.getSingularOrPluralPhrase(1, 'hour', ' ago'),
      ).toMatchInlineSnapshot(`"1 hour ago"`);
    });
    test('getSingularOrPluralPhrase() with 4 returns plural phrase', () => {
      expect(
        DateUtils.getSingularOrPluralPhrase(4, 'hour', ' ago'),
      ).toMatchInlineSnapshot(`"4 hours ago"`);
    });

    test('getSingularOrPluralPhrase() with thousands and a predicate plural phrase', () => {
      expect(
        DateUtils.getSingularOrPluralPhrase(412000, 'Comment'),
      ).toMatchInlineSnapshot(`"412000 Comments"`);
    });
  });
});
