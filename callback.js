function sayHello(name, callback){
    console.log ('Hello '+ name );
    callback();
}

function welcome(){
    console.log ('Your welcome here!');
}
 setTimeout(function () {
  sayHello("DORCAS", welcome);
 },2000);
 
  


  