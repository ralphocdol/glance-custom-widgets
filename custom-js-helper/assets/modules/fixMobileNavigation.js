const setupMobileNavigation = () => {
    const navigationElement = document.querySelector('.mobile-navigation-page-links-input');
    const expandToggleElement = document.querySelectorAll('button.expand-toggle-button');
    const navigationOffset = document.querySelector('.mobile-navigation-offset');
    if (getComputedStyle(document.querySelector('.mobile-navigation'))?.display == 'none') return;
  
    const rootStyle = document.documentElement;
    const mobileNavigationHeight = parseFloat(getComputedStyle(rootStyle).getPropertyValue('--mobile-navigation-height').trim());
    const safeAreaInsetBottom = parseFloat(getComputedStyle(rootStyle).getPropertyValue('--safe-area-inset-bottom').trim()) || 0;
    const navHeight = navigationElement.checked ? (mobileNavigationHeight * 2) : +mobileNavigationHeight;
    const finalNavHeight = navHeight + +safeAreaInsetBottom;
  
    navigationOffset.style.setProperty('height', finalNavHeight + 'px', 'important');
    expandToggleElement.forEach(e => e.style.setProperty('bottom', finalNavHeight + 'px', 'important'));
};
  
export default () => {
    /**
     * For auto expanding navigation buttons
     */
    console.log('Mobile Navigation Fix loaded...')
    const expandToggleButton = document.querySelectorAll('button.expand-toggle-button');
    const currentLength = expandToggleButton.length;
    const prevLength = parseInt(localStorage.getItem('expandToggleButtonCount')) || 0;

    if (currentLength !== prevLength) {
        console.log(`Button count changed: ${prevLength} → ${currentLength}`);
        if (expandToggleButton.length) setupMobileNavigation();
        localStorage.setItem('expandToggleButtonCount', currentLength);
    }

    document.querySelector('.mobile-navigation-page-links-input').addEventListener('input', setupMobileNavigation);
    setupMobileNavigation();
}