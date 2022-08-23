// I array
// 1.Tinh Tong cac so trong mang
// const arr=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
// let sum =0;
// for(let i= 0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum)
//2. In ra các số chẵn trong mảng.
// const arr=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
// for(let i = 0; i <= arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }   
// }
// 3.Tính tổng các số lẻ trong mảng.
// const arr=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
// var at = parseInt(arr)

// for(let i = 0; i <= arr.length;i++){
//     var sum=0
//     if(arr[i]%2!=0)
//     {
//      sum += arr[i]
//      co    }
    
// }

// console.log(sum)
// // 3.In ra các số chia hết cho 3
// const arr=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
// for(let i = 0; i <= arr.length;i++){
//     if(arr[i]%3==0){
//         console.log(arr[i])
//     }   
// }
// 6.In ra các số không nhỏ hơn 15.
// const arr=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
// for (let i = 0; i <= arr.length;i++)
//     if(arr[i]>=15)
// console.log(arr[i])
// 7.tìm số bé nhất, lớn nhất trong mảng.
// const arr=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];

//     console.log(Math.min(...arr))
//     console.log(Math.max(...arr))
// /// cau 3
// function add(a,b){
//     return a+b
// }
// let x= add(10,20)
// console.log(x)
// cau 5
// function w(x){
//     if(x % 100 === 0){
//         return x /100 ;
//     }
//     else {
//         return Math.ceil(x/100);
//     }
// }    
// let x = w(1997)
// console.log(x);
//6.Viết hàm đảo ngược string s. Ví dụ s = “mindX” thì kết quả trả về là “Xdnim”.
// function strings(s){
//     var arrray=s.split("")
//     var sarray=arrray.reverse()
//     var newsarray=sarray.join("")
//     return newsarray;
// }  
// var s = "mindx"
// console.log(strings(s))


//1.viet ham in ra uoc so tu nhien n
function uocsotunhien(a,b){
    if(a%b===0){
        return a
    }
    else{
        return b
    }

}
var x= uocsotunhien(10,20)
console.log(x)
