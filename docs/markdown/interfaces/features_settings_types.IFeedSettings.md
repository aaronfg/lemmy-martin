[LemmyMartin - v0.0.1](../README.md) / [features/settings/types](../modules/features_settings_types.md) / IFeedSettings

# Interface: IFeedSettings

[features/settings/types](../modules/features_settings_types.md).IFeedSettings

Descriptor for the settings related to the feed
screen / data.

## Table of contents

### Properties

- [feedSortType](features_settings_types.IFeedSettings.md#feedsorttype)
- [page](features_settings_types.IFeedSettings.md#page)
- [source](features_settings_types.IFeedSettings.md#source)
- [type](features_settings_types.IFeedSettings.md#type)

## Properties

### feedSortType

• **feedSortType**: `SortType`

The sort type for the feed

___

### page

• **page**: `number`

Current page of data to show

___

### source

• **source**: [`FeedSource`](../enums/features_settings_types.FeedSource.md)

The source of this feed.

This is about whether the feed is pulling from the local instance or
all Lemmy instances

___

### type

• **type**: `ListingType`

For filtering the feed list to just items from subscribed commnites vs all, etc
