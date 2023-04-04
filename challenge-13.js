/*
Functions declared with Async keyword allows us to write asynchronous code in a synchronous manner.
together with fetch api we can make asynchronous API requests. 

Challenge: you are building a new component for your space, a brand new social media application that allows you to find friends. This component space user's top five friends. Given some data returned from random user API, you should dynamically generate image thumbnails for the top five friends. Use Fetch API to call the random user api 
url: https://randomuser.me/api/?result=5 to get data for five users. Your solution should use async await.
*/

async function fetchThumbnails(toplists) {

  try {


    for (i = 1; i <= toplists; i++) {


      let response = await fetch('https://randomuser.me/api/?results=${i}');
      let friendDetails = await response.json()
      let friendThumbnailUrl = friendDetails.results[0].picture.thumbnail

      //let friendThumbnailImg = await fetch(friendThumbnailUrl, { mode: 'no-cors' });
      //let img = document.createElement('img');

      // let friendThumbnail = 
      //let img1 = fetchThumbnails(1)
      const ul = document.getElementById('thumbnaillist');
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = friendThumbnailUrl;
      li.appendChild(img);
      ul.appendChild(li);

      console.log(friendDetails);
      console.log(friendThumbnailUrl);
    }

  }
  catch (error) {
    console.log("error")
  }
}

fetchThumbnails(5)
