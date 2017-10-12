// Import React
import React from "react";

import { withProps } from "recompose";

// Import Spectacle Core tags
import {
  Spectacle,
  Appear,
  Deck,
  BlockQuote,
  Quote,
  Cite,
  CodePane,
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
import { darken } from "polished";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Try to match the Capra color palette (best effort)
const theme = createTheme(
  {
    primary: "#F6F4F4",
    secondary: darken(0.1, "#60C7E8"),
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
  flowLogo: require("../assets/images/flow_logo.png"),
  typescriptLogo: require("../assets/images/typescript_logo.svg"),
  jungle: require("../assets/images/jungle.jpg"),
  reasonLogo: require("../assets/images/reason_logo.png")
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
    <Slide
      notes={`
      <ul>
        <li>Noe litt meta Onsdag: Fokus på hva man ønsker å formidle.</li>
        <li>
          Foredraget er IKKE et innsalg, heller åpne opp for refleksjon.
        </li>
        <li>Tutorials kan man kikke på selv osv osv,</li>
        <li>Et verktøy/arbeidsmåte man bør vurdere å ta i bruk hos kunde.</li>
        <li>Ønsker å se saken fra to sider, evt 1.5 side.</li>
      </ul>
      `}
    >
      <Heading size={1}>Typer i frontendverden</Heading>
      <SubTitle>- En nødvendighet eller unødvendig?</SubTitle>
    </Slide>
    <Slide bgColor="quartenary" notes="Gir det verdi?">
      <Appear>
        <Heading size={2}>Gir det verdi?</Heading>
      </Appear>
    </Slide>

    <Slide notes="Superkort intro. Mange kjenner meg alt, og andre kan bli bedre kjent med meg etterrpå!">
      <Text>Jeg heter Jonas og skriver kode.</Text>
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
        <Appear>
          <ListItem>Diskusjon</ListItem>
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
    <Slide bgColor="quartenary" transition={["fade"]}>
      <Heading size={2} textColor="white">
        Dokumentasjon
      </Heading>
    </Slide>
    <Slide bgImage={images.savannah} bgDarken={0.7}>
      <Appear>
        <Heading textColor="goldenrod">Type systems safari</Heading>
      </Appear>
    </Slide>
    <Slide bgColor="#2D343A">
      <Image height="10rem" src={images.flowLogo} />
    </Slide>
    <Slide>
      <List>
        <ListItem>Utviklet av Facebook</ListItem>
        <ListItem>Inkrementell innføring</ListItem>
        <ListItem>Bredt økosystem</ListItem>
      </List>
    </Slide>
    <CodeSlide
      bgColor="quartenary"
      code={require("raw-loader!../assets/examples/flow-example1.js.example")}
      lang="js"
      ranges={[
        {
          loc: [0, 1],
          title: "Opt-in per fil"
        },
        {
          loc: [2, 4],
          title: "Type-annotering"
        },
        {
          loc: [6, 7],
          title: "No, sir!"
        }
      ]}
    />
    <Slide>
      <Text>Flow - key takeaways</Text>
      <List>
        <ListItem>"Valgfritt"</ListItem>
        <ListItem>Inkrementell "adoptering"</ListItem>
        <ListItem>Inferens</ListItem>
      </List>
    </Slide>
    <Slide bgColor="#294E80">
      <Image height="10rem" src={images.typescriptLogo} />
    </Slide>
    <Slide notes={'"Mye" eldre enn Flow...'}>
      <List>
        <ListItem>Utviklet av Mirosoft/Google</ListItem>
        <ListItem>"Tett" knyttet til Angular-verden</ListItem>
        <Appear>
          <ListItem>Større investering for et prosjekt enn Flow</ListItem>
        </Appear>
        <Appear>
          <ListItem>Super editor-integrasjon + community</ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide
      transition={["fade"]}
      bgImage={images.jungle}
      bgDarken={0.7}
      notes="Vi skal over til noe som er veldig annerledes. Men det trenger ikke være såååå skummelt"
    >
      <Appear>
        <Heading size={2} textColor={darken(0.2, "white")}>
          Meanwhile, deep in the jungle
        </Heading>
      </Appear>
    </Slide>
    <Slide bgColor="#F6F4F4">
      <Image src={images.reasonLogo} />
    </Slide>

    <Slide notes="Fun fact: Flow er bygd OPPÅ OCaml">
      <List>
        <ListItem>Basert på OCaml</ListItem>
        <ListItem>Kompilerer til JavaScript via BuckleScript</ListItem>
        <ListItem>Utviklet av Facebook</ListItem>
      </List>
    </Slide>
    <Slide>
      <CodePane
        textSize="1.8rem"
        source={require("raw-loader!../assets/examples/reason_example.re.example")}
        lang="reason"
      />
    </Slide>

    <Slide>
      <List>
        <ListItem>Statisk typet språk</ListItem>
        <ListItem>Veldig kraftig type-inferens</ListItem>
        <ListItem>
          Constructs man ofte savner i JavaScript: Union types, exhaustive
          switch++
        </ListItem>
      </List>
    </Slide>

    <CodeSlide
      bgColor="quartenary"
      align="center flex-start"
      code={require("raw-loader!../assets/examples/reason_example2.re.example")}
      lang="reason"
      ranges={[
        {
          loc: [0, 3],
          note: "Union types!"
        },
        {
          loc: [5, 7]
        },
        {
          loc: [8, 13]
        }
      ]}
    />

    <Slide>
      <Text>Honorable mentions</Text>
      <Appear>
        <List>
          <ListItem>Elm</ListItem>
          <ListItem>Kotlin</ListItem>
          <ListItem>PureScript</ListItem>
        </List>
      </Appear>
    </Slide>

    <Slide>
      <Text textSize="4rem" margin="2rem">
        Now what?
      </Text>
      <Appear>
        <Text textColor="firebrick" textSize="3rem">
          Hvorfor skal vi bruke slike støtteverktøy?
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Text textColor="firebrick">Fordi vi kan?</Text>
      <Text textColor="firebrick">Det ser kult ut?</Text>
      <Appear>
        <Text textColor="forestgreen" margin="2rem">
          Det gjør prosjekter enklere å vedlikeholde
        </Text>
      </Appear>
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

    <Slide notes="SPA, mange kodelinjer versus enkle scripts for CI. Biblioteker. <br />Gjenbruk av kode i store organisasjoner">
      <Text>Skal vi bruke slike typesystemer i prosjektene våre?</Text>

      <Appear>
        <Text margin="2rem" textColor="forestgreen">
          Det kommer an på!
        </Text>
      </Appear>
    </Slide>

    {/* <Slide>
        <Text>Pitfalls</Text>
        <Appear>
        <List>
        <ListItem>Bruk av Any-annoteringer</ListItem>
        <ListItem>"Bruk som du vil"</ListItem>
        <ListItem>Optionals</ListItem>
        </List>
        </Appear>
        </Slide> */}

    <Slide transition={["spin"]}>
      <Heading size={2}>Quiz!</Heading>
    </Slide>

    <Slide>
      <List>
        <Appear>
          <ListItem>Et byggskript</ListItem>
        </Appear>
        <Appear>
          <ListItem>Et bibliotek som konsumeres av folket</ListItem>
        </Appear>
        <Appear>
          <ListItem>En Single-Page app, stor kodebase</ListItem>
        </Appear>
      </List>
    </Slide>

    <Slide>
      <Heading size={2}>Spørsmål/Diskusjon</Heading>
    </Slide>

    <Slide>
      <List>
        <ListItem textSize="2rem">
          <a href="https://vimeo.com/album/4766821/video/233821619">
            The road to a statically typed future
          </a>{" "}
          - Patrick Stapfer
        </ListItem>
        <ListItem textSize="2rem" margin="2rem 0">
          <a href="https://www.youtube.com/watch?v=V1po0BT7kac">
            Type Systems Will Make You a Better JavaScript Developer
          </a>{" "}
          - Jared Forsyth
        </ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size={1}>Takk for meg!</Heading>
    </Slide>
  </Deck>
);

export default Presentation;
