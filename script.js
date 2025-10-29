window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("main-header").classList.add("visible");
  }, 2800);
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

document.querySelector('.button').addEventListener('click', function() {
  document.querySelector('#Internet').scrollIntoView({
    behavior: 'smooth'
  });
});

// Internet.html

function expandCard(card) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(c => {
    if (c !== card) c.classList.remove("expanded");
  });
  card.classList.toggle("expanded");
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineContainer = document.querySelector('.timeline');

  timelineItems.forEach(item => {
      const itemId = item.getAttribute('data-id');
      const pictureFrame = timelineContainer.querySelector(`.picture-frame[data-id="${itemId}"]`);

      if (pictureFrame) {
          let itemTop = item.offsetTop;
          
          if (itemId === '2') itemTop -= 30; 
          if (itemId === '1') itemTop += 30; 
          if (itemId === '4') itemTop -= 30; 

          pictureFrame.style.top = `${itemTop}px`;

          const isEven = parseInt(itemId) % 2 === 0;
          if (isEven) {
              pictureFrame.style.left = '140px';
              pictureFrame.style.right = 'auto';
          } else {
              pictureFrame.style.right = '140px';
              pictureFrame.style.left = 'auto';
          }

          if (itemId === '2') {
              pictureFrame.style.left = '240px';
          }
      }
  });
});

// HTTP-HTTPS.html

document.querySelectorAll(".work-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("active");
  });
});

// Domain.html

document.querySelectorAll(".struct-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("active");
  });
});

// Hosting.html

document.addEventListener("DOMContentLoaded", () => {
  const arrows = ["arrow1", "arrow2", "arrow3"];
  let index = 0;
  
  function animate() {
    arrows.forEach(id => document.getElementById(id).classList.remove("active"));
    document.getElementById(arrows[index]).classList.add("active");
    index = (index + 1) % arrows.length;
  }

  animate();
  setInterval(animate, 1200);
});

// DNS.html


// Browser.html