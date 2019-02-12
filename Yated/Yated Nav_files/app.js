const magnifiers = document.querySelectorAll('.magnifier');
const searchbox = document.querySelector('.search-box');

for (magnifier of magnifiers) {
 magnifier.addEventListener('click', function () {
  searchbox.classList.toggle('hide');
  searchbox.style.display = "block";
  console.log(searchbox.style);
})
}
