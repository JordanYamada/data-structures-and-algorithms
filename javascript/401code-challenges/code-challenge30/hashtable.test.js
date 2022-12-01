const { Hashtable } = require('./hashtable.js');

describe('Hashtable', () => {

  test('should create a hashtable', () => {
    const hash = new Hashtable();
    expect(hash).toBeTruthy();
  });

  test('should set/get an element into the hash table', () => {
    const hash = new Hashtable();
    const key = 'ant';
    const value = {name: 'Adam'};
    hash.set(key, value);
    expect(hash.get('ant')).toEqual(value);
  });

  test('should set/get several similar element into the hash table', () => {
    const hash = new Hashtable();

    hash.set('ant', {name: 'Adam'});
    hash.set('birds', [{name: 'Tweety'}, {name: 'Robin'}]);

    hash.set('cat', {name: 'Coffee'});
    hash.set('dog', {name: 'Donner'});
    hash.set('elephant', {name: 'Eli'});
    hash.set('fox', {name: 'Faust'})
    expect(hash.get('dog')).toEqual({name: 'Donner'});
    expect(hash.get('elephant')).toEqual({name: 'Eli'});
    expect(hash.get('fox')).toEqual({name: 'Faust'});

  });

  test('has should return false if element does not exist, true otherwise', () => {
    const hash = new Hashtable();

    expect(hash.has('elephant')).toBe(false);
    hash.set('elephant', {name: 'Elly'});
    expect(hash.has('elephant')).toBe(true);

    expect(hash.has('elephants')).toBe(false);
    hash.set('elephants', [{name: 'Elly'}, {name: 'Ella'}]);
    expect(hash.has('elephants')).toBe(true);

    expect(hash.has('eagle')).toBe(false);
    hash.set('eagle', {name: 'Eagle Eye'});
    expect(hash.has('eagle')).toBe(true);

    expect(hash.has('eel')).toBe(false);
    hash.set('eel', {name: 'Electra'});
    expect(hash.has('eel')).toBe(true);

    expect(hash.has('aardvark')).toBe(false);
    hash.set('aardvark', {name: 'Arthur'});
    expect(hash.has('aardvark')).toBe(true);

    expect(hash.has('ant')).toBe(false);
    hash.set('ant', {name: 'Betsy'})
    expect(hash.has('ant')).toBe(true);

  });

  test('should return null if element does not exist', () => {
    const hash = new Hashtable();
    expect(hash.get('elephant')).toBe(null);
    expect(hash.has('elephant')).toBe(false);
    hash.set('elephant', {name: 'Elly'});
    expect(hash.get('elephants')).toBe(null);
    hash.set('elephants', [{name: 'Elly'}, {name: 'Ella'}]);
    expect(hash.get('eagle')).toBe(null);
    hash.set('eagle', {name: 'Eagle Eye'});
    expect(hash.get('eel')).toBe(null);
    hash.set('eel', {name: 'Electra'});
    expect(hash.get('aardvark')).toBe(null);
    hash.set('aardvark', {name: 'Arthur'});
    expect(hash.get('ant')).toBe(null);
    hash.set('ant', {name: 'Betsy'})
    expect(hash.get('eel')).toEqual({name: 'Electra'});
    expect(hash.get('ant')).toEqual({name: 'Betsy'});
  });

  test('should get a list of all items', () => {
    const hash = new Hashtable();

    hash.set('ant', {name: 'Adam'});
    hash.set('birds', [{name: 'Tweety'}, {name: 'Robin'}]);

    hash.set('cat', {name: 'Coffee'});
    hash.set('dog', {name: 'Donner'});
    hash.set('elephant', {name: 'Eli'});
    hash.set('Fox', {name: 'Faust'});
    const items = hash.all();
    expect(items.length).toEqual(6);
  });

});
