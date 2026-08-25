const typewriter = document.querySelector('.typewriter');

if (typewriter) {
    const text = typewriter.getAttribute('data-text');
    let index = 0;

    function typeText() {
        typewriter.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(typeText, 90);
        }
    }

    setTimeout(typeText, 300);
}

function openModal(imageSrc) {
    document.getElementById("certificateModal").style.display = "flex";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.getElementById("certificateModal").addEventListener("click", function (event) {
    if (event.target.id === "certificateModal") {
        closeModal();
    }
});