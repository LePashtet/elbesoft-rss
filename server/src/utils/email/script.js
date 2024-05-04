const {JSDOM} = require("jsdom");
const fs = require("fs")
const {resolve} = require("path");
const html = fs.readFileSync(resolve(__dirname, "./index.html"), "utf8");

const completeEmail = (data) => {
  const dom = new JSDOM(html);
  const document = dom.window.document
  const dynamicDataContainer = document.getElementById("dynamic-data");

  // const firstItem = data.find((item) => item.big);
  const restItems = data;

  // const firstRow = document.createElement("tr");
  // const firstCell = document.createElement("td");
  // firstCell.classList.add("data-block", "big-data-block");
  // firstCell.innerHTML = `
  //   <img src="${firstItem.image}" alt="${item.description}">
  //   <h1 >${firstItem.title}</h1>
  //   <p> ${firstItem.description}</p>
  //   <a href="${firstItem.link}">Ссылка</a>
  // `;
  // firstRow.appendChild(firstCell);
  // dynamicDataContainer.appendChild(firstRow);

  const chunkSize = 3;
  const rowsData = [];
  for (let i = 0; i < restItems.length; i += chunkSize) {
    rowsData.push(restItems.slice(i, i + chunkSize));
  }
  rowsData.forEach((rowItems) => {
    const row = document.createElement("tr");
    rowItems.forEach((item) => {
      const cell = document.createElement("td");
      cell.classList.add("data-block");
      cell.innerHTML = `
        <img src="${item.image}" alt="${item.description}">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <a href="${item.link}">READ</a>
      `;
      row.appendChild(cell);
    });
    dynamicDataContainer.prepend(row);
  });
  return dom.serialize()
};
module.exports = completeEmail
