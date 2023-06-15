[LemmyMartin - v0.0.1](../README.md) / [features/lemmy/types](../modules/features_lemmy_types.md) / ILemmyState

# Interface: ILemmyState

[features/lemmy/types](../modules/features_lemmy_types.md).ILemmyState

The descriptor for the `lemmy` slice of our redux store

## Table of contents

### Properties

- [error](features_lemmy_types.ILemmyState.md#error)
- [loading](features_lemmy_types.ILemmyState.md#loading)
- [loginError](features_lemmy_types.ILemmyState.md#loginerror)
- [loginResponse](features_lemmy_types.ILemmyState.md#loginresponse)

## Properties

### error

• `Optional` **error**: [`IError`](types.IError.md)

Error object for any of the API interactions

___

### loading

• **loading**: `boolean`

`true` if we're loading/sending data

___

### loginError

• `Optional` **loginError**: [`IError`](types.IError.md)

___

### loginResponse

• `Optional` **loginResponse**: `LoginResponse`

The response from a successful login
