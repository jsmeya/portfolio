const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
const tabsContainer = document.querySelector('.tabs'); // only the first
const indicator = document.querySelector('.tab-indicator'); // ^^

function moveIndicator(tab) {
    // "returns the size of an element and its position relative to the browser viewport"
    const containerRect = tabsContainer.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    // Setting the width/pos
    indicator.style.width = `${tabRect.width}px`;
    indicator.style.transform = `translateX(${tabRect.left - containerRect.left}px)`;
}

// On tab clicked
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetName = tab.dataset.tab; // reads the data-tab attribute, e.g. "setup"
        
        panels.forEach((panel) => {
            panel.classList.remove('is-active'); // hides all panels
        });

        const panelMatch = document.querySelector(`.tab-panel[data-panel="${targetName}"]`);
        panelMatch.classList.add('is-active'); // show only the tab that matches


        tabs.forEach((t) => {
            t.classList.remove('is-active');
        });
        tab.classList.add('is-active');

        moveIndicator(tab) // sets the underline to the current tab
    });
});

// Position the indicator under whichever tab starts active, once the page loads
const initialTab = document.querySelector('.tab.is-active');
if (initialTab) moveIndicator(initialTab);