/**
 * Created by war3_2 on 2017/2/23.
 */
class MaxHeap {
    constructor(){
        this.data = [];
        this.count = 0;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    insert(item) {//插入元素
        this.data[this.count+1] = item;
        this.count++;
        this.shiftUp(this.count);
    }
    shiftUp(k) {
        while (k > 1 && this.data[Math.floor(k/2)] < this.data[k]){
            [this.data[Math.floor(k/2)],this.data[k]] = [this.data[k],this.data[Math.floor(k/2)]]
            k = Math.floor(k / 2);
        }
    }
    shiftDown(k){
        while (2*k <= this.count){
            let j = 2*k;
            if(j+1 <= this.count && this.data[j+1] > this.data[j]){
                j = j+1
            }
            if(this.data[k] >= this.data[j]){
                break
            }
            [this.data[k],this.data[j]] = [this.data[j],this.data[k]]
            k = j;
        }
    }
    extractMax(){//删除元素
        if(this.count > 0){
            let ret = this.data[1]
            //console.log(this.data[1]+"----------------------------"+this.data[this.count])
            if([this.data[1],this.data[this.count]] = [this.data[this.count],this.data[1]]){
                this.data = this.data.slice(0,this.count)
                this.count--
            }
            this.shiftDown(1)
            return ret;
        }
    }
    heapSort2(arr){
        console.log(arr)
        for(let i = 0; i <arr.length;i++){
            this.data[i+1] = arr[i]
        }
        console.log(this.data)
        this.count = arr.length
        for (let i = Math.floor(this.count/2); i >= 1;i--){
            this.shiftDown(i)
        }
        console.log(this.data)
    }
}
var arr = []
function creatArrar(len,start,end) {
    for(let i = 0;i<len;i++){
        arr.push(Math.floor(Math.random()*(end-start))+start);
    }
}
function main() {
    creatArrar(20,0,100)
    let maxheap = new MaxHeap();
    maxheap.heapSort2(arr)
    for (let i = arr.length-1;i>=0;i--){
        arr[i] = maxheap.extractMax()
    }
    console.log(arr)
}
main()
