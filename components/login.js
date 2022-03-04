document.getElementById("login").innerHTML = `



<div class="loginContainer">
<div class="card">
    <div class="titleContainer">
     
    <h1>LOGIN<span>.</span></h1>
    </div>
    <form id="logInForm">
    <input type="email" name="UserEmail" placeholder="Email" id="username" required>
    <input type="password" name="UserPassword" placeholder="Password" id="password" required >
    <button type="submit" id="loginBtn">Login</button>
    </form>
    <span id="errorMsg"></span>
    <span id="notAmember">Not a member? You can Sign Up <a href="signUp.html">here</a></span>
  </div>


    `  


