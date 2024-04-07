// скролл лого дота 2 уменьшение
const logo = document.querySelector('.head_logo');
window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
logo.classList.add('head_logo_min');
} else {
logo.classList.remove('head_logo_min');
}
});