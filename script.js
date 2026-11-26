const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const dialog = document.getElementById("gameDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogText = document.getElementById("dialogText");

document.querySelectorAll(".game-card").forEach(card => {
  card.addEventListener("click", () => {
    dialogTitle.textContent = card.dataset.title;
    dialogText.textContent = card.dataset.info;
    dialog.showModal();
  });
});

function closeDialog() {
  dialog.close();
}
document.getElementById("dialogClose").addEventListener("click", closeDialog);
document.getElementById("dialogOk").addEventListener("click", closeDialog);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeDialog();
});
