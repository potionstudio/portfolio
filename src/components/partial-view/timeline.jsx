import "@/styles/components/timeline.css";

export default ({ elements }) => (
  <section class="py-2">
    <ul class="timeline">
      {elements.map((item, index) => {
        return (
          <li class="timeline-item mb-5" key={index}>
            <h5 class="fw-bold">{item.name}</h5>
            <p class="text-muted mb-2 fw-bold">{item.subname}</p>
            <p class="text-muted text-break">{item.description}</p>
          </li>
        );
      })}
    </ul>
  </section>
);
