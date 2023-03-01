import { Link } from "@/libs/router";

const Hero = ({ title, description, btn }) => (
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">{title}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">{description}</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link className="btn btn-primary btn-lg px-4 gap-3" to={btn[0].href}>
          {btn[0].text}
        </Link>
        <Link
          className="btn btn-outline-secondary btn-lg px-4"
          to={btn[1].href}
        >
          {btn[1].text}
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
