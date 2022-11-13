fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    // Start here :)
    const { products } = data;
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('mx-0');

    products.forEach((position) => {
      // inner-wrapper

      const innerWrapper = document.createElement('div');
      wrapper.append(innerWrapper);
      innerWrapper.classList.add('col-12', 'col-md-2', 'card', 'mx-2', 'my-2', 'my-width-inner-wrapper', 'px-0');

      // image-container

      const imageContainer = document.createElement('div');
      innerWrapper.append(imageContainer);
      imageContainer.classList.add('my-height-image', 'overflow-hidden', 'card-img-top');

      // title-description-container

      const titleDescriptionContainer = document.createElement('div');
      innerWrapper.append(titleDescriptionContainer);
      titleDescriptionContainer.classList.add('card-body');

      // price-rating-container

      const priceRatingContainer = document.createElement('div');
      innerWrapper.append(priceRatingContainer);
      priceRatingContainer.classList.add('d-flex', 'justify-content-around', 'align-items-center', 'card-footer', 'mx-3', 'my-3', 'p-0', 'my-height-footer');

      // image

      const image = document.createElement('img');
      image.src = `${position.thumbnail}`;
      imageContainer.append(image);
      image.classList.add('card-img-top');

      // title

      const titleItem = document.createElement('h5');
      titleItem.textContent = `${position.title}`;
      titleDescriptionContainer.append(titleItem);
      titleItem.classList.add('card-title');

      // desription

      const descriptionItem = document.createElement('p');
      descriptionItem.textContent = `${position.description}`;
      titleDescriptionContainer.append(descriptionItem);
      descriptionItem.classList.add('card-text');

      // price

      const priceItem = document.createElement('p');
      priceItem.textContent = `Price: ${position.price}$`;
      priceRatingContainer.append(priceItem);
      priceItem.classList.add('my-3');

      // rating

      const ratingItem = document.createElement('p');
      ratingItem.textContent = `Rating: ${position.rating}`;
      priceRatingContainer.append(ratingItem);
      ratingItem.classList.add('my-3');
    });
  });
