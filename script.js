var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

////part 1

for (let i = 0; i < menuLinks.length; ++i) {
  let topMenuEl = document.querySelector("nav");
  const newA = document.createElement("a");
  newA.href = menuLinks[i].href;
  newA.textContent = menuLinks[i].text;
  topMenuEl.append(newA);
}

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const newH1 = document.createElement("h1");
let banner = (newH1.innerText = "SEI Rocks!");
mainEl.append(banner);
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("nav");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


/////Part 2


const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.top = "0";
subMenuEl.style.position = "absolute";
const topMenuLinks = document.querySelectorAll("#top-menu a");
let showingSubMenu = false;

topMenuEl.onclick = function (event) {
  event.preventDefault();
  let target = event.target;
  if (target.tagName != "A") {
    return;
  } else {
    console.log(target);
  }

  let classInfo = target.className;

  if (classInfo === "active") {
    classInfo.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  topMenuLinks.classList.remove("active");

  target.classList.add("active");
};
