const icon = document.querySelectorAll(".cards__icon");
const items = document.querySelector(".cards-items");
const leaf = document.querySelector(".leaf");
const leafMini = document.querySelector(".leaf__mini");

const leafMiniTop = leafMini.offsetTop;
const leafMiniLeft = leafMini.offsetLeft;
const leafTop = leaf.offsetTop;
const leafLeft = leaf.offsetLeft;

items.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pesticids__content")) {
    document.querySelector(".pesticids__img").src =
      "../img/icon_active/pesticids_active.png";
    leaf.style.left = (leafLeft-8)+"px";
    leaf.style.top = (leafTop-8)+"px"
    leafMini.style.left = (leafMiniLeft+3)+"px";
    leafMini.style.top = (leafMiniTop+1)+"px";
  } else if (e.target.classList.contains("culture__content")) {
    document.querySelector(".culture__img").src =
      "../img/icon_active/tree_active.png";
    leaf.style.left = (leafLeft-6)+"px";
    leaf.style.top = (leafTop-6)+"px";
    leafMini.style.left = (leafMiniLeft+6)+"px";
    leafMini.style.top = (leafMiniTop+3)+"px";
  } else if (e.target.classList.contains("bugs__content")) {
    document.querySelector(".bugs__img").src =
      "../img/icon_active/bugs_active.png";
    leaf.style.left = (leafLeft-4)+"px";
    leaf.style.top = (leafTop-4)+"px";
    leafMini.style.left = (leafMiniLeft+2)+"px";
    leafMini.style.top = (leafMiniTop+2)+"px";
  } else if (e.target.classList.contains("substs__content")) {
    document.querySelector(".substs__img").src =
      "../img/icon_active/scheme_active.png";
    leaf.style.left = (leafLeft-2)+"px";
    leaf.style.top = (leafTop-2)+"px";
    leafMini.style.left = (leafMiniLeft+5)+"px";
    leafMini.style.top = (leafMiniTop+3)+"px";
  }
});

items.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("pesticids__content")) {
    document.querySelector(".pesticids__img").src = "../img/icon/pesticids.png";
    leaf.style.left = (leafLeft+8)+"px";
    leaf.style.top = (leafTop+8)+"px"
    leafMini.style.left = (leafMiniLeft-3)+"px";
    leafMini.style.top = (leafMiniTop-1)+"px";
  } else if (e.target.classList.contains("culture__content")) {
    document.querySelector(".culture__img").src = "../img/icon/tree.png";
    leaf.style.left = (leafLeft+6)+"px";
    leaf.style.top = (leafTop+6)+"px";
    leafMini.style.left = (leafMiniLeft-6)+"px";
    leafMini.style.top = (leafMiniTop-3)+"px";
  } else if (e.target.classList.contains("bugs__content")) {
    document.querySelector(".bugs__img").src = "../img/icon/bugs.png";
    leaf.style.left = (leafLeft+4)+"px";
    leaf.style.top = (leafTop+4)+"px";
    leafMini.style.left = (leafMiniLeft-2)+"px";
    leafMini.style.top = (leafMiniTop-2)+"px";
  } else if (e.target.classList.contains("substs__content")) {
    document.querySelector(".substs__img").src = "../img/icon/scheme.png";
    leaf.style.left = (leafLeft+2)+"px";
    leaf.style.top = (leafTop+2)+"px";
    leafMini.style.left = (leafMiniLeft-5)+"px";
    leafMini.style.top = (leafMiniTop-3)+"px";
  }
});
