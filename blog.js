const backToTopButton = document.getElementById("back-to-top");
window.onscroll = function(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop >100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
};


function validation() {
    const newsLetterEmail = document.getElementById("newsletter-email").value;
    if (newsLetterEmail == "") {
        alert("Please input your Email");
    }
}    
function validationTwo() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    
    if (email == "") {
        alert("Please input your Email");
    } 
    if (name == "") {
        alert("Please input your Name");
    }
    if (message == "") {
        alert("Please input your Message");
    }
}
    