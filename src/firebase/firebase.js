import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);


const database =  firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {firebase, googleAuthProvider, database as default};


/*database.ref('expenses').on('value',(snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot) =>{
      const expense = {
        id:childSnapshot.key,
        ...childSnapshot.val()
      };
      expenses.push(expense);
    });
    console.log('Expenses', expenses);
  });

database.ref('expenses').on('child_changed', (snapshot)=>{
  console.log(snapshot.val());
});





const expense1 = {
  createdAt:1232345678,
  note:'',
  amount:10,
  description:'First note',
};
const expense2 = {
 createdAt:120,
 note:'',
 amount:20,
 description:'Second note',
};
const expense3 = {
 createdAt:130,
 note:'',
 amount:30,
 description:'Third note',
};
database.ref('expenses').push(expense1);
database.ref('expenses').push(expense2);
database.ref('expenses').push(expense3);

const obj = {
 name:'Govind Gupta',
 age:31,
 isSingle:false,
 stressLevel:6,
 job:{
   title:'Software developer',
   company:'Google'
 },
 location:{
   city:'Austin',
   state:'Texas'
 },
 attr: {
   height:40,
   weight:90
 }
};
database.ref().set(obj);

//Retrieving data(subscribe)

database.ref().on('value',(snapshot)=> {
 const retriveObj = snapshot.val();
 console.log(retriveObj.name +' is a '+retriveObj.job.title+' at '+retriveObj.location.city);
});

setTimeout(()=>{
 database.ref('name').set('Mike');
},3000);




const updateObj = {
 stressLevel:9,
 'job/company':'Amazon',
 'location/city':'Seattle'
};
database.ref().update(updateObj)
 .then(()=>{
   console.log('Update successfully');
 })
 .catch((e)=>{
   console.log('Update Failed',e);
 });

database.ref().set({
 name: 'Govind Gupta',
 age:30,
 location:{
   city:'Mumbai',
   state: 'Maharashtra'
 }
});

database.ref('age').set(34);
database.ref('location/city').set('Indore');
const attr = {
 height:40,
 weight:90
};
database.ref('attributes').set(attr).then(()=>{
 console.log('set succced');
}).catch((e)=>{
 console.log('set Failed ', e);
});

database.ref('age')
 .remove()
 .then(()=>{
   console.log('Removed age succeed');
 })
 .catch((e)=>{
   console.log('Removed age Failed',e);
});
*/

