
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

container.appendChild(para);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const div1 = document.createElement("div");
div1.style.border = " 1px solid black";
div1.style.backgroundColor = "pink";

container.appendChild(div1);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

div1.appendChild(h1)

const para1 = document.createElement("p");
para1.textContent = "ME TOO!";

div1.appendChild(para1);


