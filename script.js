window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("main-header").classList.add("visible");
  }, 2800);
});

document.querySelector('.button').addEventListener('click', function() {
  document.querySelector('#intro').scrollIntoView({
    behavior: 'smooth'
  });
});

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

document.querySelectorAll(".work-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("active");
  });
});