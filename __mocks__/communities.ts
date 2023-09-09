import { Community } from 'lemmy-js-client';

/** A mocked community description that is very long with multiple newlines*/
export const mockCommunityLongDescription =
  '"A loosely moderated place to ask open ended questions\n\nIf your post is\n\n1. Open ended \n2. Not offensive\n3. Not regarding lemmy support (c/lemmy_support)\n4. not ad nauseam inducing (please make sure its a question that would be new to most members)\n\nit’s welcome here!"';

/** A mocked community desription that has no newline charcters in it */
export const mockCommunityLongDescriptionNoNewLines =
  '"A loosely moderated place to ask open ended questions  If your post is  1. Open ended  2. Not offensive 3. Not regarding lemmy support (c/lemmy_support) 4. not ad nauseam inducing (please make sure its a question that would be new to most members)  it’s welcome here!"';

/** A mocked community that is  local to the current instance */
export const mockCommunityLocal: Community = {
  instance_id: 311,
  posting_restricted_to_mods: false,
  actor_id: 'https://sopuli.xyz/c/personalfinance',
  deleted: false,
  hidden: false,
  nsfw: false,
  published: '2023-09-06T08:58:34.595889',
  local: true,
  id: 152264,
  removed: false,
  name: 'personalfinance',
  description:
    'US-centric community for content related to consumer retail banking, credit, &amp; investment.',
  title: 'Personal Finance',
};

/** A mocked community that is not local to the current instance */
export const mockCommunityNotLocal: Community = {
  instance_id: 199,
  posting_restricted_to_mods: false,
  actor_id: 'https://narwhal.city/communities/15',
  deleted: false,
  hidden: false,
  nsfw: false,
  published: '2023-09-08T16:52:20.824965',
  local: false,
  id: 155295,
  removed: false,
  name: 'Music',
  description:
    'Use this community to talk about music.\n\nSimilar communities:\n@musicnews@lemmy.ml',
  title: 'Music',
};
