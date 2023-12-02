window.addEventListener("load", function () {
    const durationElement = document.querySelector(".time_duration");

    if (durationElement) {
        const loadTime = performance.now();
        durationElement.textContent = loadTime.toFixed(1) + " мс";
    }
});

window.addEventListener("load", function () {
    const navItems = document.querySelectorAll('nav>ul>li');
    const footerItems = document.querySelectorAll('footer>div');

    const allItems = [];
    allItems.push.apply(allItems, navItems);
    allItems.push.apply(allItems, footerItems);

    for (const item of allItems) {
        const link = item.querySelector('a');
        const href = link.getAttribute('href');

        if (document.location.href.includes(href)) {
            item.classList.add('active');
            break;
        }
    }
});