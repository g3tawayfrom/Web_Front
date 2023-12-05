window.addEventListener("load", function () {
    const durationElement = document.querySelector(".time_duration");

    if (durationElement) {
        const loadTime = performance.now();
        durationElement.textContent = loadTime.toFixed(1) + " мс";
    }
});

window.addEventListener("load", function () {
    const navItems = document.querySelectorAll('nav>ul>li');
    const footerItems = document.querySelectorAll('footer>div>div');
    const currentPage = document.location.href;

    const allItems = [];
    allItems.push.apply(allItems, navItems);
    allItems.push.apply(allItems, footerItems);

    for (const item of allItems) {
        const href = item.querySelector('a').href;

        if (href === currentPage) {
            item.classList.add('active');
        }
    }
});