var arr = [
    {name : "Sunflowers", image : "https://i.pinimg.com/564x/dd/e9/54/dde954f46b76b7510485490e5523b9b7.jpg"},
    {name : "Cool Cats", image : "https://i.pinimg.com/564x/e1/1f/b0/e11fb051fcb917e6e895dfbe04649a04.jpg"},
    {name : "Coasters", image : "https://i.pinimg.com/564x/68/7c/c9/687cc9130a09f9aea216df019097ab35.jpg"},
    {name : "Flowers", image : "https://i.pinimg.com/564x/20/4a/02/204a0291f8fd0eb503508358eaa13585.jpg"},
    {name : "Puppy", image : "https://i.pinimg.com/564x/84/97/60/849760afb278f69a70a741550966d863.jpg"},
    {name : "Nails", image : "https://i.pinimg.com/736x/97/f7/64/97f7649a41964974f1667e718f9433c1.jpg"},
    {name : "Wall", image : "https://i.pinimg.com/564x/8e/62/05/8e6205b3a5bdbb1e4d3f57dfe01abe76.jpg"},
    {name : "Strawberries", image : "https://i.pinimg.com/564x/f0/b8/3f/f0b83f5fa3ce05553b3136ec786efb23.jpg"},
    {name : "Girl", image : "https://i.pinimg.com/564x/43/af/4d/43af4d322a702908739e3536150e7c71.jpg"},
    {name : "Cake", image : "https://i.pinimg.com/564x/25/28/e3/2528e312fda7a5fcb65142290cf89ebd.jpg"},
    {name : "Duck", image : "https://i.pinimg.com/564x/62/b7/ff/62b7ff80e1674b951715e22b107f84b1.jpg"},
    {name : "Nail", image : "https://i.pinimg.com/564x/0b/93/ea/0b93ea5db86a8273f3158705f5c56483.jpg"},
    {name : "Lemon", image : "https://i.pinimg.com/564x/ef/84/3c/ef843c511f1e459cf956566080a6e4bc.jpg"},
    {name : "RangeRover", image : "https://i.pinimg.com/564x/3e/4b/05/3e4b05a480095127c3667b6a5d94b913.jpg"}
]

function showCard() 
{
    var clutter = "";

    arr.forEach(function(obj){
        clutter += `<div class="card">
                        <img  src="${obj.image}" alt="">
                        <div class="caption"></div>
                    </div>`
    })

    document.querySelector('.container').innerHTML = clutter;
}

showCard();

function handleSearch() {

    //hover effect
    var search = document.querySelector("#search");
    var searchInput = document.querySelector("#search-input");
    
    search.addEventListener("mouseenter", function(){
        search.style.backgroundColor = "#e9e9e9";
        searchInput.style.backgroundColor = "#e9e9e9";
    
    })
    
    search.addEventListener("mouseleave", function(){
        search.style.backgroundColor = "#f1f1f1";
        searchInput.style.backgroundColor = "#f1f1f1";
    
    })

    //search-click effect
    var overlay = document.querySelector(".overlay");
    var searchData = document.querySelector("#search-data");
    var searchName = document.querySelector("#search-name");

    searchInput.addEventListener("focus", function(){   //focus - when input field is active
        overlay.style.display = "block";  
        searchData.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable window scrolling
    })

    searchInput.addEventListener("blur", function(){      //blur - opp. of focus (when input is not active)
        overlay.style.display = "none";
        searchData.style.display = "none";
        document.body.style.overflow = ""; // Enable scrolling
    })

    searchInput.addEventListener("input", function() {
        var clutter = "";
        var filteredArr = arr.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value));//filters out images on basis of search
        
        console.log(filteredArr);

        filteredArr.forEach(function(obj) {
            clutter += `<div class="name">
            <svg aria-hidden="true" aria-label="" class="Uvi gUZ U9O kVc" height="12" role="img" viewBox="0 0 24 24" width="12">
                <path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24"></path>
            </svg>

            <h3>"${obj.name}"</h3>
        </div>`
        })

        
        if(searchInput.value === "")
        {
            searchName.style.display = "none";
            overlay.style.display = "block";
        searchData.style.display = "block";
        
        }
        else {
            overlay.style.display = "block";
            searchData.style.display = "none";
            searchName.style.display = "block";
            searchName.innerHTML = clutter;
            
        }

        document.body.style.overflow = "hidden"; // Disable window scrolling
    })



}

handleSearch();



