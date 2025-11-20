document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("chocoBtn");
    const box = document.getElementById("couponBox");

    btn.addEventListener("click", () => {
        box.style.display = "block";
    });
});

