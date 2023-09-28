'use strict';

//Posts
let posts = [
  {
    id: 1,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
    link: "https://vtop3.by",
  },
  {
    id: 2,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
    link: "#",
  },
  {
    id: 3,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
    link: "#",
  },
  {
    id: 4,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
    link: "#",
  },
  {
    id: 5,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
    link: "#",
  },
];

const container = document.querySelector(".home-page__blog_posts");

posts.forEach(post => {
  const postElement = document.createElement("div");
  postElement.classList.add("home-page__post");
  const postTitle = document.createElement("p");
  postTitle.classList.add("home-page__post_title");
  postTitle.innerHTML = `
      ${post.title}
  `;

  postElement.addEventListener("click", () => {
    const targetLink = `${post.link}`;
    window.location.href = targetLink;
  });

  const postDate = document.createElement("p");
  postDate.classList.add("home-page__post_date");
  postDate.innerHTML = `
    ${post.date}
  `;

  container.appendChild(postElement);
  postElement.append(postTitle, postDate);
});

// Scrollbar
const scrollbar = new SimpleBar(container);

// Language toggle
const languageData = {
  en: {
    buttonText: 'EN',
  },
  ru: {
    buttonText: 'RU',
  },
}

let currentLanguage = 'en';

function updateContent() {
  const langText = document.querySelector(".lang");
  langText.textContent = languageData[currentLanguage].buttonText;
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
  updateContent();
  const buttonElement = document.querySelector(".lang");
  buttonElement.textContent = languageData[currentLanguage].buttonText;
}

const langButton = document.querySelector(".lang-toggle");
langButton.addEventListener("click", toggleLanguage);

//Burger-menu
let burger = document.querySelector(".burger__menu");
burger.addEventListener("click", function () {
  this.classList.toggle("active");
});