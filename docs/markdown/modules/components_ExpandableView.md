[LemmyMartin - v0.0.1](../README.md) / components/ExpandableView

# Module: components/ExpandableView

## Table of contents

### Interfaces

- [IExpandableViewProps](../interfaces/components_ExpandableView.IExpandableViewProps.md)

### Type Aliases

- [ExpandableViewType](components_ExpandableView.md#expandableviewtype)

### Functions

- [ExpandableView](components_ExpandableView.md#expandableview)

## Type Aliases

### ExpandableViewType

Ƭ **ExpandableViewType**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | () => `void` | Collapses the view, hiding the `contentView` |
| `collapsed` | `boolean` | `true` if the view `contentView` is collapsed |
| `open` | () => `void` | Uncollapses the view, showing the `contentView` |

## Functions

### ExpandableView

▸ **ExpandableView**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IExpandableViewProps`](../interfaces/components_ExpandableView.IExpandableViewProps.md) & `RefAttributes`<[`ExpandableViewType`](components_ExpandableView.md#expandableviewtype)\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>
