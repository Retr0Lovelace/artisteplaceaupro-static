const cartBtn = document.getElementById("cart-btn");
const cartPanel = document.getElementById("cart-panel");
const overlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");
const articleMainBtn = document.querySelector(".article-btn");
const articleAddLinks = document.querySelectorAll(".article-add-to-cart");

// Gestion du panneau panier (seulement si les éléments existent sur la page)
function openPanier(e) {
  if (e) e.preventDefault();
  cartPanel.classList.add("active");
  overlay.classList.add("active");
}

if (cartPanel && overlay && closeCart) {
  if (cartBtn) {
    cartBtn.addEventListener("click", openPanier);
  }

  if (articleMainBtn) {
    articleMainBtn.addEventListener("click", openPanier);
  }

  if (articleAddLinks && articleAddLinks.length > 0) {
    articleAddLinks.forEach((link) => {
      link.addEventListener("click", openPanier);
    });
  }

  closeCart.addEventListener("click", closePanier);
  overlay.addEventListener("click", closePanier);
}

function closePanier() {
  cartPanel.classList.remove("active");
  overlay.classList.remove("active");
}

// Dégradé sur les headers avec .main-nav (blanc) et .main-nav-w (bleu) au scroll
const mainNavs = document.querySelectorAll(".main-nav");
const mainNavsW = document.querySelectorAll(".main-nav-w");

function updateNavGradients() {
  const scrolled = window.scrollY > 10;

  mainNavs.forEach((nav) => {
    if (scrolled) {
      nav.classList.add("has-gradient");
    } else {
      nav.classList.remove("has-gradient");
    }
  });

  mainNavsW.forEach((nav) => {
    if (scrolled) {
      nav.classList.add("has-gradient");
    } else {
      nav.classList.remove("has-gradient");
    }
  });
}

if (mainNavs.length > 0 || mainNavsW.length > 0) {
  window.addEventListener("scroll", updateNavGradients);
  // Mise à jour initiale (au cas où on arrive déjà plus bas dans la page)
  updateNavGradients();
}