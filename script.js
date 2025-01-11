// Ha szükséges később hozzáadhatsz interakciókat. Például:
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6347"; // színváltoztatás hover esetén
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "white"; // visszaállítás
        });
    });
});
