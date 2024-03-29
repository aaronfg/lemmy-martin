import {
  mockTestAccount1,
  mockTestAccount1DifferentToken,
  mockTestAccount2,
  mockTestAccount3,
} from '../../__mocks__/accounts';
import {
  mockCommunityLocal,
  mockCommunityLongDescription,
  mockCommunityLongDescriptionNoNewLines,
  mockCommunityNotLocal,
} from '../../__mocks__/communities';
import { LemmyLoginErrors } from '../../src/features/lemmy/types';
import { IAccount } from '../../src/features/settings/types';
import { LemmyUtils } from '../../src/utils/LemmyUtils';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('LemmyUtils Tests', () => {
  describe('isNewAccount()', () => {
    test('isNewAccount() with new account returns true', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      expect(LemmyUtils.isNewAccount(mockTestAccount3, accounts)).toEqual(true);
    });

    test('isNewAccount() with existing account with different token returns false', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      expect(
        LemmyUtils.isNewAccount(mockTestAccount1DifferentToken, accounts),
      ).toEqual(false);
    });

    test('isNewAccount() with existing account returns false', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      expect(LemmyUtils.isNewAccount(mockTestAccount2, accounts)).toEqual(
        false,
      );
    });
  });

  describe('getUpdatedAccounts()', () => {
    test('getUpdatedAccounts() with new account returns new array', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      const updatedAccounts = LemmyUtils.getUpdatedAccounts(
        {
          instance: 'asdasd',
          password: 'ddd',
          token: '23434234',
          username: 'asdlkjdaklsdjakld',
        },
        accounts,
      );

      expect(updatedAccounts.length).toEqual(3);
    });

    test('getUpdatedAccounts() with same account returns existing array', () => {
      const accounts: Set<IAccount> = new Set([
        mockTestAccount1,
        mockTestAccount2,
      ]);

      const updatedAccounts = LemmyUtils.getUpdatedAccounts(
        mockTestAccount1,
        accounts,
      );

      expect(updatedAccounts).toEqual(Array.from(accounts));
    });

    test('getUpdatedAccounts() with same account with different token returns updated array', () => {
      const accountsArray = [
        mockTestAccount1,
        mockTestAccount2,
        mockTestAccount3,
      ];
      const accounts: Set<IAccount> = new Set(accountsArray);

      const originalToken = accountsArray[0].token;

      const updatedAccounts = LemmyUtils.getUpdatedAccounts(
        mockTestAccount1DifferentToken,
        accounts,
      );

      const newToken = updatedAccounts[0].token;

      expect(originalToken === newToken).toEqual(false);
      expect(newToken).toEqual(mockTestAccount1DifferentToken.token);
    });
  });

  describe('isDescriptionLong()', () => {
    test('isDescriptionLong() with long string returns true', () => {
      expect(
        LemmyUtils.isDescriptionLong(mockCommunityLongDescription),
      ).toEqual(true);
    });

    test('isDescriptionLong() with short string returns false', () => {
      expect(
        LemmyUtils.isDescriptionLong('This is a short description'),
      ).toEqual(false);
    });
  });

  describe('getDescriptionHasMultiParagraphs()', () => {
    test('getDescriptionHasMultiParagraphs() with multi-paragraph desc returns true', () => {
      expect(
        LemmyUtils.getDescriptionHasMultiParagraphs(
          mockCommunityLongDescription,
        ),
      ).toEqual(true);
    });
    test('getDescriptionHasMultiParagraphs() with no-paragraph desc returns false', () => {
      expect(
        LemmyUtils.getDescriptionHasMultiParagraphs(
          'This is a sentence with no newline breaks',
        ),
      ).toEqual(false);
    });
  });

  describe('getDescriptionFirstParagraph()', () => {
    test('getDescriptionFirstParagraph() returns correct paragraph', () => {
      expect(
        LemmyUtils.getDescriptionFirstParagraph(mockCommunityLongDescription),
      ).toMatchInlineSnapshot(
        `""A loosely moderated place to ask open ended questions"`,
      );
    });

    test('getDescriptionFirstParagraph() returns correct paragraph for non-paragraph desc', () => {
      const desc = 'This is a sentence with no newline breaks';
      expect(LemmyUtils.getDescriptionFirstParagraph(desc)).toEqual(desc);
    });
  });

  describe('getShortDescription()', () => {
    test('getShortDescription() for multi-paragraph returns first paragraph', () => {
      expect(
        LemmyUtils.getShortDescription(mockCommunityLongDescription),
      ).toMatchInlineSnapshot(
        `""A loosely moderated place to ask open ended questions"`,
      );
    });

    test('getShortDescription() for non-multi-paragraph short desc returns first paragraph', () => {
      const desc = 'This is a short sentence with no newline breaks';
      expect(LemmyUtils.getShortDescription(desc)).toEqual(desc);
    });

    test('getShortDescription() for non-multi-paragraph long desc returns correct substring', () => {
      expect(
        LemmyUtils.getShortDescription(mockCommunityLongDescriptionNoNewLines),
      ).toMatchInlineSnapshot(
        `""A loosely moderated place to ask open ended questions  If your post is  1. Open ended  2. Not offensive 3. Not regarding lemmy support (c/lemmy_support) 4. not ad nauseam inducing (please make sure i..."`,
      );
    });
  });

  describe('getFormattedNumber()', () => {
    test('getFormattedNumber() with number < 1000 returns same number as string', () => {
      expect(LemmyUtils.getFormattedNumber(245)).toEqual('245');
    });

    test('getFormattedNumber() with number > 1000 returns correct string', () => {
      expect(LemmyUtils.getFormattedNumber(2450)).toMatchInlineSnapshot(
        `"2.45K"`,
      );
    });
    test('getFormattedNumber() with number === 1000 returns correct string', () => {
      expect(LemmyUtils.getFormattedNumber(1000)).toMatchInlineSnapshot(`"1K"`);
    });
    test('getFormattedNumber() with number over a million returns correct string', () => {
      expect(LemmyUtils.getFormattedNumber(1200000)).toMatchInlineSnapshot(
        `"1.2M"`,
      );
    });
  });

  describe('createILemmyInstance()', () => {
    test('createILemmyInstance() with valid instance url returns properly', () => {
      expect(LemmyUtils.createILemmyInstance('https://testInstance.com'))
        .toMatchInlineSnapshot(`
        {
          "href": "https://testinstance.com/",
          "name": "testinstance.com",
        }
      `);
    });
  });

  describe('getFriendlyErrorMsg()', () => {
    test('getFriendlyErrorMsg() with known error msgs returns correctly', () => {
      expect(
        LemmyUtils.getFriendlyErrorMsg(LemmyLoginErrors.PasswordIncorrect),
      ).toMatchInlineSnapshot(`"Incorrect Password"`);

      expect(
        LemmyUtils.getFriendlyErrorMsg(LemmyLoginErrors.UserOrPassInvalid),
      ).toMatchInlineSnapshot(
        `"There was a problem with your username or password. Please verify them and try again."`,
      );
    });

    test('getFriendlyErrorMsg() with unknown error message returns the same error', () => {
      expect(
        LemmyUtils.getFriendlyErrorMsg(
          'This should be exactly what is returned',
        ),
      ).toMatchInlineSnapshot(`"This should be exactly what is returned"`);
    });
  });

  describe('getPostUrlShort()', () => {
    test('getPostUrlShort() returns proper hostname', () => {
      expect(
        LemmyUtils.getPostUrlShort('https://www.somestuff.com'),
      ).toMatchInlineSnapshot(`"www.somestuff.com"`);
    });
  });

  describe('getPostCommunityForItem()', () => {
    test('getPostCommunityForItem() with local community returns just the community name', () => {
      expect(
        LemmyUtils.getPostCommunityForItem(mockCommunityLocal),
      ).toMatchInlineSnapshot(`"personalfinance"`);
    });

    test('getPostCommunityForItem() with non-local community returns the fully qualified community name', () => {
      expect(
        LemmyUtils.getPostCommunityForItem(mockCommunityNotLocal),
      ).toMatchInlineSnapshot(`"Music@narwhal.city"`);
    });
  });

  describe('getCommentBorderColor()', () => {
    test('getCommentBorderColor() with valid depth returns correct color', () => {
      expect(LemmyUtils.getCommentBorderColor(0)).toMatchInlineSnapshot(
        `"#307aba"`,
      );

      expect(LemmyUtils.getCommentBorderColor(1)).toMatchInlineSnapshot(
        `"#b82cd1"`,
      );
      expect(LemmyUtils.getCommentBorderColor(2)).toMatchInlineSnapshot(
        `"#fcba03"`,
      );
      expect(LemmyUtils.getCommentBorderColor(3)).toMatchInlineSnapshot(
        `"#28c928"`,
      );
      expect(LemmyUtils.getCommentBorderColor(4)).toMatchInlineSnapshot(
        `"#ba203c"`,
      );
      expect(LemmyUtils.getCommentBorderColor(5)).toMatchInlineSnapshot(
        `"#f8fc0d"`,
      );
    });
    test('getCommentBorderColor() with depth < 0 returns index 0 color', () => {
      expect(LemmyUtils.getCommentBorderColor(-1)).toMatchInlineSnapshot(
        `"#307aba"`,
      );
    });

    test('getCommentBorderColor() with depth > LemmyNestedItemColors.length returns index 0 color', () => {
      expect(LemmyUtils.getCommentBorderColor(1900)).toMatchInlineSnapshot(
        `"#307aba"`,
      );
    });
  });
});
