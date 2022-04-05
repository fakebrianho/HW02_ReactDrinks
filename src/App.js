import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Shandy from "./assets/shandy.jpg";
import ChristmasJones from "./assets/ChristmasJones.jpg";
import WatermelonSangria from "./assets/WatermelonSangria.jpg";
import SummerCobbler from "./assets/SummerCobbler.jpg";
import MintStrawberry from "./assets/MintStrawberry.jpg";
import BloodyMary from "./assets/BloodyMary.jpg";
import Paloma from "./assets/Paloma.jpg";
import Aperol from "./assets/aperol.jpg";
import Mimosa from "./assets/mimosa.jpg";
import TokyoTea from "./assets/TokyoTea.jpg";

import Header from "./Header";
import Description from "./Description";
const Loading = (props) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress
        id="images-loaded"
        max="100"
        value={props.calculatedWidth}
      ></progress>
    </div>
  </aside>
);

const images = [
  Shandy,
  ChristmasJones,
  WatermelonSangria,
  SummerCobbler,
  Paloma,
  MintStrawberry,
  BloodyMary,
  Mimosa,
  Aperol,
  TokyoTea
];
const descriptions = [
  {
    name: "Shandy",
    Recipe:
      "- 1 (12 ounce) bottle lager-style beer \n - ½ cup prepared lemonade"
  },
  {
    name: "Christmas Jones",
    Recipe:
      "- 1 1/2 ounces vodka \n - 5 ounces pineapple juice \n - 4 fresh strawberries \n - 2 teaspoons superfine sugar \n - 3 to 4 ounces lemon-lime soda, to taste \n - Mint sprigs, for garnish"
  },
  {
    name: "Watermelon Sangria",
    Recipe:
      "- 12 cups cubed watermelon, divided \n - 1 (750 milliliter) bottle dry white wine \n - 1 cup vodka \n - ½ cup triple sec \n - ½ cup simple syrup \n - 1 medium lime, quartered \n - 1 orange, cut into wedges \n - 1 cup fresh blueberries"
  },
  {
    name: "Summer Cobbler",
    Recipe:
      "- 3 tablespoons (1 1/2 oz.) white whiskey \n - 1 1/2 tablespoons (3/4 oz.) Grand Marnier or other orange-flavored liqueur \n - 1 tablespoon fresh lime juice \n - 1 1/2 teaspoons Blackberry Farm Blackberry Preserves \n - 3 fresh blackberries \n - fresh blackberries and lime peel twist for garnish"
  },
  {
    name: "Paloma",
    Recipe:
      "- 2 ounces tequila \n - 2 ounces fresh grapefruit juice, plus wedges for garnish \n - 2 ounces sparkling water \n - ½ ounce lime juice \n - ¼ ounce agave nectar or simple syrup, or to taste \n - Coarse sea salt, for the rim of the glasses \n - Ice"
  },
  {
    name: "Mojito",
    Recipe:
      "- white sugar, for rimming \n - 2 large limes, quartered \n - ½ bunch mint leaves \n - 7 strawberries, quartered \n - 1 cup white sugar \n - 1 cup white rum \n - 2 cups club soda \n - 8 cups ice cubes"
  },
  {
    name: "Bloody Mary",
    Recipe:
      "- 2 1/2 oz. vodka \n - 3/4 c. tomato juice \n - 2 tbsp. lemon juice \n - 2 tsp. Worcestershire sauce \n - 2 dashes hot sauce (optional) \n - 1/4 tsp. prepared horseradish \n - 1 pinch celery salt \n - 1 pinch black pepper"
  },
  {
    name: "Mimosa",
    Recipe:
      "- 1 (750 ml) bottle chilled dry sparkling wine \n - 3 cups (750 ml) chilled orange juice (freshly squeezed is best) \n - 1/2 cup (120 ml) Grand Marnier, optional"
  },
  {
    name: "Aperol Spritz",
    Recipe:
      "- Ice \n - 3 ounces (1 part) Aperol \n - 3 ounces (1 part) dry Prosecco \n - 1 ounce (a splash) club soda or unflavored sparkling water \n - Orange slice, for garnish"
  },
  {
    name: "Tokyo Tea",
    Recipe:
      "- 1/2 ounce gin \n - 1/2 ounce melon liqueur \n - 1/2 ounce rum \n - 1/2 ounce tequila \n - 1/2 ounce triple sec \n - 1/2 ounce vodka \n - 1 ounce sweet and sour mix \n - 1 splash club soda \n - Garnish: lemon wheel \n - Garnish: maraschino cherry"
  }
];
const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);
  const infoRef = useRef();

  // useEffect(() => {
  // gsap.to(footerRef.current, {opacity: 1, delay: 2.5, duration: 1.5})
  // })
  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
      // if (currentImage < length) {
      //   return currentImage + 1;
      // } else {
      //   return 0;
      // }
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <Header name={descriptions[currentImage].name} />
      <Description recipes={descriptions[currentImage].Recipe} />

      <figure>
        {numLoaded < images.length ? (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        ) : null}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onLoad={handleImageLoad}
            onClick={handleClick}
            // style={{ opacity: currentImage === index ? 1 : 0 }}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};
// function App() {

// }

export default App;
