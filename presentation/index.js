// Import React
import React from "react";

import { withProps } from "recompose";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  BlockQuote,
  Quote,
  Cite,
  Heading,
  Layout,
  Fill,
  ListItem,
  List,
  Image,
  Slide,
  Notes,
  Markdown,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Try to match the Capra color palette (best effort)
const theme = createTheme(
  {
    primary: "white",
    secondary: "#60C7E8",
    tertiary: "#0059AC",
    quartenary: "#010121"
  }
  /* {
   *   primary: "Helvetica Neue",
   *   secondary: "Helvetica"
   * }*/
);

const images = {
  spiderman: require("../assets/images/spiderman-meme.jpg"),
  money: require("../assets/images/money.jpg"),
  savannah: require("../assets/images/savannah.jpg"),
  kenWheeler: require("../assets/images/ken_wheeler.jpg"),
  flowLogo: require("../assets/images/flow_logo.png")
};

preloader(images);

const withStyle = style =>
  withProps({
    style
  });

/* const UnderlinedHeading = withStyle({
 *   "::after": {
 *     content: "-"
 *   }
 * })(Heading);*/

const SubTitle = withStyle({
  marginTop: "3rem"
})(Text);

const Presentation = () => (
  <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
    <Slide>
      <Heading size={1}>Typer i frontendverden</Heading>
      <SubTitle>- En nødvendighet eller unødvendig?</SubTitle>
    </Slide>
    <Slide bgColor="quartenary" notes="Gir det verdi?">
      <Appear>
        <Heading size={2}>Gir det verdi?</Heading>
      </Appear>
    </Slide>
    <Slide textColor="black" notes="Inndeling, fordeler, ulemper, eksempler">
      <Heading size={2}>
        Agenda{" "}
        <Appear>
          <span>(metode)</span>
        </Appear>
      </Heading>
      <List>
        <Appear>
          <ListItem>Inndeling av programmeringsspråk & historie</ListItem>
        </Appear>
        <Appear>
          <ListItem>Fordeler ved bruk av typesystemer</ListItem>
        </Appear>
        <Appear>
          <ListItem>Ulemper -> Overhead and friends, pitfalls</ListItem>
        </Appear>
        <Appear>
          <ListItem>Eksempler</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide>
      <Layout>
        <Fill>
          <Text>Statisk typede språk</Text>
          <List>
            <ListItem>Java</ListItem>
            <ListItem>OCaml</ListItem>
            <ListItem>Haskell</ListItem>
          </List>
        </Fill>
        <Fill>
          <Text>Dynamisk typede språk</Text>
          <List>
            <ListItem>Python</ListItem>
            <ListItem>Ruby</ListItem>
            <ListItem>JavaScript</ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
    <Slide
      bgColor="secondary"
      transition={["fade"]}
      notes="Forskjellen i arbeidsmåte, led opp til neste slide (tooling)"
    >
      <Image src={images.spiderman} />
    </Slide>
    <Slide
      notes="Autocomplete, typesjekking, invarians, go-to"
      textColor="black"
    >
      <Heading size={2}>Tooling, tooling, tooling</Heading>
      <List>
        <Appear>
          <ListItem>Autocomplete</ListItem>
        </Appear>
        <Appear>
          <ListItem>Typesjekking</ListItem>
        </Appear>
        <Appear>
          <ListItem>Invarians</ListItem>
        </Appear>
        <Appear>
          <ListItem>"Go-to"</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide bgImage={images.savannah} bgDarken={0.7}>
      <Appear>
        <Heading textColor="goldenrod">Type systems safari</Heading>
      </Appear>
    </Slide>
    <Slide bgColor="#2D343A">
      <Image height="10rem" src={images.flowLogo} />
    </Slide>

    <CodeSlide
      bgColor="quartenary"
      id="flow-example"
      code={require("raw-loader!../assets/examples/flow-example1.js.example")}
      lang="js"
      ranges={[
        {
          loc: [0, 1],
          title: "Opt-in per fil"
        },
        {
          loc: [2, 3],
          title: "Type-annotering"
        },
        {
          loc: [6, 1],
          title: "No, sir!"
        }
      ]}
    />

    <Slide>
      <Image height="30rem" src={images.money} />
    </Slide>
    <Slide>
      <Image
        style={{
          borderRadius: "50%"
        }}
        height="30rem"
        src={images.kenWheeler}
      />
    </Slide>
    <Slide
      bgColor="black"
      notes="Kontekst: andre skal se koden din! Vedlikeholdbarhet"
    >
      <BlockQuote>
        <Quote textSize="3rem">
          You might say, "hey i dont need types, i have this under control". Its
          not about you, its about everyone else without context adding code.
        </Quote>
        <Cite textColor="goldenrod">Ken Wheeler</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Text>Fallgruver</Text>
      <List>
        <ListItem>Anys</ListItem>
        {/* <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem> */}
      </List>
    </Slide>
    {/* <Slide bgColor="quartenary" transition={["slide"]}>
          <Heading size={2} textColor="primary">
          Historietid!
          </Heading>
          </Slide> */}
  </Deck>
);

export default Presentation;
