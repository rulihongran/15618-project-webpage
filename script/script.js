function openTab(evt, tabName) {
    // hide all tab-content
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }
    const links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    window.scrollTo({
        top: document.querySelector('.tab-container').offsetTop - 20,
        behavior: 'smooth'
    });
}