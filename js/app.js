

const cardMaker = (img, titles) =>
{
    let card = 
    `
    <div class="col">
        <div class="card">
            <img src=${img} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${titles}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    
    `;

    return card;
}


// Fetch the API
const apiFetching =  () =>
{
    let searchText = document.getElementById("src").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

