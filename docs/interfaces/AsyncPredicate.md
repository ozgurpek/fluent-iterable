[**fluent-iterable v1.0.0**](../README.md) • **Docs**

***

[fluent-iterable v1.0.0](../README.md) / AsyncPredicate

# Interface: AsyncPredicate()\<T\>

Represents an asynchronous predicate on type `T`.<br>
  Example: `const userExists: AsyncPredicate<User> = async user => !!(await getUser(user.id))`

## Typeparam

T The type the predicate is defined on.

## Type Parameters

• **T**

> **AsyncPredicate**(`item`): `Promise`\<`boolean`\>

Represents an asynchronous predicate on type `T`.<br>
  Example: `const userExists: AsyncPredicate<User> = async user => !!(await getUser(user.id))`

## Parameters

• **item**: `T`

The item evaluated.

## Returns

`Promise`\<`boolean`\>

A promise of `true` if the predicate passed on `item`; otherwise a promise of `false`.

## Typeparam

T The type the predicate is defined on.
