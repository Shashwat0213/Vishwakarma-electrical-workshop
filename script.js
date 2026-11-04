const WHATSAPP_NUMBER = "916200973301";

// 1. Render Products
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <div class="card reveal" data-id="${product.id}">
      <div class="card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
      </div>
      <div class="card-body">
        <span class="brand-tag">${product.brand}</span>
        <h3>${product.name}</h3>
        <div class="specs">
          <ul>
            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
          </ul>
        </div>
        <div class="price-row">
          <div class="price">${product.price} <small>${product.priceNote}</small></div>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappText)}" class="btn-small" target="_blank">Enquire</a>
        </div>
      </div>
    </div>
  `).join('');

  // Re-initialize reveal animations for newly added cards
  initReveal();
}

// 2. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  // Follower with slight delay
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 50);
});

// Cursor grow effect on hoverable elements
const hoverables = document.querySelectorAll('a, button, .card, .repair-image');
document.querySelectorAll('a, button, .card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
    cursorFollower.classList.add('active');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorFollower.classList.remove('active');
  });
});

// 3. 3D Tilt Effect on Product Cards
function init3DTilt() {
  if (window.innerWidth > 768) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Rotate calculation (limited to 10 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s ease';
      });
      
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease'; // Fast response
      });
    });
  }
}

// 4. Scroll Reveal Animation
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
}
window.addEventListener('scroll', initReveal);

// Initialize everything on load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  init3DTilt();
  initReveal();
});