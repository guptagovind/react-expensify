const promise =  new Promise((resolve,reject) => {
  setTimeout(() =>{
    //resolve('This is resolve promise');
    reject('This is resolve promise');
  }, 5000);

});

console.log('Before');
promise.then((data)=>{
  console.log('data', data);
}).catch((error)=>{
  console.log('error', error);
});

console.log('After');