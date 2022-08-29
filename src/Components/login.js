
let validate = ( event) => {
    
    event.preventDefault();
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let password = document.getElementById("exampleInputPassword1")

    if(strongRegex.test(password.value)) {

        alert("Login Successful")

  }

  else{
    alert("Password must pass creteria")
    let password = document.getElementById("exampleInputPassword1")
    password.style.borderColor='red';
  }

}
function Login() {

    
    return(
<div className="container">
    <div class="row align-items-center">
    <div class="col"></div>
    <div class="col">
        <div id="logo" ><img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/4454d7cf-8e6c-4892-8a60-2cfc5c533c2b.png?auto=format&size=150" alt="logo" height={'55px'} /></div>
   
    <form className="mt-3" onSubmit={validate}>
    <h3><b>sign in</b></h3>
        <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"><b>Your Email:</b> </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div class="mb-2">
            <label for="exampleInputPassword1" class="form-label"><b>Your Password:</b> </label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-1 form-check">
            <input type="checkbox" class="form-check-input" id="Check1"/>
            <label class="form-check-label" for="Check1"><b>Keep me signed in on this computer</b></label>
        </div>
        <button type="submit" class="btn btn-success btn-lg">Sign in to Kissmetrics</button>
        <span class="or-rule"> or</span>
        <a href="/auth/google" class="button button-google-auth">
        Sign in with Google
      </a>
</form>
    </div>
    <div class="col"></div>
  </div>
</div>





    );

}

export default Login;