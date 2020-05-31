'use strict';

let Ll_insertion = require('../data-Structures/ll-insertion/ll-insertion.js');


describe('Linked list challenge', () => {

  it('append to the linked list ', () => {
    let list = new Ll_insertion();
    list.append('test 1');

    expect(list).toEqual({ head: { value: 'test 1', next: null } });

    list.append('test after head');
    list.append('test after head2');
    expect(list).toEqual({ head: { value: 'test 1', next: { value: 'test after head', next: { value: 'test after head2', next: null } } } });
  });

  it('(Insert before)  a value when the linked list is empty ', () => {
    let list = new Ll_insertion();
    list.insertBefore('test 3', 'test add before');
    expect(list).toEqual({ head: null });
  });

  it('(Insert after) a value when the linked list is empty ', () => {
    let list = new Ll_insertion();
    list.insertAfter('test 3', 'test add before');
    expect(list).toEqual({ head: null });
  });

  it('(Insert before) with a value not in the linked list ', () => {
    let list = new Ll_insertion();
    list.append('test 2');
    list.insertBefore('test 3', 'test add before');
    expect(list).toEqual({ head: { value: 'test 2', next: null } });
  });

  it('(Insert after) with a value not in the linked list ', () => {
    let list = new Ll_insertion();
    list.append('test 2');
    list.insertAfter('test 3', 'test add before');
    expect(list).toEqual({ head: { value: 'test 2', next: null } });
  });

  it('(Insert before) a value into the linked list ', () => {
    let list = new Ll_insertion();
    list.append('test 2');
    list.insertBefore('test 2', 'test add before head');
    expect(list).toEqual({ head: { value: 'test add before head', next: { value: 'test 2', next: null } } });

    list.append('test 3');
    list.insertBefore('test 3', 'test add before');
    expect(list).toEqual({
      head: {
        value: 'test add before head',
        next: {
          value: 'test 2',
          next: {
            value: 'test add before',
            next: { value: 'test 3', next: null },
          },
        },
      },
    });
  });

  it('(Insert After) value into the linked list ', () => {
    let list = new Ll_insertion();
    list.append('test 4');
    list.append('test 5');
    list.insertAfter('test 5', 'test add after');
    expect(list).toEqual({ head: { value: 'test 4', next: { value: 'test 5', next: { value: 'test add after', next: null } } } });

    list.append('test 44');
    list.insertAfter('test 44', 'test 55');
    expect(list).toEqual({
      head: {
        value: 'test 4',
        next: {
          value: 'test 5',
          next: {
            value: 'test add after',
            next: {
              value: 'test 44',
              next: {
                value: 'test 55',
                next: null,
              },
            },
          },
        },
      },
    });

  });


});
