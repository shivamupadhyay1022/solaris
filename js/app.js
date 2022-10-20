
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR0dQvCgbwr4YyZeu6WnXDyO7bj2Zn1nE",
  authDomain: "solaris-tech-ltd.firebaseapp.com",
  databaseURL: "https://solaris-tech-ltd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "solaris-tech-ltd",
  storageBucket: "solaris-tech-ltd.appspot.com",
  messagingSenderId: "312815428256",
  appId: "1:312815428256:web:3f85dfc232c614ec0adfc5",
  measurementId: "G-4JB224LWQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().refFromURL('users').child(userId).once('value');
//   }

  

const auth = firebase.auth()

//Signup Function
let signUpButton = document.getElementById('signup')
signUpButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  console.log("clicked")
    
  var email = document.getElementById("inputEmail")
  var password = document.getElementById("inputPassword")
//   writeUserData(email,email,password,password);



  auth.createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    location.reload();
    // Signed in 
    var user = userCredential.user;
    console.log("user",user.email)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error code", errorCode)
    console.log("error Message", errorMessage)
  });



})








let signInButton = document.getElementById('signin')
signInButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  console.log("clicked")

  var email = document.getElementById("inputEmail")
  var password = document.getElementById("inputPassword")

  auth.signInWithEmailAndPassword(email.value, password.value) 
  .then((userCredential) => {
    // location.reload();
    // Signed in 
    var user = userCredential.user;
    console.log("user",user.email)
    window.location = "dash.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // alert("error code", errorCode)
    alert( errorMessage)
  });
 })



//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function(user) {
if (user) {

  var email = user.email

  var users = document.getElementById("user")
  var text = document.createTextNode(email);

  users.appendChild(text);

  console.log(users)
  //is signed in
} else {
  //no user signed in
}
})



