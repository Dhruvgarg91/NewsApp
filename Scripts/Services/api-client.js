// Network Call Code
export default async function doNetworkCall() {
  const URL =
    "https://gist.githubusercontent.com/Dhruvgarg91/286ca53ba020c63ed5872f9c912f9aa0/raw/32a5e963851abb0217ac93fba6e048bf92a9d52b/gistfile1.txt";
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
