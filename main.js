window.addEventListener("load", function () {
  const dishItem = [
    {
      img: "./images/popular-dish-image-1.jpg",
      name: "Chicken Manjoori",
      price: "$15",
      desc: "Dish relished by all age groups as a starter dish at parties.",
    },
    {
      img: "./images/popular-dish-image-2.jpg",
      name: "Hotdog",
      price: "$10",
      desc: "Grilled sausage served in the slit of a partially sliced bun.",
    },
    {
      img: "./images/popular-dish-image-3.jpg",
      name: "Fresh Salmon",
      price: "$5",
      desc: "Beat the health blues with our Super Immune Blue Juice Recipe.",
    },
    {
      img: "./images/popular-dish-image-4.jpg",
      name: "Veg Burger",
      price: "$10",
      desc: "Burgers may be made from ingredients like beans.",
    },
  ];
  const dishList = document.querySelector(".menu__list");
  dishItem.map((item) => {
    const template = `
    <div class="item">
    <div class="image">
        <img src="${item.img}" alt="">
    </div>
    <div class="info">
        <h3 class="name">${item.name}</h3>
        <p class="price">${item.price}</p>
    </div>
    <p class="desc">${item.desc}</p>
    </div>
      `;
    dishList.insertAdjacentHTML("beforeend", template);
  });

  const blogItem = [
    {
      img: "./images/blog-thumbnail-image-1.jpg",
      title: "The Legend Of US Cuisine: The Story Of ",
      desc: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
    {
      img: "./images/blog-thumbnail-image-2.jpg",
      title: "The Most Popular Delicious Food Of Mediterranean Cuisine ",
      desc: "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
  ];
  const blogList = document.querySelector(".blog-list");
  blogItem.map((item) => {
    const blogTemplate = `
  <div class="blog-item">
  <div class="blog-img">
      <img src="${item.img}" alt="">
  </div>
  <div class="blog-content">
      <h2 class="title">${item.title}</h2>
      <p class="desc">${item.desc}</p>
      </div>
  </div>
  `;
    blogList.insertAdjacentHTML("beforeend", blogTemplate);
  });
});
