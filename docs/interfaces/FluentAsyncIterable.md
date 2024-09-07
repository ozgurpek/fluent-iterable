[**fluent-iterable v1.0.0**](../README.md) • **Docs**

***

[fluent-iterable v1.0.0](../README.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable\<T\>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Typeparam

T The type of the items in the asynchronous iterable.

## Extends

- `AsyncIterable`\<`T`\>

## Type Parameters

• **T**

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`T`, `any`, `undefined`\>

#### Returns

`AsyncIterator`\<`T`, `any`, `undefined`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### all()

> **all**(`predicate`): `Promise`\<`boolean`\>

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

• **predicate**: [`Predicate`](Predicate.md)\<`T`\>

The condition checked for all elements in the iterable.

#### Returns

`Promise`\<`boolean`\>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

***

### allAsync()

> **allAsync**(`predicate`): `Promise`\<`boolean`\>

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters

• **predicate**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

The asynchronous condition checked for all elements in the iterable.

#### Returns

`Promise`\<`boolean`\>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

***

### any()

> **any**(`predicate`?): `Promise`\<`boolean`\>

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

• **predicate?**: [`Predicate`](Predicate.md)\<`T`\>

The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.

#### Returns

`Promise`\<`boolean`\>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

***

### anyAsync()

> **anyAsync**(`predicate`): `Promise`\<`boolean`\>

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters

• **predicate**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

The asynchronous condition checked for the elements in the iterable.

#### Returns

`Promise`\<`boolean`\>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

***

### append()

> **append**(`item`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Appends a value to the end of the iterable.

#### Parameters

• **item**: `T`

The item to be appended to the iterable.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] appended with the element.

***

### avg()

> **avg**(`mapper`?): `Promise`\<`number`\>

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper?**: [`Mapper`](Mapper.md)\<`T`, `number`\>

The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`number`\>

A promise of the average of the projected elements of the iterable.

***

### avgAsync()

> **avgAsync**(`mapper`): `Promise`\<`number`\>

Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `number`\>

The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`number`\>

A promise of the average of the projected elements of the iterable.

***

### concat()

> **concat**(...`iterables`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Concatenates specified iterables to the iterable.

#### Parameters

• ...**iterables**: `AsyncIterable`\<`T`\>[]

The iterables to concatenate.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the concatenated iterables.

***

### contains()

> **contains**(`item`): `Promise`\<`boolean`\>

Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

• **item**: `T`

The element to check.

#### Returns

`Promise`\<`boolean`\>

A promise of `true` if the specified element exists in the iterable, `false` otherwise.

***

### count()

> **count**(`predicate`?): `Promise`\<`number`\>

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **predicate?**: [`Predicate`](Predicate.md)\<`T`\>

The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.

#### Returns

`Promise`\<`number`\>

A promise of the number of elements matching the specified predicate.

***

### countAsync()

> **countAsync**(`predicate`): `Promise`\<`number`\>

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **predicate**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

The count will consider elements which match this asynchronous predicate.

#### Returns

`Promise`\<`number`\>

A promise of the number of elements matching the specified predicate.

***

### distinct()

> **distinct**\<`R`\>(`mapper`?): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.

#### Type Parameters

• **R**

#### Parameters

• **mapper?**: [`Mapper`](Mapper.md)\<`T`, `R`\>

The projection to use to determine element equality. Identity mapping is used if omitted.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the distinct elements.

#### Typeparam

R The type of the data the element equality is based on.

***

### distinctAsync()

> **distinctAsync**\<`R`\>(`mapper`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `R`\>

The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the distinct elements.

#### Typeparam

R The type of the data the element equality is based on.

***

### execute()

> **execute**(`action`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Translate an iterable into one which executes an action against each element before yield them.

#### Parameters

• **action**: [`Action`](Action.md)\<`T`\>

The action to execute against each element.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] with the action injected to it.

***

### executeAsync()

> **executeAsync**(`action`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Translate an iterable into one which executes an asynchronous action against each element before yield them.

#### Parameters

• **action**: [`AsyncAction`](AsyncAction.md)\<`T`\>

The asynchronous action to execute against each element.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] with the action injected to it.

***

### filter()

> **filter**(`predicate`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Filters the iterable of `T` based on a predicate.

#### Parameters

• **predicate**: [`Predicate`](Predicate.md)\<`T`\>

A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.

***

### filterAsync()

> **filterAsync**(`predicate`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Filters the iterable of `T` based on an asynchronous predicate.

#### Parameters

• **predicate**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.

***

### first()

> **first**(`predicate`?): `Promise`\<`undefined` \| `T`\>

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

• **predicate?**: [`Predicate`](Predicate.md)\<`T`\>

The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

***

### firstAsync()

> **firstAsync**(`predicate`): `Promise`\<`undefined` \| `T`\>

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

• **predicate**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

The first element is to be returned which matches this asynchronous predicate.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

***

### flatten()

> **flatten**\<`R`\>(`mapper`?): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type Parameters

• **R**

#### Parameters

• **mapper?**: [`Mapper`](Mapper.md)\<`T`, `Iterable`\<`R`\>\>

Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

The [[FluentAsyncIterable]] of the flattened iterable.

#### Typeparam

R The type of the elements in the inner iterable.

***

### flattenAsync()

> **flattenAsync**\<`R`\>(`mapper`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `AsyncIterable`\<`R`\>\>

Specifies the asynchronous projection from the elements of `T` to iterables of `R`.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

The flattened [[FluentAsyncIterable]].

#### Typeparam

R The type of the elements in the inner iterable.

***

### forEach()

> **forEach**(`action`): `Promise`\<`void`\>

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **action**: [`Action`](Action.md)\<`T`\>

A promise of the action to execute against each element.

#### Returns

`Promise`\<`void`\>

***

### forEachAsync()

> **forEachAsync**(`action`): `Promise`\<`void`\>

Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **action**: [`AsyncAction`](AsyncAction.md)\<`T`\>

The asynchronous action to execute against each element.

#### Returns

`Promise`\<`void`\>

A promise of the executions.

***

### group()

> **group**\<`R`\>(`mapper`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`FluentGroup`](FluentGroup.md)\<`T`, `R`\>\>

Groups the elements of the iterable keyed by equality of data at the specified projection.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`Mapper`](Mapper.md)\<`T`, `R`\>

Projects the elements of the iterable into the group key they belong to.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`FluentGroup`](FluentGroup.md)\<`T`, `R`\>\>

The [[FluentAsyncIterable]] of the distinct groups.

#### Typeparam

R The type of the groups' key.

***

### groupAsync()

> **groupAsync**\<`R`\>(`mapper`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`FluentGroup`](FluentGroup.md)\<`T`, `R`\>\>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `R`\>

Asynchronously projects the elements of the iterable into the group key they belong to.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`FluentGroup`](FluentGroup.md)\<`T`, `R`\>\>

The [[FluentAsyncIterable]] of the distinct groups.

#### Typeparam

R The type of the groups key.

***

### join()

> **join**(`separator`, `mapper`?): `Promise`\<`string`\>

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **separator**: `string`

The separator to use in between the elements of the iterable.

• **mapper?**: [`Mapper`](Mapper.md)\<`T`, `string`\>

The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`string`\>

A promise of the concatenated string of the elements in the iterable.

***

### joinAsync()

> **joinAsync**(`separator`, `mapper`): `Promise`\<`string`\>

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **separator**: `string`

The separator to use in between the elements of the iterable.

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `string`\>

The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`string`\>

A promise of the concatenated string of the elements in the iterable.

***

### last()

> **last**(`predicate`?): `Promise`\<`undefined` \| `T`\>

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **predicate?**: [`Predicate`](Predicate.md)\<`T`\>

The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

***

### lastAsync()

> **lastAsync**(`predicate`): `Promise`\<`undefined` \| `T`\>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **predicate**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

The last element is to be returned which matches this asynchronous predicate.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

***

### map()

> **map**\<`R`\>(`mapper`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`Mapper`](Mapper.md)\<`T`, `R`\>

The operation which maps an instance of `T` into an instance of `R`.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

A [[FluentAsyncIterable]] of the mapped elements.

#### Typeparam

R The destination type of the mapping.

***

### mapAsync()

> **mapAsync**\<`R`\>(`mapper`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `R`\>

The asynchronous operation which maps an instance of `T` into an instance of `R`.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`R`\>

A [[FluentAsyncIterable]] of the mapped elements.

#### Typeparam

R The destination type of the mapping.

***

### max()

> **max**(`mapper`?): `Promise`\<`undefined` \| `T`\>

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper?**: [`Mapper`](Mapper.md)\<`T`, `number`\>

The function which projects the elements of the iterable into numbers. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the maximum of the iterable's projected elements.

***

### maxAsync()

> **maxAsync**(`mapper`): `Promise`\<`undefined` \| `T`\>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `number`\>

The function which asynchronously projects the elements of the iterable into numbers.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the maximum of the iterable's projected elements.

***

### min()

> **min**(`mapper`?): `Promise`\<`undefined` \| `T`\>

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper?**: [`Mapper`](Mapper.md)\<`T`, `number`\>

The function which projects the elements of the iterable into numbers. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the minimum of the iterable's projected elements.

***

### minAsync()

> **minAsync**(`mapper`): `Promise`\<`undefined` \| `T`\>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `number`\>

The asynchronous function which projects the elements of the iterable into numbers.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the minimum of the iterable's projected elements.

***

### partition()

> **partition**(`size`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>\>

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

#### Parameters

• **size**: `number`

The expected size of the partitions. Has to be larger than zero.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>\>

The [[FluentAsyncIterable]] of partitions.

***

### prepend()

> **prepend**(`item`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Adds a value to the beginning of the iterable.

#### Parameters

• **item**: `T`

The item to be prepended to the iterable.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] prepended with the element.

***

### reduce()

> **reduce**\<`R`\>(`reducer`, `initial`): `Promise`\<`R`\>

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **R**

#### Parameters

• **reducer**: [`Reducer`](Reducer.md)\<`T`, `R`\>

The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `R`

The initial (aka *seed*) value of the accumulator.

#### Returns

`Promise`\<`R`\>

A promise of the aggregated value.

#### Typeparam

R The type of the accumulator value.

***

### reduceAndMap()

> **reduceAndMap**\<`A`, `R`\>(`reducer`, `initial`, `result`): `Promise`\<`R`\>

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **A**

• **R**

#### Parameters

• **reducer**: [`Reducer`](Reducer.md)\<`T`, `A`\>

The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `A`

The initial (aka *seed*) value of the accumulator.

• **result**: [`Mapper`](Mapper.md)\<`A`, `R`\>

The mapping function, projects the accumulator value of type `A` to the result value of type `R`.

#### Returns

`Promise`\<`R`\>

A promise of the aggregated value.

#### Typeparam

A The type of the accumulator value.

#### Typeparam

R The type of the aggregation result.

***

### reduceAndMapAsync()

> **reduceAndMapAsync**\<`A`, `R`\>(`reducer`, `initial`, `result`): `Promise`\<`R`\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **A**

• **R**

#### Parameters

• **reducer**: [`AsyncReducer`](AsyncReducer.md)\<`T`, `A`\>

The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `A`

The initial (aka *seed*) value of the accumulator.

• **result**: [`AsyncMapper`](AsyncMapper.md)\<`A`, `R`\>

The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`.

#### Returns

`Promise`\<`R`\>

A promise of the aggregated value.

#### Typeparam

A The type of the accumulator value.

#### Typeparam

R The type of the aggregation result.

***

### reduceAsync()

> **reduceAsync**\<`R`\>(`reducer`, `initial`): `Promise`\<`R`\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **R**

#### Parameters

• **reducer**: [`AsyncReducer`](AsyncReducer.md)\<`T`, `R`\>

The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `R`

The initial (aka *seed*) value of the accumulator.

#### Returns

`Promise`\<`R`\>

A promise of the aggregated value.

#### Typeparam

R The type of the accumulator value.

***

### repeat()

> **repeat**(`n`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Repeats the elements of the iterable a specified amount of times.

#### Parameters

• **n**: `number`

The amount of times the iterable is to be repeated.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the repeated iterable.

***

### skip()

> **skip**(`n`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

#### Parameters

• **n**: `number`

The number of elements to skip.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of all the elements after the first `n` elements.

***

### skipWhile()

> **skipWhile**(`condition`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.

#### Parameters

• **condition**: [`Predicate`](Predicate.md)\<`T`\>

A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements after the condition is not met.

***

### skipWhileAsync()

> **skipWhileAsync**(`condition`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

#### Parameters

• **condition**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements after the condition is not met.

***

### sort()

> **sort**(`comparer`?): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **comparer?**: [`Comparer`](Comparer.md)\<`T`\>

The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The sorted [[FluentAsyncIterable]].

***

### sum()

> **sum**(`mapper`?): `Promise`\<`number`\>

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper?**: [`Mapper`](Mapper.md)\<`T`, `number`\>

The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`number`\>

A promise of the sum of the projected elements of the iterable.

***

### sumAsync()

> **sumAsync**(`mapper`): `Promise`\<`number`\>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `number`\>

The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

#### Returns

`Promise`\<`number`\>

A promise of the sum of the projected elements of the iterable.

***

### take()

> **take**(`n`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Returns a specified number of contiguous elements from the start of the iterable.

#### Parameters

• **n**: `number`

The number of elements to take.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the first `n` elements.

***

### takeWhile()

> **takeWhile**(`condition`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Returns elements from the iterable as long as a specified condition is met.

#### Parameters

• **condition**: [`Predicate`](Predicate.md)\<`T`\>

A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements until the condition is met.

***

### takeWhileAsync()

> **takeWhileAsync**(`condition`): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Returns elements from the iterable as long as a specified asynchronous condition is met.

#### Parameters

• **condition**: [`AsyncPredicate`](AsyncPredicate.md)\<`T`\>

An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements until the condition is met.

***

### toArray()

> **toArray**(): `Promise`\<`T`[]\>

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Returns

`Promise`\<`T`[]\>

A promise of the array equivalent of the iterable.

***

### toObject()

> **toObject**\<`R`\>(`keySelector`, `valueSelector`?): `Promise`\<`R`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **R**

#### Parameters

• **keySelector**: [`Mapper`](Mapper.md)\<`T`, `string`\>

Projects an element of the iterable into the key of the corresponding field.

• **valueSelector?**: [`Mapper`](Mapper.md)\<`T`, `unknown`\>

Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.

#### Returns

`Promise`\<`R`\>

A promise of the object composed of the elements of the iterable as fields.

#### Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

***

### toObjectAsync()

> **toObjectAsync**\<`R`\>(`keySelector`, `valueSelector`): `Promise`\<`R`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **R**

#### Parameters

• **keySelector**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `string`\>

Asynchronously projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `unknown`\>

Asynchronously projects an element of the iterable into the value of the corresponding field.

#### Returns

`Promise`\<`R`\>

A promise of the object composed of the elements of the iterable as fields.

#### Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

***

### top()

> **top**\<`R`\>(`mapper`, `comparer`): `Promise`\<`undefined` \| `T`\>

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`Mapper`](Mapper.md)\<`T`, `R`\>

The function which projects the elements of the iterable into comparable.

• **comparer**: [`Comparer`](Comparer.md)\<`R`\>

The comparison function.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the top of the iterable's projected elements.

#### Typeparam

R The type of the projected elements used for comparison.

***

### topAsync()

> **topAsync**\<`R`\>(`mapper`, `comparer`): `Promise`\<`undefined` \| `T`\>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type Parameters

• **R**

#### Parameters

• **mapper**: [`AsyncMapper`](AsyncMapper.md)\<`T`, `R`\>

The asynchronous function which projects the elements of the iterable into comparable.

• **comparer**: [`Comparer`](Comparer.md)\<`R`\>

The comparison function.

#### Returns

`Promise`\<`undefined` \| `T`\>

A promise of the top of the iterable's projected elements.

#### Typeparam

R The type of the projected elements used for comparison.

***

### withIndex()

> **withIndex**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`Indexed`\<`T`\>\>

Maps all elements of the iterable to an instance of [[Indexed]], an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`Indexed`\<`T`\>\>

A [[FluentAsyncIterable]] of [[Indexed]].
