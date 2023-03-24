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


//Tast 5.2
topMenuEl.onclick = function (event) {
  event.preventDefault();
  let target = event.target;
console.log(target)
  if (target.tagName != "A") {
    return;
  }

  let classInfo = target.className;
//Task 5.3
  if (classInfo === "active") {
    classInfo.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
//Task 5.4
  
  topMenuLinks.classList.remove("active");

//Task 5.6
  target.classList.add("active")


  const anchorName = event.target.textContent
  
const menuLink = menuLinks.find((link) => {
  return link.text === anchorName; 
});

if (menuLink === undefined) {
  return;
}

if (menuLink.subLinks) {
  showingSubMenu = true;

} else {
  showingSubMenu = false;
}
  
  //Task 5.7
  if (showingSubMenu === true) {
    function buildSubMenu(sublinks) {
      subMenuEl.style.top = '100%'
    }
  } else {
    subMenuEl.style.top = '0'
  }

  function buildSubMenu() {
    subMenuEl.remove()
  }
//Task 5.8
  for (elem of subMenuEl) {
    let newLink = document.createElement('A')
    newLink.href = 'elem'
    newLink.textContent = elem
    subMenuEl.appendChild(newLink)
  }
  
};
//Task 6.0
subMenuEl.onclick = function (event) {
  event.preventDefault();
  let target = event.target;
  console.log(target)
  if (target.tagName != "A") {
    return;
  }
  let showingSubMenu = false
  heading = document.createElement('h1')
  heading.textContent = target
  mainEl.appendChild(heading)
}


