import Home from "../Components/Home";
import Ahome from "../AboutUs/Ahome";
import AboutUs from "../AboutUs/AboutUs";
import FadeInSection from "../Components/FadeInSection"; // ✅ import fade wrapper

const Abouts = () => {
  return (
    <>
      <FadeInSection direction="up" delay={0}>
        <Ahome />
      </FadeInSection>

      <FadeInSection direction="up" delay={150}>
        <AboutUs />
      </FadeInSection>
    </>
  );
};

export default Abouts;
