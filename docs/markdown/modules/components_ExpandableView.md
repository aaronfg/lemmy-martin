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

Type for the [ExpandableView](components_ExpandableView.md#expandableview) events/props.

Used for type safety when using a React ref

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `close` | () => `void` | Collapses the view, hiding the `contentView` |
| `collapsed` | `boolean` | `true` if the view `contentView` is collapsed |
| `open` | () => `void` | Uncollapses the view, showing the `contentView` |

## Functions

### ExpandableView

▸ **ExpandableView**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Simple accordian style expanding view that shows a clickable
view that reveals another view when clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`IExpandableViewProps`](../interfaces/components_ExpandableView.IExpandableViewProps.md) & `RefAttributes`<[`ExpandableViewType`](components_ExpandableView.md#expandableviewtype)\> | An [IExpandableViewProps](../interfaces/components_ExpandableView.IExpandableViewProps.md) instance |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>
