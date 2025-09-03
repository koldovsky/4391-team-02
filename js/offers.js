const offersCardsInfo = [
  {
    imgSrc: "img/offers/offer-carpet-cleaning.webp",
    title: "Save 40% on Carpet Cleaning!",
    description:
      "Book any of our services till the end of November and get an extra 40% off on carpet/upholstery cleaning!",
  },
  {
    imgSrc: "img/offers/offer-discount-for-seniors.webp",
    title: "25% Discount on All Services for Seniors",
    description:
      "We offer a 25% discount for seniors on Monday through Wednesday all the year round. Enjoy this great deal!",
  },
  {
    imgSrc: "img/offers/offer-kitchen-cleaning.webp",
    title: "25% Discount on Kitchen Cleaning",
    description:
      "Have you had a party recently? We offer special prices on kitchen cleaning till the end of 2022.",
  },
  {
    imgSrc: "img/offers/offer-new-clients.webp",
    title: "We Welcome New Clients!",
    description:
      "Receive $50 off your first residential or commercial cleaning service and get benefit from this great deal!",
  },
]

const cardsContainer = document.querySelector(".offers__cards-container")

offersCardsInfo.forEach((offer) => {
  const card = document.createElement("div")
  card.classList.add("offers__card")
  card.innerHTML = `
        <img
          class="offers__image"
          src="${offer.imgSrc}"
          alt="Carpet cleaning"
        />
        <div class="offers__text">
          <h4 class="offers__text-title">${offer.title}</h4>
          <p class="offers__text-description">${offer.description}</p>
          <a
            class="offers__text-link-arrow"
            href="special-offers.html"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xml:space="preserve"
              width="24"
              height="24"
            >
              <g fill="currentColor">
                <polygon
                  points="76.389,53.202 76.389,63.601 89.991,50.003 76.39,36.401 76.389,46.8 10.011,46.8 10.011,53.201  "
                  fill="currentColor"
                ></polygon>
              </g>
            </svg>
          </a>
        </div>
  `
  cardsContainer.appendChild(card)
})
