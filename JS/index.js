let menu = document.querySelector(".bi-list");
let nav = document.querySelector(".nav");

menu.onclick = () => {
    nav.classList.toggle("newlist")
    menu.classList.toggle("bi-x")
}

// Dishes
const data = [
    {
        image: "https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg",
        title: "Tasty Food",
        ratting: "⭐⭐⭐⭐⭐",
        cost: "$50"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9f1dnFvnFKgfrd6sYoUpD3cLebYcg_AUMjA&usqp=CAU",
        title: "Tasty Food",
        ratting: "⭐⭐⭐⭐⭐",
        cost: "$60"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wQ5E0MOTgxuHCeBX4a14UUah6JpTk9NYyg&usqp=CAU",
        title: "Tasty Food",
        ratting: "⭐⭐⭐⭐⭐",
        cost: "$70"
    },
    {
        image: "https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg",
        title: "Tasty Food",
        ratting: "⭐⭐⭐⭐⭐",
        cost: "$30"
    }, {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_BJwyjsUiqs8yXWtgL-eSWzNZ--CdEXbXA&usqp=CAU",
        title: "Tasty Food",
        ratting: "⭐⭐⭐⭐⭐",
        cost: "$60"
    }, {
        image: "https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg",
        title: "Tasty Food",
        ratting: "⭐⭐⭐⭐",
        cost: "$20"
    }

]

const data2 = [
    {
        id: 1,
        image: "../ASSETS/images/image5.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 2,
        image: "../ASSETS/images/image4.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 3,
        image: "../ASSETS/images/image6.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 4,
        image: "../ASSETS/images/image4.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 5,
        image: "../ASSETS/images/image5.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 6,
        image: "../ASSETS/images/image6.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 7,
        image: "../ASSETS/images/image5.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 8,
        image: "../ASSETS/images/image2.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }, {
        id: 9,
        image: "../ASSETS/images/image5.jpeg",
        ratting: "⭐⭐⭐⭐⭐",
        title: "Delicious Food",
        about: "lorem ipsum Dotor sit, Amet Consector Adepsing Wliut",
        cost: "$50"
    }

]

const card = document.querySelector(".dish-cards");
const items = document.querySelector(".items");


data.map((x, i) => {
    card.innerHTML += `<div class="dish-card  ">
<img class="dish-image" src=${x.image}>
<div class="dish-detailes text-center">
<h4>${x.title}</h4>
<h5>${x.ratting}</h5>
<span class="px-3">${x.cost}</span><span><button class="cart-btn border rounded">Add To Cart</button></span>
</div>
    </div>`
})

data2.map((item, inedx) => {
    items.innerHTML += `<div class=" " ">
    <img class="item-image" src=${item.image}>
    <div class=" item-detailes px-2 py-2">
    <h5 class="pt-0">${item.ratting}</h5>
    <h4>${item.title}</h4>
    <p>${item.about}</p>
    <span class="px-3">${item.cost}</span><span><button class="cart-btn border rounded">Add To Cart</button></span>
    </div>
        </div>`
})
