let honey_singh_i = document.querySelector('.honey-singh i');
let atif_i = document.querySelector('.atif i');
let arijit_i = document.querySelector('.arijit i');

function showIcon(icon) {
    icon.style.display = "block";
}

function hideIcon(icon) {
    icon.style.display = "none";
}

document.querySelectorAll('.honey-singh, .atif, .arijit').forEach(element => {
    let icon = element.querySelector('i');
    element.addEventListener('mouseenter', () => showIcon(icon));
    element.addEventListener('mouseleave', () => hideIcon(icon));
});
