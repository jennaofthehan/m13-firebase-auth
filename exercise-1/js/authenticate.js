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

    var currentUser = {};

    var chats = firebase.database().ref('chats');

    $("form").on("submit", function(event) {
    	event.preventDefault();
    	if(this.id == "sign-up"){
    		signUp();
    	}
    });

    $("form").on("submit", function(event) {
        event.preventDefault();
        if(this.id == "sign-in"){
            signIn();
        }
    });

    $("#sign-in-link").on("click", function(event) {
    	event.preventDefault();
    	window.location = "sign-in.html";
    });


    $("#log-out").on("click", function(event) {
        alert("onClick logout");
        //event.preventDefault();
        signOut();
    });

    $("#chat-button").on("click", function(event) {
        alert("chat");
        var newMessage = $("#message").val();
        var user = currentUser;
        alert("user: " + currentUser.displayName);
        alert("message: " + newMessage);
        chats.push({
            user:currentUser.displayName,
            message: newMessage
        })
    });


    chats.on('child_added', function(snapshot){
        var message = snapshot.val();
        if(message !=null){
            Object.keys(items).forEach(function(key){
                alert("key: " + key + " items[key]: " + items[key]);
                renderChat(key, items[key]);
            })
        }  
    })



    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            currentUser = user;
            if(window.location != "index.html"){
                window.location = "index.html";
            }
        }
        else{
            if(window.location == "index.html"){
                window.location = "sign-in.html";
            }
        }
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
        var email = $("#in-email").val();
        var password = $("#in-password").val();
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
            window.location = "index.html";
        }).catch(function(error){
            alert(error);
        });


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect
        alert("signout");
        firebase.auth().signOut().then(function(){
            window.location = "sign-in.html";
        }).catch(function(error){
            alert(error);
        })


    };

    // Assign event lister to form submission



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
