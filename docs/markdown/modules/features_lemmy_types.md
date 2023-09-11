[LemmyMartin - v0.0.1](../README.md) / features/lemmy/types

# Module: features/lemmy/types

## Table of contents

### Enumerations

- [LemmyAPIMethods](../enums/features_lemmy_types.LemmyAPIMethods.md)
- [LemmyAPIPaths](../enums/features_lemmy_types.LemmyAPIPaths.md)
- [LemmyErrorMsgs](../enums/features_lemmy_types.LemmyErrorMsgs.md)
- [LemmyLoginErrors](../enums/features_lemmy_types.LemmyLoginErrors.md)

### Interfaces

- [ILemmyCommentItemData](../interfaces/features_lemmy_types.ILemmyCommentItemData.md)
- [ILemmyInstance](../interfaces/features_lemmy_types.ILemmyInstance.md)
- [ILemmyLoginError](../interfaces/features_lemmy_types.ILemmyLoginError.md)
- [ILemmyLoginErrorResponse](../interfaces/features_lemmy_types.ILemmyLoginErrorResponse.md)
- [ILemmyLoginParams](../interfaces/features_lemmy_types.ILemmyLoginParams.md)
- [ILemmyState](../interfaces/features_lemmy_types.ILemmyState.md)
- [IParsedComment](../interfaces/features_lemmy_types.IParsedComment.md)

### Type Aliases

- [SortTypeValue](features_lemmy_types.md#sorttypevalue)

### Variables

- [LEMMY\_API\_PATH](features_lemmy_types.md#lemmy_api_path)
- [LemmyNestedItemColors](features_lemmy_types.md#lemmynesteditemcolors)
- [SortTypeValues](features_lemmy_types.md#sorttypevalues)

## Type Aliases

### SortTypeValue

Ƭ **SortTypeValue**: typeof [`SortTypeValues`](features_lemmy_types.md#sorttypevalues)[`number`]

## Variables

### LEMMY\_API\_PATH

• `Const` **LEMMY\_API\_PATH**: ``"api/v3/"``

The path to the current LEmmy aPI

___

### LemmyNestedItemColors

• `Const` **LemmyNestedItemColors**: `string`[]

Colors to use on nested list items like comments

___

### SortTypeValues

• `Const` **SortTypeValues**: readonly [``"Active"``, ``"Hot"``, ``"New"``, ``"Old"``, ``"TopDay"``, ``"TopWeek"``, ``"TopMonth"``, ``"TopYear"``, ``"TopAll"``, ``"MostComments"``, ``"NewComments"``, ``"TopHour"``, ``"TopSixHour"``, ``"TopTwelveHour"``]

Valid sort types
