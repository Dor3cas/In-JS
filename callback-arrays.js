function double (arr, callback){
    for(let i=0; i<arr.length; i++){
    callback(arr[i]*2);
    }
  }
   double([1,2,3], function(num){
    console.log(num);
   });
   