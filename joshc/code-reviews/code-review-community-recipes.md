
# Code Review (AI)
 A code review of my website conducted by AI. Practicing using AI to support my programming development. This is the output:
## AI Output
<!DOCTYPE html>
<html>
<head>
    <title>Community Recipes</title>
    <link rel="stylesheet" href="CFD.css">
</head>

<body>
  <section class="Community-Recipes">
    <nav> 
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Recipies.html">Recipes</a></li>
            <li><a href="Methods.html">Methods</a></li>
            <li><a href="Community Recipies.html">Community Recipes</a></li>
            <li><a href="SignUp.html">Sign-Up</a></li>
        </ul>
    </nav>

    <main>
        <section class="header-section">
            <h1>Community Recipes</h1>
            <p>Share your recipes and methods with the community!</p>
            <div class="community-cooking">
                <img src="images for website/comunity cooking.webp" alt="image of people cooking together">
            </div>
            <button id="openPopup">Submit Your Recipe</button>
        </section>

        <h2>Submitted Recipes</h2><br>
        <section class="recipes-container">
            
            <div class="recipe-card" data-ratings="[1]" data-rating-count="1">
                <h2>Grandma's Chocolate Chip Cookies</h2>
                <div class="rating" data-average="4">
                    <span data-value="5"></span>
                    <span data-value="4"></span>
                    <span data-value="3"></span>
                    <span data-value="2"></span>
                    <span data-value="1"></span>
                </div>
                <p>Average Rating: <span class="average-rating">4.0</span> (<span class="rating-count">1</span> review)</p>
                <div class="recipe-details">
                    <p><strong>Submitted by:</strong> Jane Doe</p>
                    <p><strong>Meal Type:</strong> Dessert</p>
                    <p><strong>Diet:</strong> Vegetarian</p>
                    <p><strong>Spice Level:</strong> Sweet</p>
                    <p><strong>Difficulty:</strong> Easy</p>
                    <p><strong>Cook Time:</strong> 0 hours 30 minutes</p>
                </div>
                <h4>Ingredients:</h4>
                <p>1 cup butter, 3/4 cup sugar, 3/4 cup brown sugar, 1 tsp vanilla, 2 eggs, 2 1/4 cups flour, 1 tsp baking soda, 1/2 tsp salt, 2 cups chocolate chips</p>
                <h4>Instructions:</h4>
                <p>Preheat oven to 375°F. Cream butter and sugars. Add vanilla and eggs. Mix in dry ingredients. Stir in chocolate chips. Drop by spoonfuls onto baking sheet. Bake 9-11 minutes.</p>
                <img src="images for website\cookies.jpg" alt="Chocolate Chip Cookies">
            </div>
        </section>

        <div id="recipePopup" class="popup">
            <div class="popup-content">
                <span class="close-btn">×</span>
                <h2>Submit Your Recipe</h2>
                <form id="recipeForm" action="submit_recipe.php" method="POST" enctype="multipart/form-data">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" required minlength="3">

                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="recipeTitle">Recipe Title:</label>
                    <input type="text" id="recipeTitle" name="recipeTitle" required>

                    <label for="mealType">Meal Type:</label>
                    <select name="mealType" id="mealType" required>
                        <option value="">Select Meal Type</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="dessert">Dessert</option>
                        <option value="snack">Snack</option>
                        <option value="drink">Drink</option>
                    </select>

                    <label for="diet">Diet Preference:</label>
                    <select name="diet" id="diet" required>
                        <option value="">Select Preference</option>
                        <option value="vegan">Vegan</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="meat">Meat</option>
                    </select>

                    <fieldset>
                        <legend>Spice Level</legend>
                        <input id="sweet" type="radio" name="spiceLevel" value="01" required>
                        <label for="sweet">Sweet</label>
                        <input id="mild" type="radio" name="spiceLevel" value="02">
                        <label for="mild">Mild</label>
                        <input id="medium" type="radio" name="spiceLevel" value="03">
                        <label for="medium">Medium</label>
                        <input id="hot" type="radio" name="spiceLevel" value="04">
                        <label for="hot">Hot</label>
                        <input id="veryHot" type="radio" name="spiceLevel" value="05">
                        <label for="veryHot">Very Hot</label>
                    </fieldset>

                    <fieldset>
                        <legend>Difficulty Level</legend>
                        <input id="easy" type="radio" name="difficulty" value="01" required>
                        <label for="easy">Easy</label>
                        <input id="medium1" type="radio" name="difficulty" value="02">
                        <label for="medium1">Medium</label>
                        <input id="hard" type="radio" name="difficulty" value="03">
                        <label for="hard">Hard</label>
                        <input id="veryHard" type="radio" name="difficulty" value="04">
                        <label for="veryHard">Very Hard</label>
                    </fieldset>

                    <div class="cook-time">
                        <h4>Cook Time</h4>
                        <label for="hours">Hours:</label>
                        <input type="number" id="hours" name="hours" min="0" required>
                        <label for="minutes">Minutes:</label>
                        <input type="number" id="minutes" name="minutes" min="0" max="59" required>
                    </div>

                    <label for="ingredients">Ingredients:</label>
                    <textarea id="ingredients" name="ingredients" rows="5" required></textarea>

                    <label for="instructions">Instructions:</label>
                    <textarea id="instructions" name="instructions" rows="5" required></textarea>

                    <label for="image">Upload Image:</label>
                    <input type="file" id="image" name="image" accept="image/*">

                    <button type="submit">Submit Recipe</button>
                </form>
            </div>
        </div>
    </main>

    <script>
        const popup = document.getElementById("recipePopup");
        const openBtn = document.getElementById("openPopup");
        const closeBtn = document.getElementsByClassName("close-btn")[0];
        const form = document.getElementById("recipeForm");
        const recipesContainer = document.querySelector(".recipes-container");

        // Open popup
        openBtn.onclick = function() {
            popup.style.display = "block";
        }

        // Close popup
        closeBtn.onclick = function() {
            popup.style.display = "none";
            form.reset();
        }

        // Close popup when clicking outside
        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
                form.reset();
            }
        }

        // Initialize existing ratings
        function updateRatingDisplay(card) {
            const ratings = JSON.parse(card.dataset.ratings || '[]');
            const average = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;
            const ratingCount = ratings.length;
            
            card.querySelector('.average-rating').textContent = average;
            card.querySelector('.rating-count').textContent = ratingCount;
            card.querySelector('.rating').dataset.average = average;

            const stars = card.querySelectorAll('.rating span');
            stars.forEach(star => {
                if (parseFloat(star.dataset.value) <= average) {
                    star.classList.add('rated');
                } else {
                    star.classList.remove('rated');
                }
            });
        }

        // Handle rating clicks
        document.querySelectorAll('.recipe-card .rating span').forEach(star => {
            star.onclick = function() {
                const card = this.closest('.recipe-card');
                const ratingValue = parseInt(this.dataset.value);
                let ratings = JSON.parse(card.dataset.ratings || '[]');
                ratings.push(ratingValue);
                card.dataset.ratings = JSON.stringify(ratings);
                card.dataset.ratingCount = ratings.length;
                updateRatingDisplay(card);
            };
        });

        // Initialize existing recipes
        document.querySelectorAll('.recipe-card').forEach(updateRatingDisplay);

        // Form submission with recipe display
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            if (!this.checkValidity()) {
                alert("Please fill out all required fields correctly.");
                return;
            }

            const name = document.getElementById("name").value;
            const recipeTitle = document.getElementById("recipeTitle").value;
            const mealType = document.getElementById("mealType").value;
            const diet = document.getElementById("diet").value;
            const spiceLevel = document.querySelector('input[name="spiceLevel"]:checked').nextElementSibling.textContent;
            const difficulty = document.querySelector('input[name="difficulty"]:checked').nextElementSibling.textContent;
            const hours = document.getElementById("hours").value;
            const minutes = document.getElementById("minutes").value;
            const ingredients = document.getElementById("ingredients").value;
            const instructions = document.getElementById("instructions").value;

            const recipeCard = document.createElement("div");
            recipeCard.className = "recipe-card";
            recipeCard.dataset.ratings = '[]';
            recipeCard.dataset.ratingCount = '0';
            recipeCard.innerHTML = `
                <h3>${recipeTitle}</h3>
                <div class="rating" data-average="0">
                    <span data-value="5"></span>
                    <span data-value="4"></span>
                    <span data-value="3"></span>
                    <span data-value="2"></span>
                    <span data-value="1"></span>
                </div>
                <p>Average Rating: <span class="average-rating">0.0</span> (<span class="rating-count">0</span> reviews)</p>
                <div class="recipe-details">
                    <p><strong>Submitted by:</strong> ${name}</p>
                    <p><strong>Meal Type:</strong> ${mealType}</p>
                    <p><strong>Diet:</strong> ${diet}</p>
                    <p><strong>Spice Level:</strong> ${spiceLevel}</p>
                    <p><strong>Difficulty:</strong> ${difficulty}</p>
                    <p><strong>Cook Time:</strong> ${hours} hours ${minutes} minutes</p>
                </div>
                <h4>Ingredients:</h4>
                <p>${ingredients}</p>
                <h4>Instructions:</h4>
                <p>${instructions}</p>
            `;

            const imageInput = document.getElementById("image");
            if (imageInput.files && imageInput.files[0]) {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(imageInput.files[0]);
                img.alt = recipeTitle;
                recipeCard.appendChild(img);
            }

            recipesContainer.appendChild(recipeCard);

            recipeCard.querySelectorAll('.rating span').forEach(star => {
                star.onclick = function() {
                    const card = this.closest('.recipe-card');
                    const ratingValue = parseInt(this.dataset.value);
                    let ratings = JSON.parse(card.dataset.ratings || '[]');
                    ratings.push(ratingValue);
                    card.dataset.ratings = JSON.stringify(ratings);
                    card.dataset.ratingCount = ratings.length;
                    updateRatingDisplay(card);
                };
            });

            updateRatingDisplay(recipeCard);

            alert("Thank you for submitting your recipe!");
            popup.style.display = "none";
            form.reset();
        });
    </script>
    </section>
</body>
</html>
       


 ## Actions
[x] Semantic Structure:
Add proper HTML5 structure and move <footer> outside <section>
[x] Image Alt Text:
Improve alt attributes for accessibility:
[x] Image Alt Text:
Improve alt attributes for accessibility:
[x] Form Submission:
Improve validation and feedback
[x] SEO Optimization:
Add meta tags
[x] fix submited recipe card so image is a fix size
[x] fixed spelling across html files and css
[] fix image styling 




