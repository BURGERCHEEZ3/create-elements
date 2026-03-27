console.log("script started");

function start() {
    console.log("click");

    //creating the heading
    let heading = document.createElement("h1")

    //set the headings text
    heading.innerText = "Attendence"

    //set the styles
    heading.style.color = "purple";
    heading.style.textDecoration = "underline";

    //add heading to the page
    document.body.appendChild(heading);

    //prompt for name
    let userName = prompt("enter your name");
    console.log(userName)
    addName(userName);

    //getting last name
    let userLastName = prompt("enter your last name");
    console.log(userLastName + userName);
    addName(userName);
    addName(userLastName);
}

function addName(newName, LastName) {
     let h2 = document.createElement("h2");

     h2.innerText = newName;

     document.body.appendChild(h2);

}