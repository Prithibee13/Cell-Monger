const detailsFetching = (id) =>
{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
}


const displayDetails = (data) =>
{
    
}

const cardMaker = (mobileData) =>
{
    const { brand, phone_name , image , slug } = mobileData;

    let phoneBrand;
    let phoneName; 
    let phoneImg;
    let phoneId;

    phoneBrand = brand;
    phoneImg = image;
    phoneName = phone_name;
    phoneId = slug;

    let card = 
    `
    <div class="col">
        <div class="card h-100">
            <img src='${phoneImg}' class="card-img-top w-50 h-50" alt="...">
                <div class="card-body">
                <h3 class="card-title">${phoneName}</h3>
                <h4 class="card-text">${phoneBrand}</h4>
                <button class="btn-p" onclick="detailsFetching('${phoneId}')">Details</button>
                </div>
            </div>
        </div>
    
    `
    ;

    return card;
}

//'


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

    

    for(data of dataArray) 
    {
        const gridContainer  = document.createElement("div");
        gridContainer.innerHTML = `
            ${cardMaker(data)}
        `
        cardDiv.append(gridContainer);

    };
}

