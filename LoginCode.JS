function CredCheck();{
    //Data gathering
console.log("CredCheck started...")
var firstName= document.getElementById("fname").value;
console.log("First name: "+ firstName);
var lastName=doument.getElementById("lname").value;
console.log("Last name:"+ lastName);
var fullname = firstname + "" + lastName;
console.log("Full name:"+ fullname);
var badgenum = document.getElementById("badgeID").value;
console.log("THe length of the fullName variable is "+ badgenum);
// Name input validation
var namelength = fullname.length;
console.log("the length of fullname is" + namelength);
// Login authentificaton algorihm
if (namelength > 20 || namelength ){
    document.getElementById("loginStatus").innerHTML = "invalid full name! please try again.";
} else if (badgenum > 999 || badgenum < 1){
    document.getElementById("loginStatus").innerHTML = "invalid badge number! Please try again.";
}else{
    document.getElementById("loginStatus").innerHTML = "access granted, welcome to UATSpace Page!";
    alert("access granted, welcome"+ fullname +"to UATSpace Page!");
    location.replace("./UATSpaxePage.html");
}
}
