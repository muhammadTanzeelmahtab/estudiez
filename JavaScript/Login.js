function login() {
    var field = document.getElementById("field").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (name !== "" && field !== "" && password !== "") {
        if(field == "Student"){
            location.replace("Views/Student.html")
        }
        else if(field == "Teacher"){
            location.replace("Views/Teacher.html")
        }
        else if(field == "Guardian"){
            location.replace("Views/Guardian.html")
        }
        else{
            alert("Sorry! "+name+" There is an error while processing your request")
        }

    }
    else {
        alert("Sorry! "+name+" There is an error while processing your request")
    }

}