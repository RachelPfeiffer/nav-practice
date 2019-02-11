const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const container = document.querySelector('.container');
const smallNav = document.querySelector('.nav');
const searchBox = document.querySelector('.search-box');
const magnifiers = document.querySelectorAll('.magnifier');

hamburger.addEventListener('click', function () {
  smallNav.classList.remove('collapse');
  container.classList.add('hide');
});

close.addEventListener('click', function () {
  smallNav.classList.add('collapse');
  container.classList.remove('hide');
})

for (magnifier of magnifiers) {
  magnifier.addEventListener('click', function () {
    searchBox.classList.toggle('out');
  })
}
