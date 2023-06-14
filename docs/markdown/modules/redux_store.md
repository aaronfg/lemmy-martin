[LemmyMartin - v0.0.1](../README.md) / redux/store

# Module: redux/store

## Table of contents

### Type Aliases

- [AppDispatch](redux_store.md#appdispatch)
- [RootState](redux_store.md#rootstate)

### Variables

- [store](redux_store.md#store)

## Type Aliases

### AppDispatch

Ƭ **AppDispatch**: typeof `store.dispatch`

___

### RootState

Ƭ **RootState**: `ReturnType`<typeof `store.getState`\>

## Variables

### store

• `Const` **store**: `ToolkitStore`<`Object`, `AnyAction`, `MiddlewareArray`<[`ListenerMiddleware`<`unknown`, `ThunkDispatch`<`unknown`, `unknown`, `AnyAction`\>, `unknown`\>, `ThunkMiddleware`<`Object`, `AnyAction`, `undefined`\>, ...Middleware<Object, any, Dispatch<AnyAction\>\>[], `Middleware`<{}, `RootState`<{ `getCommunities`: `QueryDefinition`<`ListCommunities`, `BaseQueryFn`<`string` \| `FetchArgs`, `unknown`, `FetchBaseQueryError`, {}, `FetchBaseQueryMeta`\>, `never`, `CommunityView`[], ``"communitiesApi"``\>  }, `string`, ``"communitiesApi"``\>, `ThunkDispatch`<`any`, `any`, `AnyAction`\>\>]\>\>

Our redux store
