import GlobalStyles, { StldBody } from "./styles/Global";
import { MainContainer, PrimaryContainer, Heading1 } from "./styles/About";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <StldBody>
        <GlobalStyles />
        <MainContainer>
          <PrimaryContainer>
            <Heading1>About</Heading1>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
      <Footer />
    </>
  );
}

export default About;
