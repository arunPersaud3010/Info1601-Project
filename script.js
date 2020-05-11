function createPost() {
  var txtval=document.getElementById('in1').value;
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode(txtval);
  newItem.appendChild(textnode);

  var list = document.getElementById("container");
  list.insertBefore(newItem, list.childNodes[0]);
}

function check(form){
  
  if(form.username.value == "username" && form.password.value == "password123"){
  window.open("https://chatter.arunpersaud3010.repl.co/index.html")
  }
  else{
    alert("Username or Password dont match")
  }
}

function verify(){
  let didConfirm = confirm("Are you sure you want to log-out?");
  if(didConfirm)
  window.location.replace("https://chatter.arunpersaud3010.repl.co/login.html")
}