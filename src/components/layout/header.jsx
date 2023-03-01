import { useRef } from "preact/hooks";
import { Link } from "@/libs/router";

import page_data from "@/models/page-data.json";
import { useEffect, useState } from "react";

const open_list = (btn, expension) => {
  btn.current.setAttribute("class", "navbar-toggler collapsed");
  btn.current.setAttribute("aria-expanded", "true");

  expension.current.setAttribute("class", "navbar-collapse collapse show");
};

const close_list = (btn, expension) => {
  btn.current.setAttribute("class", "navbar-toggler");
  btn.current.setAttribute("aria-expanded", "false");

  expension.current.setAttribute("class", "navbar-collapse collapse");
};

export default () => {
  const btn = useRef(0);
  const expension = useRef(0);

  let opened = false;

  return (
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
          ref={btn}
          onClick={() => {
            if (opened === false) {
              open_list(btn, expension);
            } else {
              close_list(btn, expension);
            }

            opened = !opened;
          }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" ref={expension}>
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
};
