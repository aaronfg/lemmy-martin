[LemmyMartin - v0.0.1](../README.md) / features/settings/middleware

# Module: features/settings/middleware

## Table of contents

### Variables

- [settingsListenerMiddleware](features_settings_middleware.md#settingslistenermiddleware)

### Functions

- [addAppListener](features_settings_middleware.md#addapplistener)
- [startAppListening](features_settings_middleware.md#startapplistening)

## Variables

### settingsListenerMiddleware

• `Const` **settingsListenerMiddleware**: `ListenerMiddlewareInstance`<`unknown`, `ThunkDispatch`<`unknown`, `unknown`, `AnyAction`\>, `unknown`\>

## Functions

### addAppListener

▸ **addAppListener**<`MA`, `LP`\>(`options`): `Object`

Accepts a "listener predicate" that is also a TS type predicate for the action

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MA` | extends `AnyAction`<`MA`\> |
| `LP` | extends `ListenerPredicate`<`MA`, `Object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`ListenerPredicateGuardedActionType`<`LP`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate` | `LP` |
| `options.type?` | `undefined` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `ListenerEntry`<`Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>\> |
| `type` | ``"listenerMiddleware/add"`` |

▸ **addAppListener**<`C`\>(`options`): `Object`

Accepts an RTK action creator, like `incrementByAmount`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `TypedActionCreator`<`any`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator` | `C` |
| `options.effect` | `ListenerEffect`<`ReturnType`<`C`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate?` | `undefined` |
| `options.type?` | `undefined` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `ListenerEntry`<`Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>\> |
| `type` | ``"listenerMiddleware/add"`` |

▸ **addAppListener**<`T`\>(`options`): `Object`

Accepts a specific action type string

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`Action`<`T`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate?` | `undefined` |
| `options.type` | `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `ListenerEntry`<`Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>\> |
| `type` | ``"listenerMiddleware/add"`` |

▸ **addAppListener**<`MA`, `M`\>(`options`): `Object`

Accepts an RTK matcher function, such as `incrementByAmount.match`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MA` | extends `AnyAction`<`MA`\> |
| `M` | extends `MatchFunction`<`MA`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`GuardedType`<`M`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher` | `M` |
| `options.predicate?` | `undefined` |
| `options.type?` | `undefined` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `ListenerEntry`<`Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>\> |
| `type` | ``"listenerMiddleware/add"`` |

▸ **addAppListener**<`LP`\>(`options`): `Object`

Accepts a "listener predicate" that just returns a boolean, no type assertion

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LP` | extends `AnyListenerPredicate`<`Object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`AnyAction`, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate` | `LP` |
| `options.type?` | `undefined` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `ListenerEntry`<`Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>\> |
| `type` | ``"listenerMiddleware/add"`` |

___

### startAppListening

▸ **startAppListening**<`MA`, `LP`\>(`options`): `UnsubscribeListener`

Accepts a "listener predicate" that is also a TS type predicate for the action

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MA` | extends `AnyAction`<`MA`\> |
| `LP` | extends `ListenerPredicate`<`MA`, `Object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`ListenerPredicateGuardedActionType`<`LP`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate` | `LP` |
| `options.type?` | `undefined` |

#### Returns

`UnsubscribeListener`

▸ **startAppListening**<`C`\>(`options`): `UnsubscribeListener`

Accepts an RTK action creator, like `incrementByAmount`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `TypedActionCreator`<`any`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator` | `C` |
| `options.effect` | `ListenerEffect`<`ReturnType`<`C`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate?` | `undefined` |
| `options.type?` | `undefined` |

#### Returns

`UnsubscribeListener`

▸ **startAppListening**<`T`\>(`options`): `UnsubscribeListener`

Accepts a specific action type string

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`Action`<`T`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate?` | `undefined` |
| `options.type` | `T` |

#### Returns

`UnsubscribeListener`

▸ **startAppListening**<`MA`, `M`\>(`options`): `UnsubscribeListener`

Accepts an RTK matcher function, such as `incrementByAmount.match`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MA` | extends `AnyAction`<`MA`\> |
| `M` | extends `MatchFunction`<`MA`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`GuardedType`<`M`\>, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher` | `M` |
| `options.predicate?` | `undefined` |
| `options.type?` | `undefined` |

#### Returns

`UnsubscribeListener`

▸ **startAppListening**<`LP`\>(`options`): `UnsubscribeListener`

Accepts a "listener predicate" that just returns a boolean, no type assertion

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LP` | extends `AnyListenerPredicate`<`Object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.actionCreator?` | `undefined` |
| `options.effect` | `ListenerEffect`<`AnyAction`, `Object`, (`action`: `Action`<``"listenerMiddleware/add"``\>) => `UnsubscribeListener` & `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>, `unknown`\> |
| `options.matcher?` | `undefined` |
| `options.predicate` | `LP` |
| `options.type?` | `undefined` |

#### Returns

`UnsubscribeListener`
