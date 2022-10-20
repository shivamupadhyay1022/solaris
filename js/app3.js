var firebaseConfig = {
    apiKey: "AIzaSyDR0dQvCgbwr4YyZeu6WnXDyO7bj2Zn1nE",
    authDomain: "solaris-tech-ltd.firebaseapp.com",
    databaseURL: "https://solaris-tech-ltd-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "solaris-tech-ltd",
    storageBucket: "solaris-tech-ltd.appspot.com",
    messagingSenderId: "312815428256",
    appId: "1:312815428256:web:3f85dfc232c614ec0adfc5",
    measurementId: "G-4JB224LWQV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var auth = firebase.auth();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('inputEmail').value;
var password = document.getElementById('inputPassword').value;
auth.createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
    alert(errormsg);
});
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        email : getId('inputEmail'),
        password : getId('inputPassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
window.open("dash.html","_self");

console.log("registered");
}
function SignIn(){
    
    console.log("World!");
    sleep(200000);
    auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          console.log("signed in");
          auth.signOut();
          console.log("signed out");
          // ...
        } else {
          // User is signed out
          // ...
          console.log("signed out");
        }
      });
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    console.log("sent2");
    promise.catch( e => alert(e.msg));
    window.open("dash.html","_self");
}

function  getId(id){
    return document.getElementById(id).value;
}