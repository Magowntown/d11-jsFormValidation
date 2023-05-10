// function verifyPassword() {
//   var lowerCaseLetters = /[a-z]/g;
//   let pw = document.getElementById("psw").value;
//   //check empty password field
//   if (pw == "") {
//     document.getElementById("passwordError").innerHTML =
//       "**Fill the password please!";
//     return false;
//   }

//   //minimum password length validation
//   if (pw.length < 8) {
//     document.getElementById("passwordError").innerHTML =
//       "**Password length must be atleast 8 characters";
//     return false;
//   }

//   //maximum length of password validation
//   if (pw.length > 15) {
//     document.getElementById("passwordError").innerHTML =
//       "**Password length must not exceed 15 characters";
//     return false;
//   } else {
//     alert("Password is correct");
//   }

//   if (document.getElementById("psw").value.match(lowerCaseLetters)) {
//     document.getElementById("letter").classList.remove("invalid");
//     document.getElementById("letter").classList.add("valid");
//   } else {
//     document.getElementById("letter").classList.remove("valid");
//     document.getElementById("letter").classList.add("invalid");
//   }
// }

let pswCheck = {
  lowerCaseLetters: /[a-z]/g,
  upperCaseLetters: /[A-Z]/g,
  eightCheck: function (psw) {
    if (psw.length >= 8) {
      let greenlight = document.createElement("span");
      greenlight.innerHTML = "Password length is correct";
      greenlight.style.color = "green";
      if (!document.getElementById("passBox").contains(greenlight)) {
        document.getElementById("passBox").appendChild(greenlight);
      } else {
        
    }
    } else {
      document.getElementById("passwordError").innerHTML =
        "**Password length must be atleast 8 characters";
    }
  },
  numberCheck: function (psw) {
    if (psw.match(this.numbers)) {
      document.getElementById("passwordError").innerHTML =
        "Password contains a number";
    } else {
      document.getElementById("passwordError").innerHTML =
        "Password does not contain a number";
    }
  },
};

function pswVerification() {
  let psw = document.getElementById("psw").value;

  if (psw == "") {
    document.getElementById("passwordError").innerHTML =
      "**Fill the password please!";
  } else {
    pswCheck.eightCheck(psw);
    pswCheck.numberCheck(psw);
  }
}
