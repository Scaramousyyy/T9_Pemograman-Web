window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("main-header").classList.add("visible");
  }, 2800);
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


// DNS.html


// Browser.html