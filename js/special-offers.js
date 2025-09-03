const specialOffersSection = document.getElementById("special-offers__offers")
!specialOffersSection && console.log("no special-offers__offers")

const content = [
  {
    title: "Save 40% on Carpet Cleaning!",
    subtitle:
      "Book any of our services till the end of November and get an extra 40% off on carpet/upholstery cleaning!",
    imgSrc: "img/offers/offer-carpet-cleaning.webp",
    description:
      "It’s the perfect time to treat your home to a deep clean. Just leave your contact info below — we’ll get in touch and help you schedule your discounted cleaning in no time!",
  },
  {
    title: "25% Discount on All Services for Seniors",
    subtitle:
      "We offer a 25% discount for seniors on Monday through Wednesday all the year round. Enjoy this great deal!",
    imgSrc: "img/offers/offer-discount-for-seniors.webp",
    description:
      "Because you deserve care and comfort. Our professional team is here to make your home cleaner and your life easier — at a price that respects your budget. Simply show proof of age when booking, and we’ll handle the rest!",
  },
  {
    title: "We Welcome New Clients!",
    subtitle:
      "Receive $50 off your first residential or commercial cleaning service and get benefit from this great deal!",
    imgSrc: "img/offers/offer-new-clients.webp",
    description:
      "Let’s make your first experience unforgettable. Whether it’s your home or office, our expert cleaners are ready to deliver top-quality service. Book today and enjoy your $50 welcome discount — it’s that simple!",
  },
  {
    title: "25% Discount on Kitchen Cleaning",
    subtitle:
      "Have you had a party recently? We offer special prices on kitchen cleaning till the end of 2022.",
    imgSrc: "img/offers/offer-kitchen-cleaning.webp",
    description:
      "We'll handle the mess — so you can relax. From countertops to appliances, our team will leave your kitchen spotless and fresh. Don’t miss this limited-time offer — book your discounted cleaning today!",
  },
]

for (let i = 0; i < content.length; i++) {
  const offer = content[i]
  const specialOffer = document.createElement("div")
  specialOffer.classList.add("special-offer")
  i % 2 === 1 && specialOffer.classList.add("dark-bg")
  specialOffer.innerHTML = `    
    <div class="special-offer__container container">
      <div class="special-offer__header">
        <div class="special-offer__titles">
          <h2 class="special-offer__title">${offer.title}</h2>
          <p class="special-offer__subtitle">${offer.subtitle}</p>
        </div>
        <img
          class="special-offer__image"
          src="${offer.imgSrc}"
          alt="banner image"
        />
      </div>

      <p class="special-offer__description">${offer.description}</p>
      <a
        class="special-offer__btn special-offer__btn--primary"
        href="#special-offer-form"
        >Contact Us →</a
      >
    </div>`

  specialOffersSection.appendChild(specialOffer)
}
