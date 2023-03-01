import { Link } from "@/libs/router";

import License from "@/components/view-component/license";
import page_data from "@/models/page-data.json";

export default () => (
  <div class="container non-selectable">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        {page_data.links.map((item, index) => {
          return (
            <li class="nav-item" key={index}>
              <Link to={item.path} className="nav-link px-2 text-muted">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <License />
    </footer>
  </div>
);
