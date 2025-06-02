class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = this.size / this.capacity;
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capacity;
  }
  set(key, value) {
    if (this.size / this.capacity > 0.75) this.resize();

    const index = this.hash(key);
    const newNode = new Node(key, value)
    if (!this.buckets[index]) {
      this.buckets[index] = newNode;
      this.size++;

    } else {
      let current = this.buckets[index];
      while (true) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (!current.next) break;
        current = current.next;

      }
      current.next = newNode;
      this.size++;
    }
  }
  resize() {
    this.capacity *= 2;
    const oldBuckets = this.buckets;
    this.buckets = new Array(this.capacity);
    for (const bucket of oldBuckets) {
      let current = bucket;
      while (current) {
        this.set(current.key, current.value)
        current = current.next;
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null;
    let current = this.buckets[index]

    while (current) {
      if (current.key === key) return current.value;
      current = current.next;
    }
    return null;
  }
  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;
    let current = this.buckets[index]

    while (current) {
      if (current.key === key) return true;
      current = current.next;
    }
    return false;
  }
  remove(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;
    let current = this.buckets[index];
    let prev = null;
    if (current.key === key) {
      this.buckets[index] = current.next;
      this.size--;
      return true;
    } else {
      while (current) {
        if (current.key === key) {
          prev.next = current.next;
          this.size--;
          return true;
        }
        prev = current;
        current = current.next;
      }
    }

    return false;
  }
  length() {
    return this.size;
  }
  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = null;
    }
    this.size = 0;
  }
  keys() {
    let arr = []
    for (let bucket of this.buckets) {
      if (bucket) {
        while (bucket) {
          arr.push(bucket.key)
          bucket = bucket.next
        }
      }
    }
    return arr;
  }
  values() {
    let arr = []
    for (let bucket of this.buckets) {
      if (bucket) {
        while (bucket) {
          arr.push(bucket.value)
          bucket = bucket.next
        }
      }
    }
    return arr;
  }
  entries() {
    let arr = []
    for (let bucket of this.buckets) {
      if (bucket) {
        while (bucket) {
          arr.push([bucket.key, bucket.value])
          bucket = bucket.next
        }
      }
    }
    return arr;

  }
}








