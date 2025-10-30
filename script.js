window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("main-header").classList.add("visible");
  }, 2800);
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

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

const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 120; // Semakin kecil → makin cepat muncul

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

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

const svgPaths = {
  north: {
    d: "M13.3138 0.585729C14.0949 -0.195319 15.3612 -0.195319 16.1422 0.585729L28.8702 13.3137C29.6512 14.0947 29.6512 15.361 28.8702 16.1421C28.0891 16.9231 26.8228 16.9231 26.0417 16.1421L14.728 4.82837L3.41432 16.1421C2.63327 16.9231 1.36694 16.9231 0.585893 16.1421C-0.195156 15.361 -0.195156 14.0947 0.585893 13.3137L13.3138 0.585729ZM14.728 69.2681H12.728L12.728 1.99994H14.728H16.728L16.728 69.2681H14.728Z",
    viewBox: "0 0 50 54"
  },
  northeast: {
    d: "M48.178 1.88239C48.1131 0.779733 47.1665 -0.0614972 46.0639 0.00345073L28.095 1.06184C26.9924 1.12679 26.1511 2.07332 26.2161 3.17598C26.281 4.27864 27.2276 5.11987 28.3302 5.05492L44.3025 4.11413L45.2433 20.0864C45.3083 21.1891 46.2548 22.0303 47.3575 21.9654C48.4601 21.9004 49.3014 20.9539 49.2364 19.8512L48.178 1.88239ZM1.49487 52.2803L2.98979 53.6089L47.6764 3.3286L46.1815 1.99999L44.6866 0.671378L-4.8399e-05 50.9517L1.49487 52.2803Z",
    viewBox: "0 0 50 54"
  },
  east: {
    d: "M68.6823 13.3138C69.4634 14.0949 69.4634 15.3612 68.6823 16.1422L55.9544 28.8702C55.1734 29.6512 53.907 29.6512 53.126 28.8702C52.3449 28.0891 52.3449 26.8228 53.126 26.0417L64.4397 14.728L53.126 3.41432C52.3449 2.63327 52.3449 1.36694 53.126 0.585893C53.907 -0.195156 55.1734 -0.195156 55.9544 0.585893L68.6823 13.3138ZM0 14.728L0 12.728L67.2681 12.728V14.728V16.728L0 16.728L0 14.728Z",
    viewBox: "0 0 50 54"
  },
  southeast: {
    d: "M46.3815 53.3351C47.4845 53.3932 48.4258 52.5461 48.4838 51.443L49.4299 33.4679C49.4879 32.3648 48.6408 31.4236 47.5378 31.3655C46.4347 31.3075 45.4935 32.1546 45.4354 33.2577L44.5945 49.2355L28.6166 48.3946C27.5135 48.3365 26.5723 49.1837 26.5142 50.2867C26.4562 51.3898 27.3033 52.331 28.4063 52.3891L46.3815 53.3351ZM1.48657 1.33789L-1.5974e-05 2.67582L45 52.6758L46.4866 51.3379L47.9732 50L2.97316 -3.8743e-05L1.48657 1.33789Z",
    viewBox: "0 0 50 54"
  },
  south: {
    d: "M13.3138 68.6823C14.0949 69.4634 15.3612 69.4634 16.1422 68.6823L28.8702 55.9544C29.6512 55.1734 29.6512 53.907 28.8702 53.126C28.0891 52.3449 26.8228 52.3449 26.0417 53.126L14.728 64.4397L3.41432 53.126C2.63327 52.3449 1.36694 52.3449 0.585893 53.126C-0.195156 53.907 -0.195156 55.1734 0.585893 55.9544L13.3138 68.6823ZM14.728 0L12.728 0L12.728 67.2681H14.728H16.728L16.728 0L14.728 0Z",
    viewBox: "0 0 50 54"
  },
  southwest: {
    d: "M3.05116 53.3351C1.94812 53.3932 1.00686 52.5461 0.948807 51.443L0.002749 33.4679C-0.0553066 32.3648 0.791824 31.4236 1.89487 31.3655C2.99791 31.3075 3.93916 32.1546 3.99722 33.2577L4.83816 49.2355L20.816 48.3946C21.9191 48.3365 22.8603 49.1837 22.9184 50.2867C22.9765 51.3898 22.1293 52.331 21.0263 52.3891L3.05116 53.3351ZM47.946 1.33789L49.4326 2.67582L4.43263 52.6758L2.94604 51.3379L1.45946 50L46.4595 -3.8743e-05L47.946 1.33789Z",
    viewBox: "0 0 50 54"
  },
  west: { 
    d: "M0.585729 13.3138C-0.195319 14.0949 -0.195319 15.3612 0.585729 16.1422L13.3137 28.8702C14.0947 29.6512 15.361 29.6512 16.1421 28.8702C16.9231 28.0891 16.9231 26.8228 16.1421 26.0417L4.82837 14.728L16.1421 3.41432C16.9231 2.63327 16.9231 1.36694 16.1421 0.585893C15.361 -0.195156 14.0947 -0.195156 13.3137 0.585893L0.585729 13.3138ZM69.2681 14.728V12.728L1.99994 12.728V14.728V16.728L69.2681 16.728V14.728Z",
    viewBox: "0 0 50 54"
  }, 
  northwest: {
    d: "M1.06196 1.88239C1.12691 0.779736 2.07344 -0.0614949 3.1761 0.00344961L21.145 1.06184C22.2476 1.12679 23.0888 2.07332 23.0239 3.17598C22.9589 4.27863 22.0124 5.11986 20.9098 5.05492L4.93744 4.11413L3.99665 20.0864C3.9317 21.1891 2.98517 22.0303 1.88252 21.9654C0.779857 21.9004 -0.0613739 20.9539 0.00357472 19.8512L1.06196 1.88239ZM47.7451 52.2803L46.2502 53.6089L1.56358 3.3286L3.0585 1.99999L4.55342 0.671378L49.24 50.9517L47.7451 52.2803Z",
    viewBox: "0 0 50 54"
  },
  down: {
    d: "M13.3138 101.414C14.0949 102.195 15.3612 102.195 16.1422 101.414L28.8702 88.6863C29.6512 87.9053 29.6512 86.6389 28.8702 85.8579C28.0891 85.0768 26.8228 85.0768 26.0417 85.8579L14.728 97.1716L3.41432 85.8579C2.63327 85.0768 1.36694 85.0768 0.585893 85.8579C-0.195156 86.6389 -0.195156 87.9053 0.585893 88.6863L13.3138 101.414ZM14.728 0L12.728 0L12.728 100H14.728H16.728L16.728 0L14.728 0Z",
    viewBox: "0 0 50 150"
  }
};

function createArrow(type) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");

  svg.setAttribute("xmlns", svgNS);
  svg.setAttribute("viewBox", svgPaths[type].viewBox);
  svg.classList.add("arrow-icon", `arrow-${type}`);

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", svgPaths[type].d);

  svg.appendChild(path);
  return svg;
}

document.querySelectorAll(".arrows").forEach(el => {
  if (el.classList.contains("north")) {
    el.appendChild(createArrow("north"));
  } else if (el.classList.contains("northeast")) {
    el.appendChild(createArrow("northeast"));
  } else if (el.classList.contains("east")) {
    el.appendChild(createArrow("east"));
  } else if (el.classList.contains("southeast")) {
    el.appendChild(createArrow("southeast"));
  } else if (el.classList.contains("south")) {
    el.appendChild(createArrow("south"));
  } else if (el.classList.contains("southwest")) {
    el.appendChild(createArrow("southwest"));
  } else if (el.classList.contains("west")) {
    el.appendChild(createArrow("west"));
  } else if (el.classList.contains("northwest")) {
    el.appendChild(createArrow("northwest"));
  } else if (el.classList.contains("down")) {
    el.appendChild(createArrow("down"));
  }
});

// Browser.html