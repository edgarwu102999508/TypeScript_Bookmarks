import { Bookmark, ListTemplate } from "./ListTemplate.js";

const addButton = document.querySelector(".addBtn") as HTMLButtonElement;
const modal = document.querySelector(".modal") as HTMLDivElement;

addButton.onclick = function () {
  modal.style.display = "block";
  const cancelButton = document.querySelector("#cancel") as HTMLButtonElement;
  cancelButton.onclick = function () {
    modal.style.display = "none";
    new Bookmark(
      (titleImg.value = "0"),
      (bookmarkTitle.value = ""),
      (description.value = "")
    );
  };
};

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const titleImg = document.querySelector("#titleImg") as HTMLSelectElement;
const bookmarkTitle = document.querySelector("#title") as HTMLInputElement;
const description = document.querySelector("#description") as HTMLInputElement;

const container = document.querySelector(
  "#bookmark-container"
) as HTMLDivElement;

titleImg.onchange = function () {
  if (titleImg.value === "200") {
    titleImg.value === "200";
  } else if (titleImg.value === "201") {
    titleImg.value === "201";
  } else if (titleImg.value === "202") {
    titleImg.value === "202";
  } else if (titleImg.value === "203") {
    titleImg.value === "203";
  } else if (titleImg.value === "204") {
    titleImg.value === "204";
  } else {
    titleImg.value === "205";
  }
};

const list = new ListTemplate(container);
form.addEventListener("submit", (e: Event) => {
  let createBookmark = new Bookmark(
    titleImg.value,
    bookmarkTitle.value,
    description.value
  );

  list.render(container, createBookmark);
  modal.style.display = "none";

  new Bookmark(
    (titleImg.value = "0"),
    (bookmarkTitle.value = ""),
    (description.value = "")
  );

  e.preventDefault();
});
