// Network Call Code
export default async function doNetworkCall() {
  const URL =
    "https://gist.githubusercontent.com/Dhruvgarg91/286ca53ba020c63ed5872f9c912f9aa0/raw/4dafcdb150ecbdb46e87fa4699a609009952e37e/gistfile1.txt";
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
