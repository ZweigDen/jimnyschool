export default {
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', myPrev);
  function myPrev() {
    $(".menu-button").toggleClass("cross bgBlack");
  }
}
