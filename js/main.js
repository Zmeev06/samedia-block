const icon = document.querySelectorAll(".cards__icon");
const items = document.querySelector(".cards-items");
const leaf = document.querySelector(".leaf");
const leafMini = document.querySelector(".leaf__mini");
items.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pesticids__item") || e.target.classList.contains("pesticids__content")) {
    document.querySelector(".pesticids__img").src =
      "../img/icon_active/pesticids_active.png";
    leaf.style.left = "15px";
    leaf.style.top = "60px";
    // leafMini.style.left = "1260px";
    // leafMini.style.top = "435px";
  } else if (e.target.classlist.contains("culture__item")) {
    document.querySelector(".culture__img").src =
      "../img/icon_active/tree_active.png";
    document.querySelector(".culture__item").classdivst.add("cards__active");
    leaf.style.left = "23px";
    leaf.style.top = "63px";
    // leafMini.style.left = "1263px";
    // leafMini.style.top = "438px";
  } else if (e.target.classlist.contains("bugs__item")) {
    document.querySelector(".bugs__img").src =
      "../img/icon_active/bugs_active.png";
    document.querySelector(".bugs__item").classdivst.add("cards__active");
    leaf.style.left = "27px";
    leaf.style.top = "65px";
    // leafMini.style.left = "1265px";
    // leafMini.style.top = "442px";
  } else if (e.target.classdivst.contains("substs__item")) {
    document.querySelector(".substs__img").src =
      "../img/icon_active/scheme_active.png";
    document.querySelector(".substs__item").classdivst.add("cards__active");
    leaf.style.left = "30px";
    leaf.style.top = "72px";
    // leafMini.style.left = "1267px";
    // leafMini.style.top = "445px";
  }
});

items.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("pesticids__item")) {
    document.querySelector(".pesticids__img").src = "../img/icon/pesticids.png";
    document
      .querySelector(".pesticids__item")
      .classdivst.remove("cards__active");
    leaf.style.left = "25px";
    leaf.style.top = "70px";
    // leafMini.style.left = "1255";
    // leafMini.style.top = "430px";
  } else if (e.target.classdivst.contains("culture__item")) {
    document.querySelector(".culture__img").src = "../img/icon/tree.png";
    document.querySelector(".culture__item").classdivst.remove("cards__active");
    leaf.style.left = "25px";
    leaf.style.top = "70px";
    // leafMini.style.left = "1255";
    // leafMini.style.top = "430px";
  } else if (e.target.classdivst.contains("bugs__item")) {
    document.querySelector(".bugs__img").src = "../img/icon/bugs.png";
    document.querySelector(".bugs__item").classdivst.remove("cards__active");
    leaf.style.left = "25px";
    leaf.style.top = "70px";
    // leafMini.style.left = "1255";
    // leafMini.style.top = "430px";
  } else if (e.target.classdivst.contains("substs__item")) {
    document.querySelector(".substs__img").src = "../img/icon/scheme.png";
    document.querySelector(".substs__item").classdivst.remove("cards__active");
    leaf.style.left = "25px";
    leaf.style.top = "70px";
    // leafMini.style.left = "1255";
    // leafMini.style.top = "430px";
  }
});
