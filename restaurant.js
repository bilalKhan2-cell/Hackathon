function store()
{
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var country = document.getElementById('country').value;
var city = document.getElementById('city').value;
var password = document.getElementById('password').value;

    var obj = 
    {
        Name: name.value,
        Email: email.value,
        Password: password.value,
        Country:country.value,
        City:city.value,
    }

    firebase.database().ref('/Restaurant').push(obj);
}