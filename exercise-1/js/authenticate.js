// JavaScript authentication file
$(function() {
	var config = {
		apiKey: "AIzaSyDpsLDR3ClbFD076UGEsWdZC6C_KA-8DY4",
		authDomain: "m13-ex1-ce6a7.firebaseapp.com",
		databaseURL: "https://m13-ex1-ce6a7.firebaseio.com",
		storageBucket: "m13-ex1-ce6a7.appspot.com",
		messagingSenderId: "155683451358"
	};

    firebase.initializeApp(config);

    var myRef = firebase.database().ref('ref-id');

    $("form").on("submit", function(event) {
    	event.preventDefault();
    	if(this.id == "sign-up"){
    		signUp();
    	}
    });

    $("#sign-in").on("click", function(event) {
    	event.preventDefault();
    	window.location = "sign-in.html";
    })



    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name

        // Create user, then set the user's display name
        var email = $("#email").val();
        var pass = $("#password").val();
        var dispName = $("#display").val();

        alert(email + " " + pass + " " + dispName);

		// var auth = firebase.auth();
		firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user){
			alert("createUserWithEmailAndPassword");
		    user.updateProfile({
		        displayName: dispName
		    }).then(function() {
		    	window.location = "index.html";
		    })
		    alert("inside create user");
		})
                // Set display name

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password



        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
