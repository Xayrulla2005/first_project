// 1-misol



// 2-misol
// class NumCut{
//     constructor(a,b){
//         this.a=a
//         this.b=b
//     }
//     sonFunc(){
//         let son=this.a.splice(0,this.b)
//         return [...this.a,...son]
        
//     }
// }
// let num=new NumCut([1,2,3,4,5,6],2)
// console.log(num.sonFunc());


// 3-misol 
// class numChose{
//     constructor(a,b){
//         this.a=a
//         this.b=b
//     }
//     numFunc(){
//      for (let i = 0; i < this.a.length; i++) {
//        for (let j = 0; j < this.a.length; j++) {
//         if (this.a[i]+this.a[j]===this.b) {
//             return [i,j]
//         }
//        } 
//      }
//     }
// }
// let numInd=new numChose([2,8,7,11,55,66],9)
// console.log(numInd.numFunc());

// 4-misol 
// class numAdd{
//     constructor(a,b){
//         this.a=a
//         this.b=b
//     }
//     numFunc(){
//         let res=0
//         for (const element of this.a) {
//             res+=element
//         }
//         return res<=this.b?true:false;
//     }
// }
// let num=new numAdd([1,2,3,4],10)
// console.log(num.numFunc());




// 5-misol 
// class numDif{
//     constructor(a,b){
//         this.a=a
//         this.b=b
//     }
//     numFunc(){
//         let arr=[]
//        for (const element of this.a) {
//         if (!this.b.includes(element)) {
//             arr.push(element)
//         }
//        }
//        for (const element of this.b) {
//         if (!this.a.includes(element)) {
//             arr.push(element)
//         }
//        }
        
//         return arr
//        }
//     }

// let num=new numDif([1,2,3,4],[4,5,6,7])
// console.log(num.numFunc());


// 6-misol 
// class numAll{
//     constructor(son){
//         this.son=son
//     }
//     numFunc(){
//         let obj={}
//         let res=0
//         for (const element of this.son) {
//             if (obj[element]) {
//                 obj[element]++
//             }else{
//                 obj[element]=1
//             }
//         }
//         let max=[]
//         for (const key in obj) {
//            if (max.length==0) {
//             max=[key,obj[key]]
//            }else if(max[1]<obj[key]){
//             max=[key,obj[key]]
//            }
//         }

//         return max[0]
//     }
// }
// let num=new numAll([1,1,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,5])
// console.log(num.numFunc());


// 7-misol 
// class strNum{
//     constructor(str){
//         this.str=str
//     }
//     strFunc(){
//         let soz=''
//         for (let i = 0; i < this.str.length; i++) {
//            if (isNaN(Number(this.str[i]))) {
//             soz+=this.str[i]
//            } else{
//             soz+=String(+(this.str[i])+1)
//            }
//         }
//         return soz
//     }
// }
// let satr=new strNum('abs123')
// console.log(satr.strFunc())


// 8-misol 


// 9-misol 
// class numAll{
//     constructor(son){
//         this.son=son
//     }
//     numFunc(){
//         let obj={}
//         let res=0
//         for (const element of this.son) {
//             if (obj[element]) {
//                 obj[element]++
//             }else{
//                 obj[element]=1
//             }
//         }
//         return obj
//     }
// }
// let num=new numAll([1,1,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,5])
// console.log(num.numFunc());
