const detailsFetching = (id) =>
{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;

    fetch(url)
    .then(response => response.json())
    .then(data => displayDetails(data))
}


const displayDetails = (details) =>
{

    const data = details.data;

    let detailsSection = document.getElementById("details");

    let article = document.createElement("article");

    const grid = gridMaker(data);

    article.innerHTML = `${grid}`;

    detailsSection.append(article);

    
    
}


const gridMaker = (phoneDetails) =>
{

    let phoneImg = phoneDetails.image;

    let phoneBrand = phoneDetails.brand;
    let phoneName = phoneDetails.name;

    let releaseDate = phoneDetails.releaseDate;

    const { storage , displaySize , chipSet , memory , sensors }= phoneDetails.mainFeatures;

    console.log(sensors);
    const grid =
    `
    <div class="container">
    <div class="card w-50 h-100 mb-5 mx-auto">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${phoneImg}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">

          <h2 class="card-title">${phoneBrand} ${phoneName}</h2>
          
          <p class="card-text ">ReleaseDate: ${releaseDate}</p>
          <p class="card-text ">Display: ${displaySize}</p>
          <p class="card-text ">Chipset : ${chipSet}</p>
          <p class="card-text ">Storage : ${storage}</p>
          <p class="card-text ">Memory : ${memory}</p>
          <p class="card-text ">Sensors : ${sensors}</p>
        </div>
      </div>
    </div>
  </div>
    </div>


    `

    return grid;
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

    

    for(const data of dataArray) 
    {
        const gridContainer  = document.createElement("div");
        gridContainer.innerHTML = `
            ${cardMaker(data)}
        `
        cardDiv.append(gridContainer);

    };
}

