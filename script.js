document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('text');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    let currentSize = 16; // initial font size in pixels

    increaseButton.addEventListener('click', () => {
        currentSize += 2;
        textElement.style.fontSize = `${currentSize}px`;
    });

    decreaseButton.addEventListener('click', () => {
        currentSize -= 2;
        if (currentSize > 0) { // prevent font size from becoming negative or zero
            textElement.style.fontSize = `${currentSize}px`;
        }
    });
});
