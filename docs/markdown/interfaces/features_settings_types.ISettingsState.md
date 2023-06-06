[LemmyMartin - v0.0.1](../README.md) / [features/settings/types](../modules/features_settings_types.md) / ISettingsState

# Interface: ISettingsState

[features/settings/types](../modules/features_settings_types.md).ISettingsState

Descriptor for the `settings` slice of our redux store

## Table of contents

### Properties

- [accounts](features_settings_types.ISettingsState.md#accounts)
- [currentAccount](features_settings_types.ISettingsState.md#currentaccount)
- [feed](features_settings_types.ISettingsState.md#feed)

## Properties

### accounts

• **accounts**: [`IAccount`](features_settings_types.IAccount.md)[]

Lemmy accounts the user has signed in with

___

### currentAccount

• `Optional` **currentAccount**: [`IAccount`](features_settings_types.IAccount.md)

Currently selected account

___

### feed

• **feed**: [`IFeedSettings`](features_settings_types.IFeedSettings.md)

Settings for the feed screen / data
