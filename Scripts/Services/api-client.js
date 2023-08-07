// Network Call Code
export default async function doNetworkCall() {
  const apiKey = "eb79e9ea25b04316adbb685c6fc98dc2"; // Replace with your NewsAPI API key
  const URL = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
  try {
    const response = await fetch(URL);
    const object = await response.json();
    console.log("Object is ", object);
    return object;
  } catch (err) {
    throw err;
  }
}

// const promise = fetch(URL);
// promise.then(response=>{
//     const promise2 = response.json();
//     promise2.then(json=>console.log(json))
//     .catch(e=>console.log('JSON error ', e))
// }).catch(e=>console.log(e));

// const promise = fetch(URL);
// console.log('Promise is ', promise);
// promise.then(function(response){
//     console.log(response);
//     return response;
// }).catch(function(err){
//     console.log('Error ', err);
// });
// console.log('Good Bye ');
