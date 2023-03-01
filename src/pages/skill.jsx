import { useState, useEffect } from "preact/hooks";

import Timeline from "@/components/partial-view/timeline";

import { load_skills, loading_data } from "../models/firestore";

export default () => {
  const [skills, modefy_skills] = useState(new Array());
  useEffect(() => {
    load_skills((data) => {
      modefy_skills(data);
    });
  }, []);

  return (
    <>
      <h1 class="text-center fw-bold mt-2">My skills 🔨</h1>
      <hr />
      <div class="R85 mx-auto">
        {skills.map((item, index) => {
          return (
            <div key={index}>
              <h3 class="timeline-title__sort-by-list-icon">{item.title}</h3>
              <Timeline elements={item.content} />
            </div>
          );
        })}
      </div>
    </>
  );
};
