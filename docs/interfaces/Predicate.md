[**fluent-iterable v1.0.0**](../README.md) • **Docs**

***

[fluent-iterable v1.0.0](../README.md) / Predicate

# Interface: Predicate()\<T\>

Represents a predicate on type `T`.<br>
  Example: `const evenNumber: Predicate<number> = n => (n % 2) === 0;`

## Typeparam

T The type the predicate is defined on.

## Type Parameters

• **T**

> **Predicate**(`item`): `boolean`

Represents a predicate on type `T`.<br>
  Example: `const evenNumber: Predicate<number> = n => (n % 2) === 0;`

## Parameters

• **item**: `T`

The item evaluated.

## Returns

`boolean`

`true` if the predicate passed on `item`; otherwise `false`.

## Typeparam

T The type the predicate is defined on.
