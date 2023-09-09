[LemmyMartin - v0.0.1](../README.md) / redux/listenerMiddleware

# Module: redux/listenerMiddleware

## Table of contents

### Type Aliases

- [AppStartListening](redux_listenerMiddleware.md#appstartlistening)

### Variables

- [appListenerMiddleware](redux_listenerMiddleware.md#applistenermiddleware)

### Functions

- [addAppListener](redux_listenerMiddleware.md#addapplistener)
- [startAppListening](redux_listenerMiddleware.md#startapplistening)

## Type Aliases

### AppStartListening

Ƭ **AppStartListening**: `TypedStartListening`<[`RootState`](redux_store.md#rootstate), [`AppDispatch`](redux_store.md#appdispatch)\>

## Variables

### appListenerMiddleware

• `Const` **appListenerMiddleware**: `ListenerMiddlewareInstance`<`unknown`, `ThunkDispatch`<`unknown`, `unknown`, `AnyAction`\>, `unknown`\>

Listener middleware related to the `settings` feature

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

Properly typed `startListening` for our listener middleware

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

Properly typed `startListening` for our listener middleware

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

Properly typed `startListening` for our listener middleware

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

Properly typed `startListening` for our listener middleware

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

Properly typed `startListening` for our listener middleware

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
