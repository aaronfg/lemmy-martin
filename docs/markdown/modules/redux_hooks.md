[LemmyMartin - v0.0.1](../README.md) / redux/hooks

# Module: redux/hooks

## Table of contents

### Functions

- [useAppDispatch](redux_hooks.md#useappdispatch)
- [useAppSelector](redux_hooks.md#useappselector)

## Functions

### useAppDispatch

▸ **useAppDispatch**(): `ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>

#### Returns

`ThunkDispatch`<`Object`, `undefined`, `AnyAction`\> & `Dispatch`<`AnyAction`\>

___

### useAppSelector

▸ **useAppSelector**<`TSelected`\>(`selector`, `equalityFn?`): `TSelected`

#### Type parameters

| Name |
| :------ |
| `TSelected` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: `Object`) => `TSelected` |
| `equalityFn?` | `EqualityFn`<`NoInfer`<`TSelected`\>\> |

#### Returns

`TSelected`
