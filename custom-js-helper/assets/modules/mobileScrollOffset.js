export default () => {
    const container = document.querySelector('.body-content');
    if (!container) return;
  
    const mobileNav = container.querySelector('.mobile-navigation');
    if (!mobileNav) return;
  
    console.log('Mobile Scroll Offset loaded...');

    const offset = document.documentElement.clientHeight * 0.4;
  
    function applyOffset() {
        if (window.getComputedStyle(mobileNav).display === 'none') {
            container.classList.remove('mobile-scroll-offset');
            container.style.marginTop = '0px';
            return;
        }
  
        if (!container.classList.contains('mobile-scroll-offset')) {
            container.classList.add('mobile-scroll-offset');
            container.style.marginTop = `${offset}px`;
  
            // Scroll down automatically to simulate starting at the right position
            window.scrollTo({ top: offset, behavior: 'instant' });
        }
    }
  
    // Initial check
    applyOffset();
  
    // Check on window resize (if mobile navigation visibility changes)
    window.addEventListener("resize", applyOffset);
  
    // Snap effect on scroll
    let isSnapped = true;
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
  
        if (scrollTop < offset / 2 && isSnapped) {
            // Snap back up
            isSnapped = false;
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (scrollTop >= offset / 2 && !isSnapped) {
            // Snap down to 40% offset
            isSnapped = true;
            window.scrollTo({ top: offset, behavior: "smooth" });
        }
    });

    // Move id='top' to body
    document.documentElement.removeAttribute('id');
    document.body.id = 'top';
};