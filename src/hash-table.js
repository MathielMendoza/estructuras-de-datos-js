class HashTable {
    constructor(size) {
        this.buckets = new Array(size);
        this.numBuckets = this.buckets.length;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.numBuckets;
    }

    insert(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) this.buckets[index] = [];

        this.buckets[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) return null;
        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                return this.buckets[index][i][1]
            }
        }
    }
}

const hasTable = new HashTable();

hasTable.insert("john",{
    name:"John",
    age:29,
    email:"gerbo29@gmail.com"
});

hasTable.insert("jane",{
    name:"Jane",
    age:30,
    email:"gerbo30@gmail.com"
});

hasTable.insert("bob",{
    name:"Bob",
    age:31,
    email:"bob@gmail.com"
});

console.log(hasTable.get('john'))

