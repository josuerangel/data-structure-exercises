/**
 * Array class
 */

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }
    
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pushOnFirst(item){
        this.push(item);
        this.shiftIndexUp(0);
        this.data[0] = item;
        return this.data;
    }
    shiftIndexUp(index){
        for (let i = this.length-1; i >= index; i--) {
            this.data[i] = this.data[i-1];            
        }
    }

    pop(){
        this.length--;
        const lastItem = this.data[this.length];
        delete this.data[this.length];
        return lastItem;
    }

    removeFisrt(){
        return this.delete(0);
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index){
        for (let i = index; i < this.length; i++){
            this.data[i] = this.data[i+1];           
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

let myarray = new MyArray();
console.log(myarray.push("cero"));
console.log(myarray.push("uno"));
console.log(myarray.pop());
console.log(myarray);
console.log(myarray.push("uno"));
console.log(myarray.push("dos"));
console.log(myarray.delete(1));
console.log(myarray);
console.log(myarray.pushOnFirst("cerocero"));
console.log(myarray.removeFisrt());
console.log(myarray);