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

//Task 1.0
let mainEl = document.querySelector("main");
//Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";
//Task 1.2
const newH1 = document.createElement("h1");
let banner = (newH1.textContent = "SEI Rocks!");
mainEl.append(banner);
mainEl.classList.add("flex-ctr");
mainEl.style.fontSize = "xx-large";

//Task 2.0
const topMenuEl = document.querySelector("#top-menu");
//Task 2.1
topMenuEl.style.height = "100%";
//Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Task 2.3
topMenuEl.classList.add("flex-around");

//TASK 3.1
for (let i = 0; i < menuLinks.length; ++i) {
  const newA = document.createElement("a");
  newA.href = menuLinks[i].href;
  newA.textContent = menuLinks[i].text;
  topMenuEl.append(newA);
}

///////Part 2

//Task 4.0
let subMenuEl = document.querySelector("#sub-menu");
//Task 4.1
subMenuEl.style.height = "100%";
//Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
//Task 4.3
subMenuEl.classList.add("flex-around");
//Task 4.4
subMenuEl.style.position = "absolute";
//Task 4.5
subMenuEl.style.top = "0";
//Task 5.1
const topMenuLinks = topMenuEl.children;
let showingSubMenu = false;

//Task 5.2 - 5.8
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName != "A") {
    return;
  } else {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    }
    for (elem of topMenuLinks) {
      elem.classList.remove("active");
    }
  }
  event.target.classList.add("active");

  if (event.target.textContent === "about") {
    showingSubMenu = false;
    mainEl.innerHTML = ''
    mainEl.append(event.target.text.toUpperCase())
  } else {
    showingSubMenu = true;
  }

  let subLinkObject1 = menuLinks[1].subLinks;
  let subLinkObject2 = menuLinks[2].subLinks;
  let subLinkObject3 = menuLinks[3].subLinks;


  let buildSubMenu = (sub) =>{
    subMenuEl.innerHTML = ''
    for (let i = 0; i < sub.length; ++i) {
      const subA = document.createElement("A");
      subA.href = sub[i].href;
      subA.textContent = sub[i].text;
      subMenuEl.append(subA);
    }
  }

  if (showingSubMenu == true) {
    if (event.target.textContent === "catalog") {
      buildSubMenu(subLinkObject1);
      subMenuEl.style.top = '100%';
    } else if (event.target.textContent === "orders") {
      buildSubMenu(subLinkObject2);
      subMenuEl.style.top = '100%';
    } else if (event.target.textContent === "account")
      buildSubMenu(subLinkObject3);
      subMenuEl.style.top = '100%';
  } else if(showingSubMenu == false){
    subMenuEl.style.top = '0';
  } 

});

subMenuEl.addEventListener('click', function (event2){
  event2.preventDefault();
  if (event2.target.tagName != "A") {
    return;
  } 
  showingSubMenu = false
  subMenuEl.style.top = '0'
  for (elem of topMenuLinks) {
    elem.classList.remove("active");
  }
  mainEl.innerHTML = ''
mainEl.append(event2.target.text)
})

























//Task 5.5
// for(elem of topMenuLinks){
//   elem.classList.add('active')
// }
//Task 5.3
//   let classInfo = target.className;
// //Task 5.3
//   if (classInfo === "active") {
//     classInfo.classList.remove("active");
//     showingSubMenu = false;
//     subMenuEl.style.top = "0";
//     return;
//   }
// //Task 5.4

//   topMenuLinks.classList.remove("active");

// //Task 5.6
//   target.classList.add("active")

//   const anchorName = event.target.textContent

// const menuLink = menuLinks.find((link) => {
//   return link.text === anchorName;
// });

// if (menuLink === undefined) {
//   return;
// }

// if (menuLink.subLinks) {
//   showingSubMenu = true;

// } else {
//   showingSubMenu = false;
// }

//   //Task 5.7
//   if (showingSubMenu === true) {
//     function buildSubMenu(sublinks) {
//       subMenuEl.style.top = '100%'
//     }
//   } else {
//     subMenuEl.style.top = '0'
//   }

//   function buildSubMenu() {
//     subMenuEl.remove()
//   }
// //Task 5.8
//   for (elem of subMenuEl) {
//     let newLink = document.createElement('A')
//     newLink.href = 'elem'
//     newLink.textContent = elem
//     subMenuEl.appendChild(newLink)
//   }

// };
// //Task 6.0
// subMenuEl.onclick = function (event) {
//   event.preventDefault();
//   let target = event.target;
//   console.log(target)
//   if (target.tagName != "A") {
//     return;
//   }
//   let showingSubMenu = false
//   heading = document.createElement('h1')
//   heading.textContent = target
//   mainEl.appendChild(heading)
// }
