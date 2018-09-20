import * as firebase from 'firebase';
import {config} from '../config';


  firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  firebaseDB,
  googleAuth
}
















  // firebaseDB.ref().set({
  //   name:"maniek",
  //   lastname: "podolski",
  //   age: 35,
  //   car: {
  //     brand: "audi",
  //     color:"silver"
  //   },
  //   parents: ["Mario", "martha"]
  // });
  // firebaseDB.ref("car/brand").set("audi a6");
  // firebaseDB.ref("skills").set(["talking","Walking"])
  // firebaseDB.ref("sport").set("billard")
  // .then(()=> {
  //   console.log("success")

  // }).catch((e)=> {
  //   console.log(e)
  // });

  // firebaseDB.ref("skills/0").remove()
  // .then(()=> {
  //   console.log("data removed")

  // }).catch((e)=> {
  //   console.log(e)
  // });

  // firebaseDB.ref().update({
  //   name: "mariusz",
  //   lastname:"witkowski"
  // })
  // .then(()=> {
  //   console.log("data updated")

  // }).catch((e)=> {
  //   console.log(e)
  // });

  // firebaseDB.ref().once('value')
  // .then((snapshot)=> {
  //   console.log(snapshot.val())

  // }).catch((e)=> {
  //   console.log(e)
  // });
  
  // firebaseDB.ref('car/color').once('value')
  // .then((snapshot)=> {
  //   console.log(snapshot.val())

  // }).catch((e)=> {
  //   console.log(e)
  // });

  // firebaseDB.ref().on('value',(snapshot)=> {
  //   console.log(snapshot.val());
  // })

  // setTimeout(()=>{
  //   firebaseDB.ref("car/brand").set("audi")
  // },5000)


  // firebaseDB.ref().on('value',(snapshot)=> {
  //   console.log(snapshot.val());
  // })


  // firebaseDB.ref().on('child_removed',(snapshot)=> {
  //   console.log(snapshot.key, snapshot.val());
  // })

  // firebaseDB.ref().on('child_changed',(snapshot)=> {
  //   console.log(snapshot.key, snapshot.val());
  // })

  // firebaseDB.ref().on('child_added',(snapshot)=> {
  //   console.log(snapshot.key, snapshot.val());
  // })

// firebaseDB.ref().set([
//   {
//     id:1,
//     name:"maniek",
//     lastname:"podolski",
//   },
//   {
//     id:2,
//     name:"aurelia",
//     lastname:"witkaska",
//   }
// ])
// firebaseDB.ref('users').push({
 
//     id:3,
//     name:"natalia",
//     lastname:"kwiatek"
 
// })
// firebaseDB.ref('users/-LMqLrKIEnQwxFu4lXX6').once('value').then((snapshot)=> {
//   console.log(snapshot.val())
// })

// firebaseDB.ref('users/-LMqLrKIEnQwxFu4lXX6').update({
//   name: "mariuszek"
// })

// firebaseDB.ref('users').once('value').then((snapshot)=> {
//  const users = [];
//  snapshot.forEach((childSnapshot)=> {
//   users.push({
//     id: childSnapshot.key,
//     ...childSnapshot.val()
//   })
//  })
//  console.log(users)
// })

// firebaseDB.ref('users').orderByChild('age').once('value').then((snapshot)=> {
//   const users = [];
//   snapshot.forEach((childSnapshot)=> {
//    users.push({
//      id: childSnapshot.key,
//      ...childSnapshot.val()
//    })
//   })
//   console.log(users)
//  })

// firebaseDB.ref('users').limitToFirst(1).once('value').then((snapshot)=> {
//   const users = [];
//   snapshot.forEach((childSnapshot)=> {
//    users.push({
//      id: childSnapshot.key,
//      ...childSnapshot.val()
//    })
//   })
//   console.log(users)
//  })


// firebaseDB.ref('users').orderByChild('age').limitToLast(1).once('value').then((snapshot)=> {
//   const users = [];
//   snapshot.forEach((childSnapshot)=> {
//    users.push({
//      id: childSnapshot.key,
//      ...childSnapshot.val()
//    })
//   })
//   console.log(users)
//  })

// firebaseDB.ref('users').push({
//   name:"tomasz",
//   lastname: "borkowski"
// })

// firebaseDB.ref('users').orderByChild('lastname').equalTo('borkowski').once('value').then((snapshot)=> {
//   console.log(snapshot.val());
// })

