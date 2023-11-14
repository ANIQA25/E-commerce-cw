function validateForm() {
  let textarea = document.getElementById("feedback").value;
  let radio = document.querySelector("input[name=rating]:checked");
  let text = "This field is required !";

  if((!radio) && (textarea.trim() == "")) {
    alert("Please rate our website !");
    document.getElementById("ratingAlert").innerHTML = text;
    document.getElementById("radio").style.border = "1px solid red";
    alert("Feedback is empty !");
    document.getElementById("feedbackAlert").innerHTML = text;
    document.getElementById("textarea").style.border = "1px solid red";
    return false;
  }

  if (!radio) {
    alert("Please rate our website !");
    document.getElementById("ratingAlert").innerHTML = text;
    document.getElementById("radio").style.border = "1px solid red";
    document.getElementById("feedbackAlert").style.display = "none";
    document.getElementById("textarea").style.border = "none";
    return false;
  }

  if (textarea.trim() == "") {
    alert("Feedback is empty !");
    document.getElementById("feedbackAlert").innerHTML = text;
    document.getElementById("textarea").style.border = "1px solid red";
    document.getElementById("ratingAlert").style.display = "none";
    document.getElementById("radio").style.border = "none";
    return false;
  }

  else { 
    hideForm();
    return true;
  }
}


function hideForm(){
    let hide = document.querySelector("#myForm");
    hide.style.display = "none";
    document.getElementById("hidden-message").style.display = "block";

}
