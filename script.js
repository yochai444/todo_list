"use strict";
let i = 0;
let tasks = [];

// creat new task
const createTask = () => {
  // get the input of new task
  let newTask = document.querySelector(".mission").value;

  let task = {
    id: i,
    complited: newTask,
    status: false,
  };
  tasks.push(task);

  // add anther element to the task list
  const btn = document.createElement("button");

  const div1 = document.createElement("div");
  div1.className = "newRow";
  div1.id = `${i}`;
  i++;

  const para = document.createElement("p");
  para.className = "newTask";
  // add the new task to the new element
  const node = document.createTextNode(newTask);
  const node1 = document.createTextNode("uncomeplited");
  let old = document.querySelector(".new");
  // add the new task to the new element0
  old.appendChild(div1);
  div1.appendChild(para);
  para.appendChild(node);

  div1.appendChild(btn);
  btn.appendChild(node1);
  // cheack status
  return [btn, div1, para, task];
};

// cheack sturus task
const statusButton = (btn, i) => {
  let cheak = "comeplited";
  btn.addEventListener("click", function () {
    if (btn.textContent === "uncomeplited") {
      btn.textContent = "comeplited";
      tasks[i].status = true;
    } else {
      btn.textContent = "comeplited";
      tasks[i].status = false;
    }
  });
  let del = (document.querySelector(".mission").value = "");
};

document.querySelector(".add").addEventListener("click", function () {
  // Call the function to create a new task

  let [btn, div1, para, task] = createTask();
  let status = statusButton(btn, task.id);
  let done = removeDone(div1);
  let hide = hideDone(div1);
  let show = showAll(div1);
});

document.querySelector(".delete").addEventListener("click", function () {
  // clear input task
  let newTask = (document.querySelector(".mission").value = "");
});

// delete done task by click button
const removeDone = (div1) => {
  document.querySelector(".deleteDone").addEventListener("click", function () {
    for (let j = 0; j < tasks.length; j++) {
      if (tasks[j].status == true) {
        let done = document.getElementById(`${j}`);
        done.parentNode.removeChild(done);
      }
    }
  });
};

//hide done task by click button
const hideDone = (div1) => {
  document.querySelector(".hideDone").addEventListener("click", function () {
    for (let j = 0; j < tasks.length; j++) {
      if (tasks[j].status == true) {
        let done = document.getElementById(`${j}`);
        done.style.display = "none";
      }
    }
  });
};

// show all task by click button
const showAll = (div1) => {
  document.querySelector(".showAll").addEventListener("click", function () {
    for (let j = 0; j < tasks.length; j++) {
      if (tasks[j].status == true) {
        let done = document.getElementById(`${j}`);
        done.style.display = "";
      }
    }
  });
};
