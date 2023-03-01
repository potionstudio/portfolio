const Card = ({ img, title, description, btn }) => (
  <div class="card d-linline-display">
    <img class="card-img-top" src={img} />
    <div class="card-body">
      <h5 class="card-title fw-bold">{title}</h5>
      <p class="card-text">{description}</p>
      <a href={btn.href} class="btn btn-primary">
        {btn.text}
      </a>
    </div>
  </div>
);

/*
 img
 title
 description
 btn
   - href
   - text
*/

const Thumbnailless = ({ children, title, description, btn }) => (
  <div class="card d-linline-display">
    <div class="card-img-top">{children}</div>
    <div class="card-body">
      <h5 class="card-title fw-bold">{title}</h5>
      <p class="card-text">{description}</p>
      <a href={btn.href} class="btn btn-primary">
        {btn.text}
      </a>
    </div>
  </div>
);
/*
 children -> image
 title
 description
 btn
   - href
   - text
*/

export default { Card, Thumbnailless };
