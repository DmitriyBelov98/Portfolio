import mixitup from "mixitup";

// change bgc header

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// services modal

const modalViews = document.querySelectorAll(".services__modal");
const modalBtn = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");


// function disableScroll() {
 
//   let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
//   document.body.style.overflow = 'hidden';
//   modalViews.forEach((el) => {
//     el.style.paddingRight = paddingOffset;
//   });
//   document.body.style.paddingRight = paddingOffset
// }
// function enableScroll() {
 
//   document.body.style.overflow = '';
//   modalViews.forEach((el) => {
//     el.style.paddingRight = '0px';
//   });
//   document.body.style.paddingRight = 0;
// }




const modal = (modalClick) => {
  modalViews[modalClick].classList.add("active-modal");

};
function closeModal() {
  modalViews.forEach((mv) => {
    mv.classList.remove("active-modal");
    

  });
}
modalBtn.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    
    modal(i);
    
 
  });
});


modalViews.forEach((mv) => {
  
  mv.addEventListener("click", (e) => {
    if (e.target === mv) {
      mv.classList.remove("active-modal");
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    closeModal();
  });
});
document.addEventListener("keydown", (e) => {
  if (
    e.code === "Escape"
  ) {
    closeModal();
  }
});

// mixitup filter

let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    
    duration: 400
  },
});

// active link work section

const linkItem = document.querySelectorAll(".work__item");

function activeLink() {
  linkItem.forEach((link) => link.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkItem.forEach((link) => link.addEventListener("click", activeLink));

// scroll section active link

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// dark light theme

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


//email js 
  const form = document.querySelector('form');
  const formBtn = document.querySelector('form .button');
  const formLoad = document.querySelector('.contact__load');

  (function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('70tPcwNsjIsB-fhWb');
})();
  formBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const params = {
      from_name: document.getElementById('username').value,
      email_id: document.getElementById('useremail').value,
      message: document.getElementById('usermessage').value,
  
    }
    formLoad.classList.add('sending');
    emailjs.send('gmail', 'template_3m24576', params)
    .then(function(res) {
     console.log('success' + res.status);
     formLoad.classList.remove('sending');
     formBtn.innerText = 'Успешно';
    //  alert('Успешно!');
     form.reset();
      
    })
  });



  

  
