import { ListCommunities } from 'lemmy-js-client';
import { APIUtils } from '../../src/utils/APIUtils';
describe('APIUtils Tests', () => {
  describe('getQueryParamsFromObj()', () => {
    test('getQueryParamsFromObj with object returns correct string', () => {
      const listParams: ListCommunities = {
        page: 2,
        sort: 'Hot',
      };
      expect(APIUtils.getQueryParamsFromObj(listParams)).toMatchInlineSnapshot(
        `"page=2&sort=Hot"`,
      );
    });
  });
});
