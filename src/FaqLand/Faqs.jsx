import { FaQ } from "react-icons/fa6";
import FaqPage from "../Faq/FaqPage";
import Spage from "../Faq/Spage";
import FadeInSection from "../Components/FadeInSection"; // ✅ fade animation wrapper

const Faqs = () => {
  return (
    <>
      <FadeInSection direction="up" delay={0}>
        <Spage />
      </FadeInSection>

      <FadeInSection direction="up" delay={150}>
        <FaqPage />
      </FadeInSection>
    </>
  );
};

export default Faqs;
