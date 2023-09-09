[LemmyMartin - v0.0.1](../README.md) / [utils/DateUtils](../modules/utils_DateUtils.md) / DateUtils

# Class: DateUtils

[utils/DateUtils](../modules/utils_DateUtils.md).DateUtils

Class with static helper methods for Date-related logic

## Table of contents

### Constructors

- [constructor](utils_DateUtils.DateUtils.md#constructor)

### Methods

- [getSingularOrPluralPhrase](utils_DateUtils.DateUtils.md#getsingularorpluralphrase)
- [getUserFriendlyPostDate](utils_DateUtils.DateUtils.md#getuserfriendlypostdate)

## Constructors

### constructor

• **new DateUtils**()

## Methods

### getSingularOrPluralPhrase

▸ `Static` **getSingularOrPluralPhrase**(`dateNum`, `singularString`, `predicate?`): `string`

Returns a date phrase based on a date total (be it days, months, hours, etc),
a string to denote what the `dateNum` represents in singular form, and an
optional string to tack onto the end as a predicate.

**Example:**

```ts
// "2 hours ago"
const phrase = DateUtils.getSingularOrPluralPhrase(2, 'hour', 'ago');

// "1 year ago"
const phrase = DateUtils.getSingularOrPluralPhrase(1, 'year', 'ago');
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `dateNum` | `number` | `undefined` | The number |
| `singularString` | `string` | `undefined` | Description of what the `dateNum` represents in singular form (i.e. 'hour') |
| `predicate` | `string` | `''` | Optional string to be appended to the final result |

#### Returns

`string`

___

### getUserFriendlyPostDate

▸ `Static` **getUserFriendlyPostDate**(`dateString`): `string`

Returns the date of a Post or Comment in a shorter format such as
`"2 hrs"` or `4 months` for use in list items on Posts and Comments

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateString` | `string` | the utc date string to format |

#### Returns

`string`
