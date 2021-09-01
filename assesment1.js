function displayUsers(users) {
  const div = document.getElementsByTagName("div");
  let ulTag = document.createElement("ul");
  div[0].appendChild(ulTag);
  for (let i = 0; i < users.length; i++) {
    document.getElementsByTagName("ul")[0].append(document.createElement("li"));
    document.getElementsByTagName("li")[i].innerText = users[i];
    if (i % 2 === 0) {
      document.getElementsByTagName("li")[i].setAttribute("class", "even");
    } else {
      document.getElementsByTagName("li")[i].setAttribute("class", "odd");
    }
  }
}

displayUsers(["bruno", "javier", "fernando"]);

// function displayUsers(users) {
//   // 1
//   const div = document.getElementById("app");
//   const ul = document.createElement("ul");
//   div.appendChild(ul);

//   // 2
//   users.forEach((item, i) => {
//     // 3
//     const isEven = i % 2 === 0;
//     const className = isEven ? "even" : "odd";
//     ul.innerHTML += `<li class="${className}"> ${item}</li>`;
//   });
// };
