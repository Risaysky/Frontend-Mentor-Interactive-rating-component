const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rate-us");
const thanksCard = document.querySelector(".thank-you");
const radioBtns = document.querySelectorAll('input[name="rating"]');
const ratingAnnouncement = document.querySelector(".rating-announcement");

submitBtn.addEventListener("click", validateRating);

function validateRating() {
    for (let i = 0; i < 5; i++) {
        if (!radioBtns[i].checked) {
            continue;
        } else {
            showNextCard(i);
            return;
        }
    }
    console.log("please select");
}

function showNextCard(rating) {
    ratingAnnouncement.innerHTML = `You selected ${rating + 1} out of 5`;
    ratingCard.setAttribute("style", "display: none;");
    thanksCard.removeAttribute("style");
}