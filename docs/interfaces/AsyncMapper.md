[**fluent-iterable v1.0.0**](../README.md) • **Docs**

***

[fluent-iterable v1.0.0](../README.md) / AsyncMapper

# Interface: AsyncMapper()\<T, R\>

Represents a asynchronous mapping operation from type `T` to type `R`.<br>
  Example: `const idToUser: AsyncMapper<number, User> = async id => await getUser(id)`<br>
  Note: in the example above, `getUser` function is already an [[AsyncMapper]].

## Typeparam

T The source type.

## Typeparam

R The destination type.

## Type Parameters

• **T**

• **R**

> **AsyncMapper**(`item`): `Promise`\<`R`\>

Represents a asynchronous mapping operation from type `T` to type `R`.<br>
  Example: `const idToUser: AsyncMapper<number, User> = async id => await getUser(id)`<br>
  Note: in the example above, `getUser` function is already an [[AsyncMapper]].

## Parameters

• **item**: `T`

The item to map.

## Returns

`Promise`\<`R`\>

A promise of the map of `item`.

## Typeparam

T The source type.

## Typeparam

R The destination type.
