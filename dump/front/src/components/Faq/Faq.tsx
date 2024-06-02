import { Accordions } from "../ui/Accordions";
import "./Faq.scss";

export const Faq = () => {
  return (
    <div className="accodrion">
      <Accordions />
      <a
        className="accodrion-link"
        href="mailto:contact@elbesoft.agency?subject=Question%20about%20service"
      >
        Still have question? <br />
        We have fast-furious support!
      </a>
    </div>
  );
};
