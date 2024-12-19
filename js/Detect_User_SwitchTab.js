//When the user loses focus
window.addEventListener('blur', () => {
    document.title = "Break up";
})
//When the user focus on tab
window.addEventListener('focus', () => {
    document.title = "Working";
})