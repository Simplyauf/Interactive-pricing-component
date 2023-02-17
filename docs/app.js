const sliderBar = document.querySelector(".slider-hand");
const btn = document.querySelector(".btn");
const priceContainer = document.querySelector(".price-cont");
const pageviewsContainer = document.querySelector(".pageviews-cont");
const period = document.querySelector(".period");
const periodToggleBtn = document.querySelector('input[type="checkbox"]');

const objectData = {
  1: {
    pageviews: "10k",
    price: 8,
  },
  2: {
    pageviews: "50k",
    price: 12,
  },
  3: {
    pageviews: "100k",
    price: 16,
  },
  4: {
    pageviews: "500k",
    price: 24,
  },
  5: {
    pageviews: "1M",
    price: 36,
  },
};

displayValueInSliderBar(objectData);

function displayValueInSliderBar(objectDataValues) {
  sliderBar.addEventListener("change", () => updatingValue(objectDataValues));
}
function updatingValue(objectDataValues) {
  let sliderValue = sliderBar.value;
  let pageviewsValue = objectDataValues[sliderValue].pageviews;
  let priceValue = objectDataValues[sliderValue].price;
  priceContainer.innerHTML = `$${priceValue}.00`;
  pageviewsContainer.innerHTML = `${pageviewsValue} PAGEVIEWS`;
}

// toggling periods
periodToggleBtn.addEventListener("change", (e) => {
  if (!e.currentTarget.checked) {
    period.innerHTML = "/ month";
    updatingValue(objectData);
    displayValueInSliderBar(objectData);
  } else {
    let objectDataYearly = JSON.parse(JSON.stringify(objectData)); //create immutable clone of the object
    period.innerHTML = "/ year";
    // loop through the object and calc discounted price
    for (const key in objectDataYearly) {
      // getting and changing to result of discounted price
      objectDataYearly[key].price = objectDataYearly[key].price * 12 - objectDataYearly[key].price * 12 * 0.25;
    }
    updatingValue(objectDataYearly);
    displayValueInSliderBar(objectDataYearly);
  }
});
