function showFirstMessage() {
    document.getElementById("id1").style.display = "none"; // Hide "Budda" button
    document.getElementById("id2").style.display = "block"; // Show "Memories" button
    document.getElementById("id3").style.display = "none"; // Hide "Biguu" button
    document.getElementById("bud").style.display = "block"; // Show Budda image
    document.getElementById("mem").style.display = "none"; // Hide Memories content
    document.getElementsByClassName("typing-effect")[0].style.display = "none"; // Hide typing effect
    document.getElementsByClassName("neon-glow")[0].style.display = "none"; // Hide typing effect
    document.getElementById("cake").style.display = "none";
    document.getElementById("blown").style.display = "none";
   
}


function showMemories() {
    document.getElementById("id2").style.display = "none"; // Hide "Memories" button
    document.getElementById("mem").style.display = "block"; // Show Memories content
    document.getElementById("id4").style.display = "block"; // Hide "Memories" button
    document.getElementById("id3").style.display = "block"; // Show "Biguu" button
    document.getElementById("bud").style.display = "none"; // Hide Bud image
    document.getElementById("id1").style.display = "none"; // Hide "Budda" button
    document.getElementsByClassName("typing-effect")[0].style.display = "none"; // Hide typing effect
    document.getElementsByClassName("neon-glow")[0].style.display = "none"; // Hide typing effect
    document.getElementById("cake").style.display = "none";
    document.getElementById("blown").style.display = "none";
   
   
}
function showLastMessage()
{
    document.getElementById("ms").style.display = "block";
    document.getElementById("mem").style.display = "none"; // Show Memories content
    document.getElementById("id4").style.display = "none"; // Hide "Memories" button
    document.getElementById("id3").style.display = "none"; // hide biggu button
   

}
function message()
{
    document.getElementById("ms").style.display = "block"; // Show "Biguu" content
    document.getElementById("mem").style.display = "none"; // Hide Memories content
    document.getElementById("id4").style.display = "none"; 
    document.getElementById("id3").style.display = "none"; // hide bigguu button
    var gif = document.getElementsByClassName("gif");
    for (var i = 0; i < gif.length; i++) {
        gif[i].style.display = "block";
    }
}


// Get the cake image element
const cakeImage = document.getElementById('cake');

// Function to hide the cake image after a delay
function hideCake() {
    cakeImage.classList.add('hidden');
}

// Example: Hide the cake image after 3 seconds
setTimeout(hideCake, 3000);

function showLastMessage() {
    alert("Happy Birthday!");
}
// Function to hide the cake image and display another image after a delay
function hideblown() {
    // Hide the cake image
    cakeImage.style.display = "none";
    
    // Display another image after a delay
    const blown = document.getElementById('blown');
    blown.style.display = "block";
}

// Example: Hide the cake image and display another image after 3 seconds
setTimeout(hideblown, 3000);
