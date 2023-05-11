let pswCheck = {
  lowerCaseLetters: /[a-z]/g,
  upperCaseLetters: /[A-Z]/g,
  numbers: /[0-9]/g,
  eightCheck: function (psw) {
    if (psw.length >= 8) {
      document.getElementById("pswErrLength").innerHTML =
        "Password length is correct";
      document.getElementById("pswErrLength").style.color = "green";
    } else {
      document.getElementById("pswErrLength").innerHTML =
        "**Password length must be at least 8 characters";
      document.getElementById("pswErrLength").style.color = "red";
    }
  },
  numberCheck: function (psw) {
    if (psw.match(this.numbers)) {
      document.getElementById("pswErrNum").innerHTML =
        "Password contains a number";
      document.getElementById("pswErrNum").style.color = "green";
    } else {
      document.getElementById("pswErrNum").innerHTML =
        "Password does not contain a number";
      document.getElementById("pswErrNum").style.color = "red";
    }
  },
  lowerCheck: function (psw) {
    if (psw.match(this.lowerCaseLetters)) {
      document.getElementById("pswErrLowCase").innerHTML =
        "Password contains a lower case letter";
      document.getElementById("pswErrLowCase").style.color = "green";
    } else {
      document.getElementById("pswErrLowCase").innerHTML =
        "Password does not contain a lower case letter";
      document.getElementById("pswErrLowCase").style.color = "red";
    }
  },
  upperCheck: function (psw) {
    if (psw.match(this.upperCaseLetters)) {
      document.getElementById("pswErrUpCase").innerHTML =
        "Password contains an upper case letter";
      document.getElementById("pswErrUpCase").style.color = "green";
    } else {
      document.getElementById("pswErrUpCase").innerHTML =
        "Password does not contain an upper case letter";
      document.getElementById("pswErrUpCase").style.color = "red";
    }
  },
  clearErrors: function() {
    document.getElementById("pswErrLength").innerHTML = "";
    document.getElementById("pswErrNum").innerHTML = "";
    document.getElementById("pswErrLowCase").innerHTML = "";
    document.getElementById("pswErrUpCase").innerHTML = "";
  }
};

function pswVerification() {
  let psw = document.getElementById("psw").value;
  
  if (psw === "") {
    pswCheck.clearErrors();
    document.getElementById("pswErrorBlank").innerHTML =
      "**Fill the password please!";
  } else {
    document.getElementById("pswErrorBlank").innerHTML = "";
    pswCheck.lowerCheck(psw);
    pswCheck.upperCheck(psw);
    pswCheck.numberCheck(psw);
    pswCheck.eightCheck(psw);
  }
}
