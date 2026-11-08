const products = [
                    {name: "Blue and Grey Striped Knit Top", href: "stripedtop.html"} , 
                    {name: "Blue and White Star Top", href: "startop.html"} ,
                    {name: "Brown Filet Crochet Top", href: "filettop.html"} ,
                    {name: "Dark Mustard Fur Cardigan", href: "furcardigan.html"} ,
                    {name: "Distressed Silver Mohair Top", href: "distressedtop.html"} ,
                    {name: "Dusk to Dawn Knit Sweater", href: "dusktodawn.html"} ,
                    {name: "Fair Isle Grannycore Sweater", href: "grannycoresweater.html"} , 
                    {name: "Granny Square Top", href: "grannysquaretop.html"} , 
                    {name: "Green Knit Patchwork Cardigan", href: "patchworkcardigan.html"} ,
                    {name: "Grey Cable Knit Oversized Cardigan", href: "cableknitcardigan.html"} , 
                    {name: "Grey White Bow Cardigan", href: "bowcardigan.html"} , 
                    {name: "Knit Pastel Patchwork Sweater", href: "patchworksweater.html"} ,
                    {name: "Knitted Lamb Olive Sweater", href: "lambsweater.html"} , 
                    {name: "Lighthouse on the Beach Knit Sweater", href: "beachsweater.html"} , 
                    {name: "Multi Colour Loupy Cardigan", href: "loupycardigan.html"}
                ]

const searchBar = document.querySelector(".search-bar")
const searchSection = document.querySelector(".searchbar")
const panel = document.querySelector(".panel")

 function showSuggestions(arr) {
    // Clear out the previous list items
    panel.innerHTML = ``
    let suggestions = ``

    for (let i = 0; i < arr.length; i++){
      suggestions += `
      <li>
        <a href="${arr[i].href}"> 
        <p>${arr[i].name}</p>
        </a>
      </li>
      `
    }
    
    panel.innerHTML += suggestions
  }

  searchBar?.addEventListener('input', (Event) => {
    let searchTerm = Event.target.value.toLowerCase(); 
    // Filter the array based on multiple fields (name OR role)
    if(searchTerm){
      panel.classList.remove("hidden")
    let filteredResults = products.filter(products => {
      return products.name.toLowerCase().includes(searchTerm)  ||
              products.href.toLowerCase().includes(searchTerm)
    });
    // Redraw the list with only the matching items

    showSuggestions(filteredResults);
    } else{
      panel.innerHTML = ``
      panel.classList.add("hidden")
    }
  });


