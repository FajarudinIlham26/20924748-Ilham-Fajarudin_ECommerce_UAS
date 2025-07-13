// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animasi saat halaman dimuat
window.addEventListener("load", () => {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 * index);
  });
});

// Style untuk animasi
const style = document.createElement("style");
style.textContent = `
    .product-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
`;
document.head.appendChild(style);
