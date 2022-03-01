

const cardMaker = (brand, img, titles) =>
{
    let card = 
    `
    <div class="col">
        <div class="card h-100">
            <img src='${img}' class="card-img-top w-50 h-50" alt="...">
                <div class="card-body">
                <h3 class="card-title">${titles}</h3>
                <h4 class="card-text">${brand}</h4>
                </div>
            </div>
        </div>
    
    `
    ;

    return card;
}


// Fetch the API
const apiFetching =  () =>
{
    let searchText = document.getElementById("src").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data));
}


const displayData = (mobileDetails) =>
{
    const dataArray = mobileDetails.data;

    const cardDiv = document.getElementById("cardDiv");

    let phoneBrand;
    let phoneName; 
    let phoneImg;

    for(data of dataArray) 
    {
        //console.log(data);
        phoneBrand = data.brand;
        phoneImg = data.image;
        phoneName = data.phone_name;

        const gridContainer  = document.createElement("div");
        gridContainer.innerHTML = `
            ${cardMaker(phoneBrand,phoneImg , phoneName)}
        `
        cardDiv.append(gridContainer);
        console.log(cardDiv)

    };
}

