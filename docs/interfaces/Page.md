[**fluent-iterable v1.0.0**](../README.md) • **Docs**

***

[fluent-iterable v1.0.0](../README.md) / Page

# Interface: Page\<T, TToken\>

Represents a page of a paginated resource.

## Typeparam

T The type of the elements of the page.

## Typeparam

TToken The type of the next page token associated to the page.

## Type Parameters

• **T**

• **TToken**

## Properties

### nextPageToken?

> `optional` **nextPageToken**: `TToken`

The next page token associated to the page.

***

### results

> **results**: `T`[]

The elements of the page.
