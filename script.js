// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to change the font color of the navigation link
  function changeFontColor(linkId) {
    const link = document.getElementById(linkId);
    link.style.color = getRandomColor();
  }
  
  // Add event listeners to trigger the color change function
  document.getElementById("aboutLink").addEventListener("mouseover", function() {
    changeFontColor("aboutLink");
  });
  
  document.getElementById("resumeLink").addEventListener("mouseover", function() {
    changeFontColor("resumeLink");
  });
  
  document.getElementById("skillsLink").addEventListener("mouseover", function() {
    changeFontColor("skillsLink");
  });
  
  document.getElementById("contactLink").addEventListener("mouseover", function() {
    changeFontColor("contactLink");
  });
  