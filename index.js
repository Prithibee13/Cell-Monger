
// Fetch the API
const apiFetching =  () =>
{
    fetch("https://openapi.programming-hero.com/api/phones")
    .then(response => response.json())
    .then(data => console.log(data));
}






