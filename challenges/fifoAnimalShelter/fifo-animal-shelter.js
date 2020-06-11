'use strict';

const Node = require('../../data-Structures/linked-list/node');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    return this.front.value;
  }

  dequeue(pref) {
    if (this.front == null) return 'empty';
    if (!pref) {
      let value = this.front.value;
      this.front = this.front.next;
      return value;
    }
    if (pref === 'dog' || pref === 'cat') {
      if (this.front.value === pref) {
        let value = this.front.value;
        this.front = this.front.next;
        return value;
      }
      let current = this.front;
      while (current.next) {
        if (current.next.value === pref) {
          let value = current.next.value;
          current.next = current.next.next;
          current.next ? null : this.rear = current;
          return value;
        }
        current = current.next;
      }
      return 'not found';
    }
    else {
      return null;
    }
  }
}

// let x = new AnimalShelter();
// // console.log(x);
// x.enqueue('cat');
// x.enqueue('dog');
// // console.log(x);

// // x.enqueue('zz');
// x.enqueue('dog');
// x.enqueue('cat');
// console.log('enque', x);
// console.log(x.front.next);
// console.log('---------------------------------------------------------------------------');

// x.dequeue();
// console.log('---------------------------------------------------------------------------');

// console.log('deque', x);
// console.log(x.front.next);

// // x.dequeue('zz');
// // console.log(x);
// // console.log(x.front.next);
// // console.log(x.front.next.next);

module.exports = AnimalShelter;