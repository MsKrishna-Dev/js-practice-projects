// selecction
// var a = document.querySelector("#home");

// css change
// a.style.color = "red";

//html change
// home.innerHTML = "<i>HEY</i>";

// text change
// home.textContent = "HOME";

// Adding listeners
// home.addEventListener('mouseenter', function(){
//     home.style.color = "red";
// })

// home.addEventListener('mouseleave', function () {
//     home.style.color = "black";
// })

var a = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1760348644133-6c7eda6187bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXRhbHMlMjBvZiUyMHJvc2VzfGVufDB8fDB8fHww"},
    { name: "Animal of town", image:"https://images.unsplash.com/photo-1549652187-449b05f1f0c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5pbWFscyUyMGF0JTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D"},
    { name: "the crowd of the city ", image:"https://images.unsplash.com/photo-1628091157331-2c324b432bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRoZSUyMGNyb3dkJTIwb2YlMjB0aGUlMjBjaXR5fGVufDB8fDB8fHww" },
    { name: "fruits of planet", image: "https://plus.unsplash.com/premium_photo-1724026486959-2b2fa43c724c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZydWl0cyUyMG9mJTIwcGxhbmV0c3xlbnwwfHwwfHx8MA%3D%3D"},
    { name: "orange peeled", image: "https://plus.unsplash.com/premium_photo-1663926403396-6d9831ce6a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww"},
    { name: "web design", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"},
    { name: "a cute girl with teddy", image: "https://plus.unsplash.com/premium_photo-1701984401514-a32a73eac549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2lkc3xlbnwwfHwwfHx8MA%3D%3D"},
    { name: "football", image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D" },
    { name: "peacock", image: "https://images.unsplash.com/photo-1608229772443-c538c890248b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D" },
    { name: "office", image:"https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww"},
    { name: "kitchen", image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"},
    { name: "krishna", image: "https://images.unsplash.com/photo-1655577504030-ef04f5aa8ff7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D" },
    { name: "a coffee shop", image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D"},
    { name: "the emoji", image:"https://images.unsplash.com/photo-1685026101629-3af1f88fc020?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtb2ppfGVufDB8fDB8fHww"}
]

function showCart(){
    var clatter = "";
    a.forEach(function(obj){
        clatter += `<div class="box">
                        <img class="cusor-pointer" src="${obj.image}" alt="">
                    </div>`;
    })

    document.querySelector(".container").innerHTML = clatter;
}

function displaySearchFuncationality(){
    var input = document.querySelector("#searchinput") ;
    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display = "block";
    })

   input.addEventListener("blur", function () {
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input", function(){
        const filteredArray = a.filter(obj => obj.name.toLowerCase().startsWith(input.value));
         var clatter = "";
         filteredArray.forEach(function(obj){
            clatter += `<div class="res flex px-8 py-3">
                <i class="ri-search-linr font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
         })

        document.querySelector(".searchdata").style.display = "block";
         document.querySelector(".searchdata").innerHTML = clatter;
    })

}

displaySearchFuncationality();
showCart();