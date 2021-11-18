const addNoteMenu = document.querySelector("#add-note-menu");
const addWindow = document.querySelector(".add-window");
const addNoteBtn = document.querySelector("#add-note-btn");
const exitBtn = document.querySelector("#exit-btn");
const notesApp = document.querySelector(".notes-app");
const rotationArr = ["rotate(1deg)", "rotate(2deg)", "rotate(3deg)", "rotate(4deg)", "rotate(5deg)", "rotate(-1deg)", "rotate(-2deg)", "rotate(-3deg)", "rotate(-4deg)", "rotate(-5deg)"]

function addStickyNote(title, content){
  let note = document.createElement("div");
  let noteHeader = document.createElement("div");
  let noteTitle = document.createElement("div");
  let noteContent = document.createElement("div");
  let btn = document.createElement("i")

  note.className = "app-note-template";
  noteHeader.className = "note-header";
  noteTitle.className = "note-title";
  noteContent.className = "note-content";
  btn.className = "far fa-times-circle"
  btn.id = `app-exit-btn delete-btn`

  noteHeader.appendChild(btn);
  noteTitle.innerText = title;
  noteContent.innerText = content;

  btn.addEventListener("click", () => {
    btn.parentNode.parentNode.remove();
  })

  note.appendChild(noteHeader);
  note.appendChild(noteTitle);
  note.appendChild(noteContent);
  note.style.transform = 
      `${rotationArr[Math.floor(Math.random() * rotationArr.length)]}`

  notesApp.appendChild(note);

}

addNoteMenu.addEventListener("click", () => {
  addWindow.style.display = "flex";
  addWindow.dataset.visible = "true";
})

addNoteBtn.addEventListener("click", () => {
  if(addWindow.dataset.visible === "true"){
    addWindow.dataset.visible = "false";
    addWindow.style.display = "none";
    title = document.querySelector("#title").value;
    content = document.querySelector("#content").value;
    addStickyNote(title,content);
  }
})

document.addEventListener("keydown", (event) => {
  if(event.key === "Enter" && addWindow.dataset.visible === "true"){
    addWindow.style.display = "none";
    addWindow.dataset.visible = "false";
    title = document.querySelector("#title").value;
    content = document.querySelector("#content").value;
    addStickyNote(title,content);
  }else if(event.key === "Escape" && addWindow.dataset.visible === "true"){
    addWindow.dataset.visible = "false";
    addWindow.style.display = "none";
  }
})

exitBtn.addEventListener("click", () => {
  if(addWindow.dataset.visible === "true"){
    addWindow.dataset.visible = "false";
    addWindow.style.display = "none";
}})

