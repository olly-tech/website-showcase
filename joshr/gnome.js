/*let gnomelocation = Math.floor(Math.random() * 4) + 1;

function gnomecorner() {

}*/

document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById('hiddenImage');
    const sound = document.getElementById('hoverSound');
    const hoverArea = document.getElementById('hoverArea');

    console.log('Image:', image);
    console.log('Sound:', sound);
    console.log('Hover Area:', hoverArea);
  
    if (hoverArea) {
      hoverArea.addEventListener('mouseenter', () => {
        console.log("Mouse entered the hover area");
        image.style.opacity = '1'; 
  
        if (sound.paused) {
          sound.play().catch(err => {
            console.error("Error playing sound:", err);
          });
        }
      });
  
      hoverArea.addEventListener('mouseleave', () => {
        console.log("Mouse left the hover area");
        image.style.opacity = '0';
        sound.pause();
        sound.currentTime = 0;
      });
    } else {
      console.log("Hover Area is not found.");
    }
  });
  