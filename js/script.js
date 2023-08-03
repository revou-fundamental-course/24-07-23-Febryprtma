// FUNGSI AUTO SLIDE SECTION
const sliderImages = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showSlide(index) {
  sliderImages.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  showSlide(currentSlide);
}

setInterval(autoSlide, 3000);

showSlide(currentSlide);


// FUNGSI VALIDATE FORM SECTION

function validateForm() {
    var name = document.getElementById("yname").value;
    var email = document.getElementById("email").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    // Validasi email
    if (!email.includes("@") || (!email.includes(".com") && !email.includes(".co.id"))) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}
