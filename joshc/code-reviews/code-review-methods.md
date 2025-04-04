# Code Review (AI) 
        A code review of my website conducted by AI. Practicing using AI to support my programming development. This is the output:
## AI Output 
<!DOCTYPE html>
<html>
<head>
    <title>Methods</title>
    <link rel="stylesheet" href="CFD.css">

</head>
<body>
    <!-- Navigation Bar -->
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
        <!-- Page Header -->
        <header>
            <h1>Methods</h1>
        </header>

        <p>Here are some methods that I use to make my recipes better.</p>

        <!-- Button Navigation for methods -->
        <div class="methods-nav">
            <button onclick="toggleSection('brining')">Brining</button>
            <button onclick="toggleSection('rubs')">Rubs</button>
            <button onclick="toggleSection('marinading')">Marinading</button>
            <button onclick="toggleSection('taste')">Taste</button>
            <button onclick="toggleSection('layering')">Layering</button>
        </div>

        <!-- Method Sections -->
        <section>
            <div id="brining" class="method-section hidden">
                <div class="method-image">
                    <img src="images for website\chicken-brine.jpg" alt="Image of a whole chicken in a brine"> 
                </div>
                <div>
                    <h2>Brining</h2>
                    <p>Brining improves the ability for lean cuts of meat (such as turkey, chicken, and pork) 
                        to retain their moisture during the cooking process.</p>
                </div>
            </div>

            <div id="rubs" class="method-section hidden">
                <div class="method-image">
                    <img src="images for website\dry rub.jpg" alt="Image of meat with dry rub">
                </div>
                <div>
                    <h2>Rubs</h2>
                    <p>Dry rubs are great on their own but can be spectacular when finished with a sauce.</p>
                </div>
            </div>

            <div id="marinading" class="method-section hidden">
                <div class="method-image">
                    <img src="images for website\Marinades-V2.jpg" alt="Image of meat marinating">
                </div>
                <div>
                    <h2>Marinading</h2>
                    <p>Marinating meat works by adding flavor and aiding texture.</p>
                </div>
            </div>

            <div id="taste" class="method-section hidden">
                <div class="method-image">
                    <img src="images for website\taste.webp" alt="Image of different tasting and textured herbs">
                </div>
                <div>
                    <h2>Taste</h2>
                    <p>You should be tasting each component throughout the cooking process.</p>
                </div>
            </div>

            <div id="layering" class="method-section hidden">
                <div class="method-image">
                    <img src="images for website\layering flavors.jpg" alt="Image of layered ingredients">
                </div>
                <div>
                    <h2>Layering</h2>
                    <p>Layering ingredients allows some items time to soften or season longer, creating depth of flavor.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>Cooking For Dummies © 2025</footer>

    <!-- JavaScript for Section Toggle -->
    <script>
        function toggleSection(id) {
            const sections = document.querySelectorAll('.method-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            const selectedSection = document.getElementById(id);
            selectedSection.classList.remove('hidden');
        }

        // Hide all sections when the page loads
        window.onload = function() {
            document.querySelectorAll('.method-section').forEach(section => {
                section.classList.add('hidden');
            });
        };
    </script>
</body>
</html>

## Actions
[x] more descriptive alt tags 
[x] add meta 
[x] fix file paths for images 
[x] fixed spelling across html files and css

