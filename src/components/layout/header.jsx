import { Link } from "@/libs/router";

import page_data from "@/models/page-data.json";

export default () => (
  <nav class="navbar navbar-expand-lg bg-body-tertiary non-selectable">
    <div class="container-fluid">
      <Link className="navbar-brand fw-bold" to="/">
        {page_data.title}
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {page_data.links.map((item, index) => {
            return (
              <li class="nav-item" key={index}>
                <Link className="nav-link" to={item.path}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </nav>
);
