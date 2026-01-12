var product = [
    { name: "Brown Chair", headline: "Soft like clouds", price: "10,000", image: "https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYWlyfGVufDB8fDB8fHww"},
    { name: "Aesthetic Bed", headline: "Comfort Matters", price: "30,000", image: "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8" },
    { name: "Sofa", headline: "Felt like heaven", price: "25,000", image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D" }, 
    { name: "Dining Table", headline: "For family gathering", price: "45,000", image: "https://images.unsplash.com/photo-1606660023296-81d67734170a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" }, 
    { name: "Black Chair", headline: "Black as Bold", price: "15,500", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" },
];
var popularProducts = [
    { name: "Loyal Dinner Table", headline: "Best for family dinner", price: "59,000", image: "https://plus.unsplash.com/premium_photo-1684445034959-b3faeb4597d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmVyJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" },
    { name: "Yellow Chair", headline: "Bright as Butter", price: "30,000", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Office Chair", headline: "Best for office", price: "15,000", image: "https://plus.unsplash.com/premium_photo-1682432838340-e1001c1d97c8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

var cart = [];

function addProduction(){
    var clutter = "";
    product.forEach(function (product, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i  data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>` ;

        document.querySelector(".products").innerHTML = clutter;
    })
}

function addPopularProduction() {
    var clutter = "";
    popularProducts.forEach(function (product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}" alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
                    </div>
                </div>` ;

        document.querySelector(".populars").innerHTML = clutter;
    })
}

function addToCart(){
    document.querySelector(".products").addEventListener('click',function(details){
        if(details.target.classList.contains('add')){
            cart.push(product[details.target.dataset.index]);
        };
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";
        var clutter = "";
        cart.forEach(function(product,index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden"> <img w-full h-full object-cover src="${product.image}" /> </div>
                   <div> 
                    <h3 class="font-semibold">${product.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
                    </div>
                </div>`;
        })
            document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

showCart();
addProduction();
addPopularProduction();
addToCart();
