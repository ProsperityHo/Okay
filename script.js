// JavaScript for adding interactive animations
document.addEventListener('DOMContentLoaded', function() {
    const sideMenu = document.querySelector('.side-menu');
    const content = document.querySelector('.content');

    // Toggle side menu
    sideMenu.addEventListener('click', () => {
        if (sideMenu.style.transform === 'translateX(-100%)') {
            sideMenu.style.transform = 'translateX(0)';
            content.style.marginLeft = '220px';
        } else {
            sideMenu.style.transform = 'translateX(-100%)';
            content.style.marginLeft = '0';
        }
    });
});
