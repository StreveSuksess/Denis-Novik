//stars in skills

const programs = document.querySelectorAll(".program");

programs.forEach((program) => {
  let activeStars = program.dataset.stars;
  if (activeStars > 5) activeStars = 5;
  const stars = program.querySelectorAll(".star");
  for (let starCount = 0; starCount < activeStars; starCount++) {
    stars[starCount].classList.add("active");
  }
});

//Animation on scroll

const animItems = document.querySelectorAll(".anim-item, a, p, h2, article");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let animItem of animItems) {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 5;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if ((animItemPoint = window.innerHeight)) animItemPoint = window.innerHeight - window.innerHeight / animStart;

      if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
        animItem.classList.add("anim-active");
      } else if (!animItem.classList.contains("anim-no-hide")) {
        animItem.classList.remove("anim-active");
      }
    }
  }
}

setTimeout(() => {
  animOnScroll(), 300;
});

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

//header links

window.addEventListener("scroll", () => {
  let scrollDistance = scrollY;

  document.querySelectorAll(".intro, .section, .footer").forEach((section, index) => {
    if (offset(section).top - document.querySelector("header").clientHeight <= scrollDistance) {
      document.querySelectorAll(".nav__li").forEach((navLink) => {
        if (navLink.classList.contains("active")) {
          navLink.classList.remove("active");
        }
      });

      document.querySelectorAll(".nav__li")[index].classList.add("active");
    }
  });
});

//Change language

const ruLangButton = document.querySelector("#ru-language");
const enLangButton = document.querySelector("#en-language");
const allLang = ["en", "ru"];

ruLangButton.addEventListener("click", rulangButtonFunction);
enLangButton.addEventListener("click", enlangButtonFunction);

function rulangButtonFunction() {
  if (ruLangButton.classList.contains("active-lang-button")) return;

  location.href = window.location.pathname + "#ru";
  location.reload();
}

function enlangButtonFunction() {
  if (enLangButton.classList.contains("active-lang-button")) return;

  location.href = window.location.pathname + "#en";
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (hash == "ru") {
    enLangButton.classList.remove("active-lang-button");
    ruLangButton.classList.add("active-lang-button");
  } else {
    ruLangButton.classList.remove("active-lang-button");
    enLangButton.classList.add("active-lang-button");
  }
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  document.querySelector("title").innerHTML = langArr["title"][hash];
  for (let key in langArr) {
    let elem = document.querySelector("." + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    } else {
      elem = document.querySelector(".lng-" + key);
      if (elem) {
        elem.innerHTML = langArr[key][hash];
      }
    }
  }
}

const langArr = {
  title: {
    ru: "Денис Новик",
    en: "Denis Novik",
  },
  intro__title: {
    ru: "Денис Новик",
    en: "Denis Novik",
  },
  intro__p: {
    ru: "UX | UI 24-летний дизайнер из Минска",
    en: "UX | UI designer 24 years old, Minsk",
  },
  nav__linkHome: {
    ru: "В начало",
    en: "Home",
  },
  nav__linkAbout: {
    ru: "Обо мне",
    en: "About me",
  },
  nav__linkSkills: {
    ru: "Навыки",
    en: "Skills",
  },
  nav__linkPortfolio: {
    ru: "Портфолио",
    en: "Portfolio",
  },
  nav__linkContacts: {
    ru: "Контaкты",
    en: "Contacts",
  },
  section__titleAbout: {
    ru: "Обо мне",
    en: "About me",
  },
  about__p1: {
    ru: `Привет, меня зовут Денис, UX | UI дизайнер из Минска. Я интересуюсь дизайном и всем, что с ним связано.`,
    en: `Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.`,
  },
  about__p2: {
    ru: `Я учусь на курсах "Веб и мобильный дизайн интерфейсов" в IT-Академии.`,
    en: `I'm studying at courses "Web and mobile design interfaces" in IT-Academy.`,
  },
  about__p3: {
    ru: `Готов реализовать отличные проекты с замечательными людьми.`,
    en: `Ready to implement excellent projects with wonderful people.`,
  },
  section__titleSkills: {
    ru: "Навыки",
    en: "Skills",
  },
  skills__text: {
    ru: "Я работаю в таких программах, как:",
    en: "I work in such programs as",
  },
  section__titlePortfolio: {
    ru: "Портфолио",
    en: "Portfolio",
  },
  footer__title: {
    ru: "Контакты",
    en: "Contacts",
  },
  footer__text: {
    ru: "Хотите узнать больше или просто поболтать? Всегда пожалуйста!",
    en: "Want to know more or just chat? You are welcome!",
  },
  footer__button: {
    ru: "Отправить сообщение",
    en: "Send message",
  },
  footer__subtext: {
    ru: "Подмишись на меня в:<br />LinkedIn, Instagram, Behance, Dribble",
    en: "Like me on<br />LinkedIn, Instagram, Behance, Dribble",
  },
};

changeLanguage();

//Burger menu

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", burgerFunction);
nav.addEventListener("click", navFunction);

function burgerFunction() {
  document.body.classList.toggle("show-nav");
}

function navFunction() {
  document.body.classList.remove("show-nav");
}
