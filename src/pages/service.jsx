import { useState, useEffect } from "preact/hooks";

import ResponsiveGrid from "@/components/partial-view/responsive-grid";
import Cards from "@/components/partial-view/card";
import Thumbnail from "@/components/partial-view/thumbnail";

import { load_services, loading_data } from "../models/firestore";

export default () => {
  const [services, modify_services] = useState(loading_data);
  useEffect(() => {
    load_services((data) => {
      modify_services(data);
    });
  }, []);

  return (
    <div class="R85 mx-auto">
      <hr class="my-5" />
      <ResponsiveGrid>
        {services.map((item, index) => {
          return (
            <Cards.Thumbnailless
              key={index}
              title={item.name}
              description={item.description}
              btn={{ href: item.link, text: "더보기.. 💡" }}
            >
              <Thumbnail lang={item.lang} />
            </Cards.Thumbnailless>
          );
        })}
      </ResponsiveGrid>
    </div>
  );
};
