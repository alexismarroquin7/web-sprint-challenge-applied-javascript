import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // console.log(article);

  const cardEl = document.createElement('div');
  const headlineEl = document.createElement(('div'));
  const authorEl = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authImg = document.createElement('img');
  const authName = document.createElement('span');

  cardEl.classList.add('card');
  headlineEl.classList.add('headline');
  authorEl.classList.add('author');
  imgContainer.classList.add('img-container');

  authImg.setAttribute('src', article.authorPhoto);

  headlineEl.textContent = article.headline;
  authName.textContent = article.authorName;

  cardEl.addEventListener('click', e => {
    e.stopPropagation();
    console.log(headlineEl.textContent);
  });

  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);
  authorEl.appendChild(imgContainer);
  imgContainer.appendChild(authImg);
  authorEl.appendChild(authName);


  return cardEl;
}


console.log(Card({headline: 'Shocking News!', authorPhoto: 'authorPhotoURL', authorName: 'Alexis Marroquin'}))


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
      console.log(response.data.articles);
    })
    .catch(err => {
      console.log(err, 'Oops, looks like something went wrong.')
    })
}

cardAppender('.cards-container');

export { Card, cardAppender }
