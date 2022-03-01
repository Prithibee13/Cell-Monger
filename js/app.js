//fetch the mobile Details api

const detailsFetching = (id) =>
{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;

    location.href = "#details";

    //fetch api
    fetch(url)
    .then(response => response.json())
    .then(data => displayDetails(data))
}

//displaying the details
const displayDetails = (details) =>
{

    const data = details.data;

    let detailsSection = document.getElementById("details");

    let article = document.createElement("article");

    detailsSection.innerHTML = "";

    //call the horizental card templete
    const grid = gridMaker(data);

    // insert in child element
    article.innerHTML = `${grid}`;

    //insert in main parents
    detailsSection.append(article);    
}

//horizental card templeate genarator function
const gridMaker = (phoneDetails) =>
{

    let phoneImg = phoneDetails.image;

    let phoneBrand = phoneDetails.brand;
    let phoneName = phoneDetails.name;

    let releaseDate = phoneDetails.releaseDate;

    const { storage , displaySize , chipSet , memory , sensors }= phoneDetails.mainFeatures;

    if(releaseDate === "")
    {
        releaseDate = "Not available";
    }

    console.log(sensors);
    const grid =
    `
    <div class="container">
    <div class="card w-75 h-100 mb-5 mx-auto ">
    <div class="row g-0 d-flex align-items-center p-4">
      <div class="col-md-4">
        <img src="${phoneImg}" class="w-75 rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">

          <h2 class="card-title">${phoneBrand} ${phoneName}</h2>
          
          <p class="card-text ">Release Date: ${releaseDate}</p>
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





//grid card templete genarator function
const cardMaker = (mobileData) =>
{
    //object Destruring
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
        <div class="card h-100 shadow-lg p-5">
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

//spinner toggler

const toggleLoder = (style) =>
{
    document.getElementById("spin").style.display = style;
}


//input from our UI

const inputTaker = () =>
{
    let brandName = document.getElementById("src").value;


    location.href = "#phones";
    //show the spinner
    toggleLoder("block");

    //call the implementations
    apiFetching(brandName);

    
}

// Fetch the API
const apiFetching = (searchText) =>
{
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    //fetch phone api
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data));
}

//display the mobiles of respective brands

const displayData = (mobileDetails) =>
{
    console.log(mobileDetails);

    let brandName = document.getElementById("src").value;

    let cardDiv = document.getElementById("cardDiv");

    let resultMessage;
    
    if(mobileDetails.status===false)
    {
        resultMessage = `No phones found of ${brandName}`; 

        cardDiv.innerHTML = "";
    }

    else
    {
        resultMessage = `Search Result for ${brandName}`
        const dataArray = mobileDetails.data;

        let i = 0;
         
        cardDiv.innerHTML = "";
        
        
        let detailsSection = document.getElementById("details");


        detailsSection.innerHTML = "";

        for(const data of dataArray) 
        {
            i++;
            if(i>20)
            {
                break;
            }
            else
            {
                
                card = cardMaker(data);
                const gridContainer  = document.createElement("div");

                gridContainer.innerHTML =
                `
                    ${card}
                `;

                cardDiv.append(gridContainer);

            }  
        };
    }

    toggleLoder("none")

    document.getElementById("result").innerText = resultMessage;
    document.getElementById("src").value = null;   
}

