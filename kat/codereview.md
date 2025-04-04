Using chatGPT - archiving fixes for later (for now).

1️⃣ File Path Issues (Backslashes in href and src)
You're using backslashes (\) in file paths (images\logoimage.PNG). HTML expects forward slashes (/).

Fix:

html
Copy
Edit
<link rel="icon" type="image/png" href="images/logoimage.PNG">
<link rel="stylesheet" href="stylesheets/style.css">
2️⃣ Remove Unnecessary Bootstrap CSS Import
You're including two Bootstrap stylesheets:

html
Copy
Edit
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
The second one (docs.css) is unnecessary and may conflict with Bootstrap’s default styles. Remove it.

3️⃣ Navbar Logo Link Should Go to Homepage
Right now, it links to # (which does nothing). If the intention is to take users home, update it:

html
Copy
Edit
<a class="navbar-brand" href="index.html">
4️⃣ Missing Closing div Tag for Carousel
The <div> wrapping the carousel controls (<button>s) isn't closed before <main>.

Fix:

html
Copy
Edit
...
</div> <!-- Close .carousel-inner -->
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
5️⃣ Improve Button Links in Carousel
Your buttons don’t link anywhere. Even if the pages don’t exist yet, use href="#" for now:

html
Copy
Edit
<button type="button" class="btn btn-outline-light btn-lg"> 
  <a href="events.html" style="color: inherit; text-decoration: none;">Events Schedule</a>
</button>
6️⃣ Footer is Empty
Either remove it or add a placeholder:

html
Copy
Edit
<footer class="bg-black text-light text-center py-3">
  <p>&copy; 2024 Manny Goths. All Rights Reserved.</p>
</footer>