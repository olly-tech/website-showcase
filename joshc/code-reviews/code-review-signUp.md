- Create a new "code-review.md" file in your website's folder. 
- Go into ChatGPT (or W3C HTML Validator if you only have HTML so far)
- Copy all of your current code into ChatGPT and ask for a Code Review
- Copy ChatGPT's output into the "code-review.md" file.
    - You can start the file by saying something like:
        # Code Review (AI)
        A code review of my website conducted by AI. Practicing using AI to support my programming development. This is the output:
        ## AI Output
<!DOCTYPE html>
<html lang="en-gb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CFD.css">
    <title>Sign-Up</title>
    <!-- Load Google Sign-In API -->
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    
</head>
<body>
  <section class="SignUp">
  <nav>
        <ul>
            <li><a href="CFD.html">Home</a></li>
            <li><a href="Recipies.html">Recipes</a></li>
            <li><a href="Methods.html">Methods</a></li>
            <li><a href="Community Recipies.html">Community Recipes</a></li>
            <li><a href="SignUp.html">Sign-Up</a></li>
        </ul>
    </nav>

    <main>
        <h1>Sign-Up</h1>
        <p>Join our community and start sharing your recipes!</p>
        
        <form action="submit_form.php" method="post" id="signupForm">
            <fieldset>
                <legend>Join Us</legend>
                
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required minlength="6">
                </div>
                
                <button type="submit">Sign Up</button>
                
                <div class="google-signin-wrapper">
                    <h3>Or sign up with Google</h3>
                    <!-- Google Sign-In Button -->
                    <div id="g_id_onload"
                         data-client_id="YOUR_GOOGLE_CLIENT_ID"
                         data-callback="handleCredentialResponse"
                         data-auto_prompt="false">
                    </div>
                    <div class="g_id_signin"
                         data-type="standard"
                         data-size="large"
                         data-theme="outline"
                         data-text="signup_with"
                         data-shape="rectangular"
                         data-logo_alignment="left">
                    </div>
                </div>
            </fieldset>
        </form>
    </main>
  </section>
    <footer>Cooking for Dummies © 2025</footer>

    <script>
        // Initialize Google Sign-In
        function initializeGoogleSignIn() {
            google.accounts.id.initialize({
                client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with your actual Google Client ID
                callback: handleCredentialResponse,
                auto_select: false
            });
            
            // Render the Google Sign-In button
            google.accounts.id.renderButton(
                document.querySelector('.g_id_signin'),
                {
                    type: 'standard',
                    theme: 'outline',
                    size: 'large',
                    text: 'signup_with',
                    shape: 'rectangular',
                    logo_alignment: 'left'
                }
            );
        }

        // Handle Google Sign-In response
        function handleCredentialResponse(response) {
            console.log("Encoded JWT ID token: " + response.credential);
            alert("Successfully signed up with Google!");
        }

        // Form validation
        document.getElementById("signupForm").addEventListener("submit", function(event) {
            if (!this.checkValidity()) {
                event.preventDefault();
                alert("Please fill out all fields correctly.");
            } else {
                event.preventDefault(); // Remove for actual submission
                alert("Successfully signed up!");
                this.reset();
            }
        });

        // Load Google Sign-In when page loads
        window.onload = initializeGoogleSignIn;
    </script>
</body>
</html>

## Actions
   [x] fix spelling in body 
   [x] review nav bar 
   [x] review footer  
   [x] enhance form validation 
   [x] fixed spelling across html files and css

        

