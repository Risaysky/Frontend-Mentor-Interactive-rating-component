const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rate-us");
const thanksCard = document.querySelector(".thank-you");
const ratingSelection = document.querySelector(".rating-selection");
const radioBtns = ratingSelection.children;
const ratingAnnouncement = document.querySelector(".rating-announcement");
let timeouts = [];

submitBtn.addEventListener("click", validateRating);

function validateRating() {
    for (let i = 0; i < 5; i++) {
        if (!radioBtns[i].children[0].checked) {
            continue;
        } else {
            showNextCard(i);
            return;
        }
    }
    timeouts.forEach(id => clearTimeout(id));
    timeouts = [];
    ratingSelection.setAttribute("data-invalid", "");
    timeouts.push(setTimeout(() => ratingSelection.toggleAttribute("data-invalid"), 500))
    timeouts.push(setTimeout(() => ratingSelection.toggleAttribute("data-invalid"), 900))
    timeouts.push(setTimeout(() => ratingSelection.toggleAttribute("data-invalid"), 1400))
}

function showNextCard(rating) {
    ratingAnnouncement.innerHTML = `You selected ${rating + 1} out of 5`;
    ratingCard.setAttribute("style", "display: none;");
    thanksCard.removeAttribute("style");
}