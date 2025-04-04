// code review (chatgbt) // HTML

1. HTML Structure and Semantics
Use of nav, main, and footer tags: The use of semantic HTML tags like <nav>, <main>, and <footer> is great. It's good for SEO and accessibility.

Headings: You use an <h1> for "VIDEOS" which is correct, but be sure that it reflects the page’s primary heading. If there are other sections, you might consider additional headings like <h2> or <h3> for sub-sections.

Alt text: You have alt attributes for images, which is important for accessibility. However, some alt texts could be more descriptive (e.g., the last few images).

2. Consistency in Links and Navigation
Links: Some of your links (like href="#") are placeholders. While that's fine during development, make sure to replace them with actual links once the page content is ready.

Text in Dropdown Button: The text inside the dropdown button ([][][][][]) is unusual. Consider replacing it with meaningful content like "Menu" or an appropriate icon (e.g., a hamburger menu).

3. Accessibility Improvements
Images: You could add more meaningful alt text to your images for improved accessibility. This helps screen readers understand the content of images.

Link Text: Be sure that all your links clearly describe the action. For example, instead of a generic "Click here" for petition links, you have a more descriptive "Sign the petition" which is good.

4. HTML Syntax
In the section where you have:

It's not ideal to wrap a <section> element inside an <a> tag. While this works, it's better to ensure that an anchor tag wraps only content that is directly meant to be a clickable link. You might want to adjust this.

5. SEO Considerations
You could consider adding meta descriptions for better SEO performance:

html
Copy
<meta name="description" content="Chorlton Skatepark Renovation - Join the petition for a community-led redesign of the skatepark.">
Additionally, consider adding Open Graph and Twitter card meta tags to optimize content for social media sharing.

6. Image Dimensions
Some of the image src attributes use file names like ben_grove_MUSKA_DAY_1_300x226.jpeg. It's better to avoid specifying dimensions in the image file name. If you are using the same images across multiple parts of the site, it’s better to keep the naming clean and manage the sizes via CSS.

7. General Coding Practices
CSS Link: You’re linking an external CSS file home.css. Be sure that it is in the correct location and that the CSS rules are well-organized.

Empty Footer: The footer section is empty. If you don't need it yet, you can remove it temporarily, or include a basic footer like:

8. Code Cleanliness
It would be good practice to keep the indentation consistent and clean throughout the code to improve readability. For example, making sure everything inside the <nav>, <main>, and <section> tags is properly indented.

TODO -
[x] review semantic tags (I have reviewed chatGBTs advice and I have found it erroneous)
[x] chatGBT is telling me now to use a h1 tag in a situation I believe it is best applied (dividing one webpage into two seperate, clearly defined areas)
[x] changing my unusual button into a clear word such as "MENU" (I will consider this however I may decide against this advice for aesthetic reasons)
[x] improve alt text descriptions 
[x] finalise navbar links 
[] improve SEO performance (and think about social media sharing)
[] simplify names of images
[] add footer content
[] check indentation



// code review (chatGBT) // CSS

1. CSS Reset
The * { box-sizing: border-box; margin: 0; padding: 0; } rule is good for a basic reset. However, you could consider adding border: 0; to prevent borders from being added by default to some elements (like form controls).

Suggestion:

css
Copy
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
}
2. Body Styles
The body tag has a position: relative;, but you haven't made use of it in the CSS. If this style isn't required for positioning child elements relative to the body, it can be removed.

The font stack in body is defined as 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;. It's good, but if you are aiming for consistency, it might be better to add 'Arial', sans-serif; as a fallback after Verdana.

Suggestion:

css
Copy
body {
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: #ffffff;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, 'Arial', sans-serif;
    font-size: 16px;
}
3. Grid Layout in .container
You're using a grid layout for .container with grid-template-columns: repeat(4, 1fr);. This works well for dividing the layout into four equal columns. However, if the container is supposed to adapt to different screen sizes, it might be helpful to use media queries to adjust the number of columns for smaller screens.

Example:

css
Copy
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .container {
        grid-template-columns: 1fr;
    }
}
4. Logo Positioning
The logo is absolutely positioned with top: 50% and right: 50%, and you are using transform: translate(50%, 50%). This is fine for centering the logo, but the combination of right: 50% and transform can be tricky. It's better to use left: 50% and adjust the transform to keep the logo centered.

Suggested fix:

css
Copy
.logo {
    max-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
5. Background Images in .chorlton and .petition
The use of background-image: url(...) in .chorlton and .petition is good for visual impact. However, make sure that the paths to the image files are correct and optimized. For example, avoid large image sizes that could slow down page load times. Consider using background-size: cover; as you already have, which is good for responsive images.

6. Typography Improvements
For better legibility, consider specifying the line-height for the body and .description-text:

css
Copy
body {
    line-height: 1.5;
}

.description-text {
    line-height: 1.6;
}
This helps with readability, especially for longer paragraphs.

7. Link Styles
Your link styles (a:link, a:visited, etc.) all have text-decoration: none;, which is fine. But you might want to add some hover effects like changing text color or underlining on hover for better visual feedback.

Suggestion:

css
Copy
a:link, a:visited {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: underline;
    color: #ff6600; /* Or any color that fits your theme */
}

a:active {
    text-decoration: none;
}
8. Navbar Styling
The navbar section uses float for positioning links, which can be difficult to manage, especially with responsiveness. It's better to use Flexbox or Grid for positioning navbar items.

Example using Flexbox:

css
Copy
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 10px;
}

.navbar a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;
}
The dropdown-content is hidden by default and displayed on hover, which is fine. Just ensure that the dropdown content remains accessible by clicking on it or adding ARIA attributes for better accessibility.

9. Dropdown Menu
You use display: block; on .navbar:hover .dropdown-content, but you might want to make the transition smoother with transition properties for the dropdown.

Suggestion:

css
Copy
.dropdown-content {
    display: none;
    position: absolute;
    background-color: black;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.navbar:hover .dropdown-content {
    display: block;
    opacity: 1;
    visibility: visible;
}
10. Mobile Responsiveness
You don't have any specific media queries for mobile responsiveness, which is important for making sure the design looks good on smaller screens. For example, adjusting the grid layout, reducing padding, or changing font sizes for smaller screens can greatly improve the user experience.

Example:

css
Copy
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
11. General Suggestions
Consistency: Ensure consistent use of units for margins, padding, and font sizes. It's best to use rem or em for scalable units, and px for fixed sizes when needed.

Unused Styles: If you aren't using the position: relative; in body or other similar properties, you can remove them for a cleaner CSS.

TODO - 
[] add border: 0 to * 
[x] chatGBT doesn't believe I am using "position: relative" in my body, but after review it is a necessity for the styling of other elements.
[] review the font-family
[] begin thinking about mobile ports
[] review the centering method used on the logo
[x] optimise background-image sizes (after review the advice was shown to be nonsensical as I had already implemented the method it suggested)
[] think about adding line-heights 
[x] review style implementation on links (after review I preferred my original aesthetics)
[] consider using flex inside of float for the navbar 
[x] chatGBT suggested using ARIA which is an outdated tool for acessability
[] look in to using the transition property for the dropdown navbar  
[] add mobile responsiveness 
[] review font size consistency 




