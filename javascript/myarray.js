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

    pop(){
        this.length--;
        const lastItem = this.data[this.length];
        delete this.data[this.length];
        return lastItem;
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