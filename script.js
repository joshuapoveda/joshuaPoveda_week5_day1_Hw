var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

for (let i = 0; i < menuLinks.length; ++i) {
let topMenuEl = document.querySelector("nav")
const newA = document.createElement("a")
newA.href = menuLinks[i].href
newA.textContent = menuLinks[i].text
topMenuEl.append(newA)
}


let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)"

const newH1 = document.createElement("h1")
let banner = (newH1.innerText = "SEI Rocks!")
mainEl.append(banner)
mainEl.classList.add("flex-ctr")

const topMenuEl = document.querySelector("nav");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
