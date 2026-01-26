function greeting(name,callback){
    setTimeout (() =>{
        callback(null,"good morning" + name)

    },3000);
}
greeting(" Belise",(error,greetMessage)=>{
    if(error)
        console,error(error)
    console.log(greetMessage)

})