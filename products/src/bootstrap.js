import faker from 'faker';


const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  el.innerHTML = products;
}

// Situation 1: we are running this file in dev/isolation, so we can safely render

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}

// Situation 2: we are running in MFE Container, so we can't assume our element exists

export { mount };
