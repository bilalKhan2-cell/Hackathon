var user = document.getElementById('email');
var password = document.getElementById('password');
console.log(user.value)
function get()
{
    firebase.auth().createUserWithEmailAndPassword( user.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;

      console.log(user)

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
            console.log(errorCode,errorMessage)
    });
}