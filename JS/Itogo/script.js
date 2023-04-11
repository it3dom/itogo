document.querySelector(".start").onclick = function () {
    const userPassFirst = document.querySelector("#password").value;
    const userPassSecond = document.querySelector("#retype").value;
  
    if (userPassFirst == "") {
      document.getElementById("password").style = "border: 1px solid red";
      document.getElementById("retype").style = "border: 1px solid red";
    } else if (userPassFirst != userPassSecond) {
      document.getElementById("password").style = "border: 1px solid red";
      document.getElementById("retype").style = "border: 1px solid red";
      return false;
    } else if (userPassFirst == userPassSecond) {
      document.getElementById("password").style = "border: 1px solid green";
      document.getElementById("retype").style = "border: 1px solid green";
    }
    return true;
  };