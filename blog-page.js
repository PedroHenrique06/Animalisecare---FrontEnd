
// Funcionalidade para mostrar o menu de filtragem
const filterBtn = document.getElementById('filter-button');
const filterMenu = document.getElementById('menu-filter');

filterBtn.addEventListener("click", () => {
    filterMenu.style.display = filterMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
        filterMenu.style.display = "none";
    }
});

// Funcionalidade para mostrar o menu de ordenação
const orderBtn = document.getElementById('order-button');
const orderMenu = document.getElementById('menu-order');

orderBtn.addEventListener("click", () => {
    orderMenu.style.display = orderMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!orderBtn.contains(e.target) && !orderMenu.contains(e.target)) {
        orderMenu.style.display = "none";
    }
});