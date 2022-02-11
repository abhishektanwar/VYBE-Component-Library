//alert close example

const alertContainerBox = document.querySelector("#alert-container-close");
const alertContainerCloseBtn = document.querySelector(
  "#alert-container-close-btn"
);

alertContainerCloseBtn.addEventListener("click", () => {
  alertContainerBox.style.display = "none";
  setTimeout(() => {
    alertContainerBox.style.display = "block";
  }, 3000);
});

// form validation

const signup = document.querySelector("#signUp-btn");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const pwd_format = document.querySelector(".pwd-format");
// lets define a password format
// The password should contain around 8-15 alhpanumeric character

const passwordPattern = /^[a-zA-Z0-9]{8,15}$/;

password.addEventListener("focusin", () => {
  pwd_format.style.display = "block";

  // now lets check the password entered by the user
  password.addEventListener("keyup", () => {
    if (passwordPattern.test(password.value)) {
      password.style.borderColor = "green"; // if password pattern matches the border of password input will ne green
      pwd_format.style.color = "green";
    } else {
      password.style.borderColor = "red";
      pwd_format.style.color = "red";
    }
  });
});

password.addEventListener("focusout", () => {
  pwd_format.style.display = "none";
});

confirmPassword.addEventListener("focusin", () => {
  pwd_format.style.display = "block";
  confirmPassword.addEventListener("keyup", () => {
    if (
      passwordPattern.test(confirmPassword.value) &&
      password.value === confirmPassword.value
    ) {
      confirmPassword.style.borderColor = "green"; // if password pattern matches the border of password input will ne green
      pwd_format.style.color = "green";
    } else {
      confirmPassword.style.borderColor = "red";
      pwd_format.style.color = "red";
    }
  });
});

confirmPassword.addEventListener("focusout", () => {
  pwd_format.style.display = "none";
});

termCond.addEventListener("change", () => {
  if (termCond.checked === true) {
    signup.disabled = false;
  } else if (termCond.checked === false) {
    signup.disabled = true;
  }
});

// rating
const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);

// modal

// Get the modal
let modal = document.getElementById("modalDemo");

// Get the button that opens the modal
let demoModalActionBtn = document.getElementById("demo-modal-action-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
demoModalActionBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  console.log("span clicked");
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// toast
let toastActioBtn = document.getElementById("toast-action-btn");

toastActioBtn.addEventListener("click", () => {
  var targetToast = document.getElementById("toast-target");

  // Add the "show" class to DIV
  targetToast.classList.add("show");

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    targetToast.classList.remove("show");
  }, 3000);
});
