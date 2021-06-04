// Add your code here
// document.addEventListener('DOMContentLoaded', function() {
//     submitData();
// });
const url = 'http://localhost:3000/users'

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    fetch(url, configObject)
        .then(resp => resp.json())
        .then(function(data) {
            console.log("this is a test", data)
            document.body.innerHTML += data["id"]
        })
        .catch(function(error){
            document.body.innerHTML += 'Unauthorized Access';
            console.log(error);
        });

} 