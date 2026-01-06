function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("click", () => {
    profilePic.classList.toggle("active");
});
