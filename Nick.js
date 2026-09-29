
const text = document.getElementById("gameboy-text");
const letters = [...text.textContent];

text.textContent = "";

letters.forEach((letter, index) => {
    const span = document.createElement("span");

    if (letter === " ") {
        span.innerHTML = "&nbsp;";
    } else {
        span.textContent = letter;
    }

    span.style.animationDelay = `${index * 0.06}s`;

    text.appendChild(span);
});
