class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const address = this.hashMethod(key);
        if (!this.data[address]) this.data[address] = [];
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }                
            }
        }
        return undefined;
    }
    getAll(){
        let result = [];
        for (let i = 0; i < this.data.length; i++) {
            const currentBucket = this.data[i];
            if (currentBucket){
                for (let x = 0; x < currentBucket.length; x++) {
                    result.push([currentBucket[x][0], currentBucket[x][1]]);
                }
            }
        }
        return result;
    }
    shiftIndex(array, index){
        for (let i = index; i < array.length; i++){
            array[i] = array[i+1];           
        }
        delete array[array.length-1];
        array.length--;
        return array;
    }
    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        let currentValue;
        if (currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key){
                    currentValue = currentBucket[i];
                    this.data[address] = this.shiftIndex(currentBucket, i);
                    return currentValue;
                }                
            }
        }
        return undefined;        
    }
}


let ht = new HashTable(50);
console.log(ht);
console.log(ht.set("Diego", "1998"));
console.log(ht.set("Mariana", "1999"));
console.log(ht.set("Adriana", "2000"));
console.log(ht.get("Diego"));
console.log(ht.get("Mariana"));
console.log(ht.get("Adriana"));
console.log(ht.get("Marcos"));
console.log(ht.getAll());
console.log(ht.delete("Diego"));
console.log(ht.set("Marcos", "1981"));
console.log(ht.getAll());