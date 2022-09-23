
// This is an Array of objects...!!
const reviews = [
    {
        id: 1,
        name: "Billie Wesker",
        job: "WEB DEVELOPER",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },

      {
        id: 2,
        name: "Jade Wesker",
        job: "WEB DESIGNER",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },

      {
        id: 3,
        name: "Mike Smith",
        job: "INTERN",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },

      {
        id: 4,
        name: "Billy Henderson",
        job: "THE BOSS",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      }
];

// Get Elements...
const img = document.getElementById("review-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// Set Starting Item
let currentItem = 0; // We can remove the parameter --> "currentItem" given to the function showPerson as it is a global variable.

// Load initial Item
window.addEventListener("DOMContentLoaded", ()=>{
    showPerson();
});


// Show person based on item...
function showPerson(){

    const item = reviews[currentItem];
    // img.src = reviews[currentItem].img;
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show Next Person
nextBtn.addEventListener("click", ()=>{
    
    currentItem++;
    if (currentItem > reviews.length-1 ) {
        currentItem = 0;
    }
    showPerson();

});

// Show Previous Person
prevBtn.addEventListener("click", ()=>{
    
    currentItem--;
    if (currentItem < 0 ) {
        currentItem = reviews.length-1;
    }
    showPerson();

});

// Show a Random Person
randomBtn.addEventListener("click", ()=>{

    currentItem = Math.floor( Math.random()*reviews.length );
    console.log(currentItem);
    showPerson();

});