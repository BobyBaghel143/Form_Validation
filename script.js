function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  // sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true; // false;
  clearErrors();

  // perform validation and if validation fails, set the value of returnval to false.
  var name = document.forms["myForm"]["fname"].value;
  // console.log(name);
  if (name.length < 5) {
    seterror("name", "*Length of name is too short!");
    returnval = false;
  }
  if (name.length == 0) {
    seterror("name", "*Length of name cannot be zero please enter the name!");
    returnval = false;
  }

  var email = document.forms["myForm"]["femail"].value;
  if (email.length > 16) {
    seterror("email", "*Email length is too long!");
    returnval = false;
  }

  var phone = document.forms["myForm"]["fphone"].value;
  if (phone.length != 10) {
    seterror("phone", "*Phone should be of 10 digits!");
    returnval = false;
  }

  var password = document.forms["myForm"]["fpass"].value;
  if (password.length <= 8) {
    // Quiz:- create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter.
    seterror("pass", "*Password should be atleast 8 character!");
    returnval = false;
  }
  else if (password != character) {
    seterror("pass", "*Inside password atleast one Alphabate character!")
    returnval = false;
  }
  else if (password != special_Character) {
    seterror("pass", "*Inside password atleat one special character!")
  }

  var cpassword = document.forms["myForm"]["cfpass"].value;
  if (cpassword != password) {
    seterror("cpass", "*Password and Confirm pasword should not mathch!");
    returnval = false;
  }

  return returnval;
}
