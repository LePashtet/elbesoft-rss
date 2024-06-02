document.addEventListener("DOMContentLoaded", function () {
  const dynamicDataContainer = document.getElementById("dynamic-data");
  const data = [
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad minim veniam.",
      link: "#",
      big: true,
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "H6 Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
    {
      image: "/newsletter-bg.jpeg",
      title: "Headline",
      description: "Lorem ipsum dolor sit amet, consectetur",
      link: "#",
    },
  ];

  const firstItem = data.find((item) => item.big);
  const restItems = data.filter((item) => !item.big);

  const firstRow = document.createElement("tr");
  const firstCell = document.createElement("td");
  firstCell.classList.add("data-block", "big-data-block");
  firstCell.innerHTML = `
    <img src="${firstItem.image}" alt="${item.description}">
    <h1 >${firstItem.title}</h1>
    <p> ${firstItem.description}</p>
    <a href="${firstItem.link}">Ссылка</a>
  `;
  firstRow.appendChild(firstCell);
  dynamicDataContainer.appendChild(firstRow);

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
    dynamicDataContainer.appendChild(row);
  });
});
