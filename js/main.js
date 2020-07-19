'use strict';
const cardsData = [
  {
    "id": "01",
    "name": "Rave Autumn",
    "date": "14.09.2019",
    "city": "Amsterdam",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
  },
  {
    "id": "02",
    "name": "Best of 2019",
    "date": "20.09.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png"
  },
  {
    "id": "03",
    "name": "Faderhead",
    "date": "10.11.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/53486baba5ec9d256ce20816a3e54e51.png"
  },
  {
    "id": "04",
    "name": "Purple Fog Side",
    "date": "05.06.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/e1baa378009391210cc0e64f65c7784e.png"
  },
  {
    "id": "05",
    "name": "Carbon based Liveform",
    "date": "14.02.2019",
    "city": "Sr.Petersburg",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/b1f06edaf618c3e3ad19c159eb5aa036.jpeg"
  },
  {
    "id": "06",
    "name": "Neuroticfish",
    "date": "25.05.2019",
    "city": "Sr.Petersburg",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/49705480ff397085ad34685c4181c1ab.jpeg"
  },
  {
    "id": "07",
    "name": "Faderhead",
    "date": "20.11.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/de9f4b49cc5ba737911b0db30f082fff.jpeg"
  },
  {
    "id": "08",
    "name": "Rave Winter",
    "date": "15.02.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
  },
  {
    "id": "09",
    "name": "Not a Robot",
    "date": "22.06.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/14bce6211e055410a043e02a22cec69b.jpeg"
  },
  {
    "id": "10",
    "name": "Carbon Based lifeforms",
    "date": "22.09.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/7d655ea8b13f5fdda4469fb0035bd7a3.jpeg"
  },
  {
    "id": "11",
    "name": "Icon of Coil",
    "date": "19.05.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/8c76c770ded42cea343dbf2d8523791e.jpeg"
  },
  {
    "id": "12",
    "name": "Solar Fields",
    "date": "20.06.2019",
    "city": "Sr.Petersburg",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/9ddae28837d2e4217e5c2e99bbd6f3a0.jpeg"
  },
  {
    "id": "13",
    "name": "Apoptygma Berzerk",
    "date": "14.11.2019",
    "city": "Amsterdam",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/720e3b29bf238cd40785ffe157b1151a.jpeg"
  },
  {
    "id": "14",
    "name": "Mental Discipline",
    "date": "16.11.2019",
    "city": "Rim",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/76372b51ab7408e826a191577abcd79d.jpeg"
  },
  {
    "id": "15",
    "name": "Apoptygma Berzerk",
    "date": "25.02.2019",
    "city": "Berlin",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/aec8583caa5bbe34b2c5695e2546ea3b.jpeg"
  },
  {
    "id": "16",
    "name": "Solar Fields",
    "date": "14.02.2019",
    "city": "Amsterdam",
    "genre": "Electronic",
    "image": "https://cdn3.xsolla.com/files/uploaded/113250/0662c0df7663f71831e83be091228413.jpeg"
  }
];

const tagTemplateForCard = document.querySelector('#templateCard').content;
const cardTemplate = tagTemplateForCard.querySelector('.events__item');
const rootElementForCards = document.querySelector('.events__list');
const allCards = rootElementForCards.children;
const selectCityElement = document.querySelector('#city');
const selectMonthElement = document.querySelector('#month');
const formatterMonth = new Intl.DateTimeFormat('en', {month: 'long'});

const creatCard = (cardTemplate, cardData) => {
  const name = cardTemplate.querySelector('.card__link');
  const date = cardTemplate.querySelector('.card__date time');
  const img = cardTemplate.querySelector('.card__img');
  const dayFromDate = cardData.date.split('.')[0];
  const machineReadableDate = cardData.date.split('.').reverse().join('-');
  name.textContent = cardData.name;
  date.textContent = dayFromDate;
  date.setAttribute('datetime', machineReadableDate);
  img.setAttribute('src', cardData.image);
  img.setAttribute('alt', cardData.name);
  cardTemplate.dataset.month = formatterMonth.format(new Date(machineReadableDate));
  cardTemplate.dataset.city = cardData.city
  return cardTemplate;
};

const renderCards = (cardTemplate, cardsData, rootElementForCards) => {
  for (const currentCardDate of cardsData) {
    const newCardTemplate = cardTemplate.cloneNode(true);
    const card = creatCard(newCardTemplate, currentCardDate);
    rootElementForCards.appendChild(card);
  }
};

const optionValues = {
  cities(cardsData) {
    const cities = new Set();

    for (const cardData of cardsData) {
      cities.add(cardData.city);
    }
    return cities;
  },
  months(cardsData) {
    const months = new Set();

    for (const cardData of cardsData) {
      const machineReadableDate = cardData.date.split('.').reverse().join('-');
      months.add(formatterMonth.format(new Date(machineReadableDate)));
    }
    return months;
  }
};

const cities = optionValues.cities(cardsData);
const months = optionValues.months(cardsData);

const creatOption = (optionValue) => {
    const optionElement = document.createElement('option');
    optionElement.textContent = optionValue;
    optionElement.setAttribute('value', optionValue);
    return optionElement;
};

const renderOptions = (optionValues, rootElementForOption) => {
  for (const optionValue of optionValues) {
    const optionElement =  creatOption(optionValue);
    rootElementForOption.appendChild(optionElement);
  }
};

const filter = (city, month) => {
  for (const card of allCards)  {
    if (city === "All" && month === "All") {
      card.hidden = false;
    }
    else if (city === 'All' && card.dataset.month === month) {
      card.hidden = false;
    }
    else if (month === "All" && card.dataset.city === city) {
      card.hidden = false;
    }
    else card.hidden = !(card.dataset.month === month && card.dataset.city === city);
  }
};

selectCityElement.addEventListener('change', (evt) => {
  const city = evt.target.value;
  const month = selectMonthElement.value;
  filter(city, month);
});

selectMonthElement.addEventListener('change', (evt) => {
  const month = evt.target.value;
  const city = selectCityElement.value;
  filter(city, month);
});

renderOptions(cities, selectCityElement);
renderOptions(months, selectMonthElement);
renderCards(cardTemplate, cardsData, rootElementForCards);
