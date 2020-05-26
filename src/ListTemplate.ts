export class Bookmark {
  constructor(
    public titleImg: string,
    public title: string,
    public description: string
  ) {}
}

export class ListTemplate {
  private container: HTMLDivElement | null = null;

  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  render(container: HTMLDivElement, bookmark: Bookmark) {
    const div = document.createElement("div");
    div.className = "card";

    const functionBtn = document.createElement("div");
    functionBtn.className = "function-button";
    const deleteBtn = document.createElement("a");
    deleteBtn.className = "delete";
    const trash = document.createElement("i");
    trash.className = "far fa-trash-alt";
    deleteBtn.append(trash);
    functionBtn.append(deleteBtn);
    div.append(functionBtn);

    const img = document.createElement("img");
    img.className = "title-img";
    img.src = "https://picsum.photos/" + bookmark.titleImg;
    div.append(img);

    const h3 = document.createElement("h3");
    h3.className = "title";
    h3.innerText = bookmark.title;
    div.append(h3);

    const p = document.createElement("p");
    p.className = "description";
    p.innerText = bookmark.description;
    div.append(p);

    this.container?.append(div);

    // DELETE BOOKMARK
    let delBookmark = () => {
      console.log("delete");
      this.container?.removeChild(div);
    };

    deleteBtn.onclick = function () {
      if (confirm("Are you sure?")) {
        delBookmark();
      }
    };
  }
}
