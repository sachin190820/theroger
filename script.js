// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.getElementById("container");
//     const modal = document.querySelector(".modal");
//     const modalCloseBtn = document.querySelector(".close-btn");
//     const productImg = document.querySelector(".product-img img");
//     const productName = document.querySelector(".product-name");
//     const modalProductName =document.scrollingElement(".modal .product-name h1");
//     const modalProductInfo = document.scrollingElement(".modal .product-name p");

//     const boxCount = 12 * 12;
//     const boxSize = 240;
//     const totalImages = 15;
//     const columns = 12;

//     const product=[
//         {
//             info: "The Roger A1",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A2",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A3",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A4",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A5",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A6",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A7",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A8",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A9",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A10",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A11",
//             name: "White  |   sand",
//         },
//         {
//             info: "The Roger A12",
//             name: "White  |   sand",
//         },

//     ];
    

//     const containerWidth = columns * boxSize;
//     container.style.width = containerWidth + "px";

//     for (let i=0; i < boxCount; i++) {
//         const box = document.createElement("div");
//         box.classList.add("box");

//         const img = document.createElement("img");
//         img.classList.add("img");
//         const imageIndex = (i % totalImages) +1;
//         img.src='img/img${imageIndex}.webp';

//         const productIndex = 1 % products.length;
//         const product = products[productIndex];

//         const info = document.createElement("p");
//         info.textContent = producat.info;

//         const name = document.createElement("h1");
//         name.textContent = producat.name;

//         const content = document.createElement("div");
//         content.classList.add("content");
//         content.appendChild(info);
//         content.appendChild(name);

//         box.appendChild(img);
//         box.appendChild(content);
//         container.appendChild(box);



//     }

//     let  isDragging = false;
//     let isClicking = false;

//     box.addEventListener("mousedown", function(){
//         let isDragging = false;
//         let isClicking = true;
//     })

//     box.addEventListener("mousemove", function(){
//         let isDragging = true;
//         let isClicking = true;
//     })

//     box.addEventListener("click", function(){
//         if (!isDragging && isClicking) {
//             gsap.set(modal, {disply: "flex"});
//             gsap.to(modal, { opacity: 1, duration: 0.4});
//             producatImg.src=img.src;
//             modalProductName.textContent= producat.name;
//             modalProductInfo.textContent=product.info;

//         }
//     })

// });



document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector(".close-btn");
  const productImg = document.querySelector(".product-img img");
  const productName = document.querySelector(".product-name h1");
  const modalProductName = document.querySelector(".modal .product-name h1");
  const modalProductInfo = document.querySelector(".modal .product-name p");
  // const productInfo = document.querySelector(".product-name p");
  // const cartBtn = document.querySelector(".cart-btn button");

  const boxCount = 12 * 12;
  const boxSize = 240;
  const totalImages = 15;
  const columns = 12;

  const products = [
      {
          info: "The Roger A1",
          name: "White  |   sand A1",
      },
      {
          info: "The Roger A2",
          name: "White  |   sand A2",
      },
      {
          info: "The Roger A3",
          name: "White  |   sand A3",
      },
      // Add more product objects as needed
      {
          info: "Another Shoe A4",
          name: "Color  |   Style A4",
      },
      {
          info: "Another Shoe B5",
          name: "Color  |   Style B5",
      },
      {
        info: "The Roger A6",
        name: "White  |   sand6",
    },
    {
        info: "The Roger A7",
        name: "White  |   sand7",
    },
    {
        info: "The Roger A8",
        name: "White  |   sand8",
    },
    // Add more product objects as needed
    {
        info: "Another Shoe A9",
        name: "Color  |   Style A9",
    },
    {
        info: "Another Shoe B10",
        name: "Color  |   Style B10",
    },
    {
      info: "The Roger A11",
      name: "White  |   sand11",
  },
  {
      info: "The Roger A12",
      name: "White  |   sand12",
  },

  ];

  const containerWidth = columns * boxSize;
  container.style.width = containerWidth + "px";

  for (let i = 0; i < boxCount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");

      const img = document.createElement("img");
      img.classList.add("img");
      const imageIndex = (i % totalImages) + 1;
      img.src = `img/img${imageIndex}.webp`;

      const productIndex = i % products.length;
      const product = products[productIndex];

      const info = document.createElement("p");
      info.textContent = product.info;

      const name = document.createElement("h1");
      name.textContent = product.name;

      const content = document.createElement("div");
      content.classList.add("content");
      content.appendChild(info);
      content.appendChild(name);

      box.appendChild(img);
      box.appendChild(content);
      container.appendChild(box);

      let isDragging = false;
      let isClicking = false;

      box.addEventListener("mousedown", function () {
          isDragging = false;
          isClicking = true;
      });

      box.addEventListener("mousemove", function () {
          isDragging = true;
          isClicking = false;
      });

      box.addEventListener("click", function () {
          if (!isDragging && isClicking) {
            gsap.set(modal, { display: "flex" });
            gsap.to(modal, { opacity: 1, duration: 0.4 });
            productImg.src = img.src;
            modalProductName.textContent = product.name;
            modalProductInfo.textContent = product.info;
          }
      });
  }
  modalCloseBtn.addEventListener("click", function(){
    gsap.to(modal, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        gsap.set(modal, {
          display: "none",
        });

      },
    });
  });



  let isContainerDragging = false;
  let startCoords = { x: 0, y : 0};
  let startTranslate = {x: 0, y: 0 };
  
  container.addEventListener("mousedown", onDragStart);
  container.addEventListener("mouseuo", onDragEnd);
  container.addEventListener("mouseleave", onDragEnd);
  container.addEventListener("mousemove", onDrag );

  function onDragStart(e) {

    isContainerDragging=true;
    startCoords.x=e.clientX;
    startCoords.y=e.clientY;
    startTranslate.x=gsap.getProperty(container, "x");
    startTranslate.y=gsap.getProperty(container, "y");
    gsap.set(container,{ curser:"grabbing"});
    gsap.set(container, { userSelect:"none"});
  
  }


  function onDragEnd() {

    if(!isContainerDragging) return;
    isContainerDragging = false;
    gsap.set(container, { cursor:"grab"});
    gsap.set(container, { userSelect:"auto"});
    
  }

  function onDrag(e) {
    if(!isContainerDragging) return;
    e.preventDefault();
    const deltaX = e.clientX - startCoords.x;
    const deltaY = e.clientY - startCoords.y;
    const translateX = startTranslate.x + deltaX;
    const translateY = startTranslate.y + deltaY;
    gsap.to(container,{
      x: translateX,
      y: translateY,
      duration: 0.5,
      ease: "power1.out",
    });

  }
});
