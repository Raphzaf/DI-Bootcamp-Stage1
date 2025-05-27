const form = document.getElementById("user-form");
console.log("Form:", form);

const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
console.log("By ID - First Name Input:", inputFname);
console.log("By ID - Last Name Input:", inputLname);

const inputByName = document.getElementsByName("firstname")[0];
const inputByLastName = document.getElementsByName("lastname")[0];
console.log("By NAME - First Name:", inputByName);
console.log("By NAME - Last Name:", inputByLastName);

const userAnswerList = document.querySelector(".usersAnswer");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const firstName = inputFname.value.trim();
  const lastName = inputLname.value.trim();

  if (firstName === "" || lastName === "") {
    alert("Please fill out both fields.");
    return;
  }

  userAnswerList.innerHTML = "";

  const li1 = document.createElement("li");
  li1.textContent = firstName;
  const li2 = document.createElement("li");
  li2.textContent = lastName;

  userAnswerList.appendChild(li1);
  userAnswerList.appendChild(li2);
});
