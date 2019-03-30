
function clickButton() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  window.alert("You BOUTTA submit dis message! U sure you wanna...!?")
  $("#submit-image").append(`<img class="img-circle" src="images/smiley.png" />`);
  $("#submit-image").append(`<p id="submit-message">Thanks for contributing!
  </p>`);
};

function loginButton() {
	if (!firebase.auth().currentUser) {//if user not logged in, handle login
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/plus.login');
		firebase.auth().signInWithPopup(provider).then(function(result) {
			console.log("success");
		}).catch(function(error) {
			console.error("error", error);
		});
	} else { //handle logout
		firebase.auth().signOut();
	}
	//This disables th ebutton until login or logout is successful.
	$('#btn-login').attr("disabled", true);
}


