import fluent from '../src';
import { expect } from '@jest/globals';
import { pick, flatMap } from './tools';

enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'NonBinary',
}

interface Person {
  name: string;
  gender?: Gender;
  emails: string[];
}

const data: Person[] = [
  {
    name: '0: w/o gender & 0 emails',
    emails: [],
  },
  {
    name: '1: w/o gender & 1 emails',
    emails: ['1@email.com'],
  },
  {
    name: '2: w/o gender & 2 emails',
    emails: ['2/1@email.com', '2/2@email.com'],
  },
  {
    name: '3: male & 0 emails',
    gender: Gender.Male,
    emails: [],
  },
  {
    name: '4: female & 0 emails',
    gender: Gender.Female,
    emails: [],
  },
  {
    name: '5: non-binary & 0 emails',
    gender: Gender.NonBinary,
    emails: [],
  },
  {
    name: '6: male & 1 emails',
    gender: Gender.Male,
    emails: ['6@email.com'],
  },
  {
    name: '7: female & 1 emails',
    gender: Gender.Female,
    emails: ['7@email.com'],
  },
  {
    name: '8: non-binary & 1 emails',
    gender: Gender.NonBinary,
    emails: ['8@email.com'],
  },
  {
    name: '9: male & 2 emails',
    gender: Gender.Male,
    emails: ['9/1@email.com', '9/2@email.com'],
  },
  {
    name: '10: female & 2 emails',
    gender: Gender.Female,
    emails: ['10/1@email.com', '10/2@email.com'],
  },
  {
    name: '11: non-binary & 2 emails',
    gender: Gender.NonBinary,
    emails: ['11/1@email.com', '11/2@email.com'],
  },
];

const picker = (...indexes: number[]) => pick(data, ...indexes);

function* generator(): Iterable<Person> {
  yield* data;
}

const additionalPerson: Person = { name: 'name', gender: Gender.NonBinary, emails: ['name@email.com'] };

describe('fluent iterable', () => {
  const suite = (createSubject: () => Iterable<Person>) => () => {
    let subject: Iterable<Person>;

    beforeEach(() => (subject = createSubject()));

    describe('synchronous', () => {
      describe('basics work', () => {
        it('wrapping does not fail', () => {
          fluent(subject);
        });
        it('can iterate through', () => {
          let idx = 0;
          for (const person of fluent(subject)) {
            expect(person).toBe(data[idx++]);
          }
        });
        it('can convert to array', () => {
          expect(fluent(subject).toArray()).toEqual(data);
        });
      });
      describe('takeWhile', () => {
        it('works with initially not true statement', () =>
          expect(
            fluent(subject)
              .takeWhile(p => p.emails.length > 0)
              .toArray()
          ).toHaveLength(0));
        it('works with eventually not true statement', () => {
          expect(
            fluent(subject)
              .takeWhile(p => p.gender === undefined)
              .toArray()
          ).toEqual(data.slice(0, 3));
        });
        it('works with always true statement', () => {
          expect(
            fluent(subject)
              .takeWhile(p => p.name.length > 0)
              .toArray()
          ).toEqual(data);
        });
      });
      describe('take', () => {
        it('works with negative count', () => expect(fluent(subject).take(-5).toArray()).toHaveLength(0));
        it('works with zero count', () => expect(fluent(subject).take(0).toArray()).toHaveLength(0));
        it('works with one count', () => expect(fluent(subject).take(1).toArray()).toEqual(data.slice(0, 1)));
        it('works with count < length', () => expect(fluent(subject).take(5).toArray()).toEqual(data.slice(0, 5)));
        it('works with count = length', () => expect(fluent(subject).take(data.length).toArray()).toEqual(data));
        it('works with count > length', () =>
          expect(
            fluent(subject)
              .take(data.length * 2)
              .toArray()
          ).toEqual(data));
      });
      describe('skipWhile', () => {
        it('works with initially not true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.emails.length > 0)
              .toArray()
          ).toEqual(data));
        it('works with eventually not true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.gender === undefined)
              .toArray()
          ).toEqual(data.slice(3)));
        it('works with always true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.name.length > 0)
              .toArray()
          ).toHaveLength(0));
        it('works with alternating true statement', () =>
          expect(
            fluent(subject)
              .skipWhile(p => p.emails.length === 0)
              .toArray()
          ).toEqual(data.slice(1)));
      });
      describe('skip', () => {
        it('works with negative count', () => expect(fluent(subject).skip(-5).toArray()).toEqual(data));
        it('works with zero count', () => expect(fluent(subject).skip(0).toArray()).toEqual(data));
        it('works with one count', () => expect(fluent(subject).skip(1).toArray()).toEqual(data.slice(1)));
        it('works with count < length', () => expect(fluent(subject).skip(5).toArray()).toEqual(data.slice(5)));
        it('works with count = length', () => expect(fluent(subject).skip(data.length).toArray()).toHaveLength(0));
        it('works with count > length', () =>
          expect(
            fluent(subject)
              .skip(data.length * 2)
              .toArray()
          ).toHaveLength(0));
      });
      describe('map', () => {
        it('maps to undefined', () => {
          const res = fluent(subject)
            .map(() => undefined)
            .toArray();
          expect(res).toHaveLength(data.length);
          res.forEach(item => expect(item).toBeUndefined());
        });
        it('maps to projection', () => {
          const res = fluent(subject)
            .map(p => p.name)
            .toArray();
          expect(res).toHaveLength(data.length);
          let idx = 0;
          for (const item of res) {
            expect(item).toBe(data[idx++].name);
          }
        });
      });
      describe('filter', () => {
        it('with always false predicate', () =>
          expect(
            fluent(subject)
              .filter(() => false)
              .toArray()
          ).toHaveLength(0));
        it('with always true predicate', () =>
          expect(
            fluent(subject)
              .filter(() => true)
              .toArray()
          ).toEqual(data));
        it('with alternating predicate', () =>
          expect(
            fluent(subject)
              .filter(p => p.gender === Gender.Female)
              .toArray()
          ).toEqual(picker(4, 7, 10)));
      });
      describe('append', () => {
        it('with empty iterable', () =>
          expect(
            fluent([] as Person[])
              .append(additionalPerson)
              .toArray()
          ).toEqual([additionalPerson]));
        it('with non-empty iterable', () =>
          expect(fluent(subject).append(additionalPerson).toArray()).toEqual([...data, additionalPerson]));
      });
      describe('prepend', () => {
        it('with empty iterable', () =>
          expect(
            fluent([] as Person[])
              .prepend(additionalPerson)
              .toArray()
          ).toEqual([additionalPerson]));
        it('with non-empty iterable', () =>
          expect(fluent(subject).prepend(additionalPerson).toArray()).toEqual([additionalPerson, ...data]));
      });
      describe('concat', () => {
        it('one empty array', () => expect(fluent(subject).concat([]).toArray()).toEqual(data));
        it('two empty arrays', () => expect(fluent(subject).concat([], []).toArray()).toEqual(data));
        it('one non-empty arrays', () =>
          expect(fluent(subject).concat([additionalPerson]).toArray()).toEqual([...data, additionalPerson]));
        it('two non-empty arrays', () =>
          expect(fluent(subject).concat([additionalPerson], data).toArray()).toEqual([
            ...data,
            additionalPerson,
            ...data,
          ]));
        it('one empty and one non-empty arrays', () =>
          expect(fluent(subject).concat([], [additionalPerson]).toArray()).toEqual([...data, additionalPerson]));
      });
      describe('repeat', () => {
        it('negative number of times', () => expect(fluent(subject).repeat(-5).toArray()).toHaveLength(0));
        it('zero times', () => expect(fluent(subject).repeat(0).toArray()).toHaveLength(0));
        it('once', () => expect(fluent(subject).repeat(1).toArray()).toEqual(data));
        it('twice', () => expect(fluent(subject).repeat(2).toArray()).toEqual([...data, ...data]));
        it('three times', () => expect(fluent(subject).repeat(3).toArray()).toEqual([...data, ...data, ...data]));
      });
      describe('flatten', () => {
        it('empty array', () => expect(fluent([]).flatten().toArray()).toHaveLength(0));
        it('already flat fails', () => expect(() => fluent(subject).flatten().toArray()).toThrow());
        it('not flat', () =>
          expect(
            fluent([[1, 2], [3, 4, 5], [], [6]])
              .flatten()
              .toArray()
          ).toEqual([1, 2, 3, 4, 5, 6]));
        it('with mapper', () =>
          expect(
            fluent(subject)
              .flatten(p => p.emails)
              .toArray()
          ).toEqual(flatMap(picker(1, 2, 6, 7, 8, 9, 10, 11), p => p.emails)));
      });
      describe('sort', () => {
        it('empty', () => expect(fluent([]).sort().toArray()).toHaveLength(0));
        it('flat numbers', () => expect(fluent([6, 4, 5, 3, 2, 1]).sort().toArray()).toEqual([1, 2, 3, 4, 5, 6]));
        it('flat numbers with reversed comparison', () =>
          expect(
            fluent([6, 4, 5, 3, 2, 1])
              .sort((a, b) => b - a)
              .toArray()
          ).toEqual([6, 5, 4, 3, 2, 1]));
      });
      describe('distinct', () => {
        it('empty', () => expect(fluent([]).distinct().toArray()).toHaveLength(0));
        it('not distinct numbers', () => expect(fluent([1, 1, 1, 2, 2, 3]).distinct().toArray()).toEqual([1, 2, 3]));
        it('already distinct collection', () => expect(fluent(subject).distinct().toArray()).toEqual(data));
        it('with mapper', () =>
          expect(
            fluent(subject)
              .distinct(p => p.gender)
              .toArray()
          ).toEqual(picker(0, 3, 4, 5)));
      });
      describe('group', () => {
        it('empty', () =>
          expect(
            fluent([] as Person[])
              .group(p => p.gender)
              .toArray()
          ).toHaveLength(0));
        it('non-empty', () => {
          const groups = fluent(subject)
            .group(p => p.gender)
            .toArray();
          expect(groups.length).toEqual(4);
          expect(groups.map(grp => grp.key)).toEqual(
            expect.arrayContaining([undefined, Gender.Male, Gender.Female, Gender.NonBinary])
          );
          for (const grp of groups) {
            expect(grp.values.toArray()).toEqual(data.filter(p => p.gender === grp.key));
          }
        });
      });
      describe('count', () => {
        it('empty', () => expect(fluent([]).count()).toBe(0));
        it('one element', () => expect(fluent([0]).count()).toBe(1));
        it('multiple elements', () => expect(fluent(subject).count()).toBe(data.length));
      });
    });

    describe('asynchronous', () => {
      describe('basics work', () => {
        it('can convert to fluentAsync', async () => expect(await fluent(subject).toAsync().toArray()).toEqual(data));
      });
    });
  };
  describe(
    'on array',
    suite(() => data)
  );
  describe('on generator', suite(generator));
});
