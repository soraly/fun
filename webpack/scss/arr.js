var arr = [
    [1,1,3,8],
    [0,2,5,6],
    [3,1,0,4],
    [5,8,2,7]
];

function lzx(arr){
    var index=[];
    arr.forEach(item => {
        for(var i =0;i<item.length;i++){
            if(item[i]===0){
                index = i;
                zero(arr,i)
            }
        }
        for(var i =0;i<item.length;i++){
            if(item[i]===0){
                item=[0,0,0,0]
            }
        }
    });
    console.log(arr,'arr')
}
function zero(arr,i){
    arr.forEach((item)=>{
        item[i]=0;
    })
}
lzx(arr)