[LemmyMartin - v0.0.1](../README.md) / features/settings

# Module: features/settings

## Table of contents

### Variables

- [INITIAL\_SETTINGS\_STATE](features_settings.md#initial_settings_state)

### Functions

- [settingsReducer](features_settings.md#settingsreducer)

## Variables

### INITIAL\_SETTINGS\_STATE

• `Const` **INITIAL\_SETTINGS\_STATE**: [`ISettingsState`](../interfaces/features_settings_types.ISettingsState.md)

The initial state for the `settings` slice of our redux state

## Functions

### settingsReducer

▸ **settingsReducer**(`state`, `action`): [`ISettingsState`](../interfaces/features_settings_types.ISettingsState.md)

The reducer for the `settiings` slice of our redux state

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `undefined` \| [`ISettingsState`](../interfaces/features_settings_types.ISettingsState.md) |
| `action` | `AnyAction` |

#### Returns

[`ISettingsState`](../interfaces/features_settings_types.ISettingsState.md)
