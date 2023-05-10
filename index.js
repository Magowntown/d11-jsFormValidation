function verifyPassword() {
  var lowerCaseLetters = /[a-z]/g;
  let pw = document.getElementById("psw").value;
  //check empty password field
  if (pw == "") {
    document.getElementById("passwordError").innerHTML =
      "**Fill the password please!";
    return false;
  }

  //minimum password length validation
  if (pw.length < 8) {
    document.getElementById("passwordError").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }

  //maximum length of password validation
  if (pw.length > 15) {
    document.getElementById("passwordError").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  } else {
    alert("Password is correct");
  }

  if (document.getElementById("psw").value.match(lowerCaseLetters)) {
    document.getElementById("letter").classList.remove("invalid");
    document.getElementById("letter").classList.add("valid");
  } else {
    document.getElementById("letter").classList.remove("valid");
    document.getElementById("letter").classList.add("invalid");
  }
}
