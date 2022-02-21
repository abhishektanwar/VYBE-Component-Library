const mySideBar = document.querySelector('#my-side-bar');
const sideBarButton = document.querySelector('.sidebar-toggle-button');
const sideBarNavLinks = document.querySelectorAll('.nav-link-item');

// down-arrow-btn or any item from sidebar when chicked closes the sidebar on sm-device
const arrayOfClickableItemsToToggleSideBar = [
  sideBarButton,
  ...sideBarNavLinks,
];

arrayOfClickableItemsToToggleSideBar.forEach((button) => {
  button.addEventListener('click', () => {
    mySideBar.classList.toggle('sidebar-active');
    console.log("btn clicked")
  });

});


// navbar
//nav-bar
const myNav = document.querySelector('#my-nav-bar');
const hamburgerMenuBtn = document.querySelector('#hamburger-menu-icon');
const closeMobileNavBtn = document.querySelector('#close-mobile-nav');

hamburgerMenuBtn.addEventListener('click', (e) => {
	myNav.classList.toggle('active');
});

closeMobileNavBtn.addEventListener('click', (e) => {
	myNav.classList.remove('active');
});
