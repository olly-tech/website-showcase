
# Code Review (AI)
        A code review of my website conducted by AI. Practicing using AI to support my programming development. This is the output:
## AI Output
/* General Styles */
body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f5f5f5;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    margin: 0;
    padding: 0 15px;
    background-image: url("images for website/main bg.jpeg");
    background-size: 1920px 1080px;
    background-repeat: repeat-y;
    min-height: 100vh;
    box-sizing: border-box;
}

/* Navigation Bar Styles (Header) */
nav {
    background-color: rgba(192, 246, 54, 0.748);
    padding: 10px 15px; 
    text-align: center;
    position: fixed;
    top: 0;
    left: 0; 
    width: 100vw; 
    z-index: 1000;
    box-sizing: border-box;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav ul li a:hover {
    background-color: #bbff3b;
}

/* Header Styles (if separate from nav) */
header {
    text-align: center;
    padding: 60px 20px 20px; 
}

/* Main Content */
main {
    text-align: center;
    padding: 20px;
}

/* Card Styling */
.recipe-card,
.method-section,
.My-Recipies-section {
    display: grid;
    gap: 20px;
    padding: 20px;
    margin: 20px auto;
    border-radius: 10px;
    background-color: rgba(192, 246, 54, 0.748);
    max-width: 1200px;
}

.recipe-card {
    grid-template-columns: 1fr 2fr 1fr;
}

.method-section {
    grid-template-columns: 1fr 2fr;
}

.My-Recipies-section {
    display: none;
    width: 60%;
    background: rgba(0, 0, 0, 0);
}

.recipe-image,
.method-image {
    grid-column: 1 / 2;
}

.recipe-image img,
.method-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
}

.recipe-content p,
.recipe-content ol,
.method-section p,
.ingredients ul,
.instructions ol {
    font-size: 20px;
    margin: 0;
    padding: 10px;
}

.method-section p {

    border-radius: 10px;
}

.ingredients ul,
.instructions ol {
    padding-left: 30px;
}

/* Navigation Buttons */
.My-Recipies-nav,
.methods-nav {
    text-align: center;
    margin: 20px 0;
}

.My-Recipies-nav button,
.methods-nav button {
    background-color: #bbff3b;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.My-Recipies-nav button:hover,
.methods-nav button:hover {
    background-color: #a2f900;
}

/* General Buttons */
button {
    background-color: #bbff3b;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 2px 2px 4px #000000;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #a2f900;
}

/* Hidden Class */
.hidden {
    display: none;
}

/* Sign-Up Page */
.SignUp main {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.SignUp fieldset {
    background-color: rgba(192, 246, 54, 0.748);
    padding: 20px;
    border: none;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.SignUp .form-group {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    gap: 10px;
}

.SignUp label {
    font-weight: bold;
}

.SignUp input,
.SignUp select,
.SignUp textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
}

/* Community Recipes */
.Community-Recipes main {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.Community-Recipes .header-section {
    text-align: center;
    display: grid;
    gap: 15px;
}

.Community-Recipes .community-cooking {
    justify-self: center;
}

.Community-Recipes .community-cooking img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

.Community-Recipes .recipes-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.Community-Recipes .recipe-card {
    grid-template-columns: 1fr;
}

.Community-Recipes .rating {
    unicode-bidi: bidi-override;
    direction: rtl;
    display: flex;
    justify-content: flex-start;
}

.Community-Recipes .rating span {
    position: relative;
    width: 1.1em;
    font-size: 20px;
    cursor: pointer;
}

.Community-Recipes .rating span:hover:before,
.Community-Recipes .rating span:hover ~ span:before,
.Community-Recipes .rating span.rated:before,
.Community-Recipes .rating span.rated ~ span:before {
    content: "\2605";
    position: absolute;
    color: gold;
}

.Community-Recipes .rating span:before {
    content: "\2606";
    position: absolute;
    color: #ccc;
}

.Community-Recipes .popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.Community-Recipes .popup-content {
    background-color: rgba(192, 246, 54, 0.748);
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #000000;
    width: 80%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.Community-Recipes .close-btn {
    justify-self: end;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
}

.Community-Recipes .close-btn:hover,
.Community-Recipes .close-btn:focus {
    color: black;
}

.Community-Recipes .popup-content form {
    display: grid;
    gap: 10px;
}

.Community-Recipes .popup-content fieldset {
    gap: 5px;
}


/* CSS for the home page */
.home-page p {
font-size: 20px;
background-color: rgba(192, 246, 54, 0.748);
color: rgb(255, 255, 255);
text-shadow: 2px 2px 4px #000000;
text-align: center;
border: 0cap;
border-radius: 10px;
}


/* Footer */
footer {
    background: rgba(192, 246, 54, 0.748);
    text-align: center;
    padding: 10px 15px;
    position: fixed;
    bottom: 0;
    left: 0; 
    width: 100vw; 
    box-sizing: border-box;
}

/* Scrollbar Styles */
::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

::-webkit-scrollbar-track {
    background: rgba(107, 107, 107, 0.74);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: rgba(186, 255, 59, 0.85);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #a2f900;
}

* {
    scrollbar-width: thin;
    scrollbar-color: rgba(186, 255, 59, 0.85) rgba(107, 107, 107, 0.74);
}

/* Responsive Adjustments */
@media (max-width: 600px) {
    .recipe-card,
    .method-section,
    .Community-Recipes .recipes-container {
        grid-template-columns: 1fr;
    }
    .SignUp .form-group {
        grid-template-columns: 1fr;
    }
}
## Actions
[x] CSS Variables for Consistency
[x] Background Image Optimization  
[x] Responsive Navigation
[x] Consistent Card Design
[x] Image Optimization  
[x] Unified Button Design
[x] Accessibility:
Add focus styles for keyboard navigation
[] Sticky Footer:
Ensure footer stays at the bottom with content overlap prevention
[x] Community Recipes
Popup Enhancements:
Add animation for smoother transitions
[x] review Scrollbar Consistency:
s  
[x] fixed spelling across html files and css