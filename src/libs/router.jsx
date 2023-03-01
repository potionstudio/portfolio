import { useState } from "react";

let location = "/";
const routing_map = [];

let rerender = null;

const Router = ({ children }) => {
  // make routing map
  children.forEach((element) => {
    routing_map[element.props.path] = element;
  });

  // make (forcely) rerouting function
  const [render, modify_render] = useState(0);
  rerender = () => {
    modify_render(() => render + 1);
  };

  const current_view = routing_map[location];
  return (
    <>
      {!!current_view ? current_view : routing_map["/err"]}
      <p style={{ display: "none" }}>{render}</p>
    </>
  );
};

const Link = ({ children, to, className }) => {
  if (to.substr(0, 5) === "https" || to.substr(0, 4) === "http") {
    return (
      <a class={className} href={to}>
        {children}
      </a>
    );
  }

  return (
    <a
      class={className}
      onClick={() => {
        if (location === to) return;

        location = to;
        console.log(`Router | location was changed to ${location}`);
        rerender();
      }}
    >
      {children}
    </a>
  );
};

export default Router;
export { Link };
