window.addEventListener("load", function () {
  // Declare
  const blogItem = [
    {
      img: "../images/blog-thumbnail-image-1.jpg",
      title: "The Legend Of US Cuisine: The Story Of Hungry People",
      desc: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
    {
      img: "../images/blog-thumbnail-image-2.jpg",
      title: "The Most Popular Delicious Food Of Mediterranean Cuisine ",
      desc: "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
    {
      img: "../images/blog-thumbnail-image-3.jpg",
      title: "The Best Seafood In San Francisco, According To Top Chefs",
      desc: "Collaborative on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
    {
      img: "../images/blog-thumbnail-image-4.jpg",
      title: "The Top 10 Most Famous Indian Dishes In The World Are Here",
      desc: "Podcasting on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
  ];

  // Render
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
