function show()
{
var user = document.getElementById('txt').value;
var password = document.getElementById('password').value;
var age = document.getElementById('age').value;
var address = document.getElementById('address').value;
//alert(user)
var obj = 
{
    Name: user,
    Password: password,
    Age: age,
    Address: address 
}

firebase.database().ref('/Customer').push(obj);
}