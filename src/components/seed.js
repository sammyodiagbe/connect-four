import YellowSeed from "../game world/counterYellowLarge";
import RedSeed from "../game world/redSeed";

const Seed = ({ entry }) => {
  return entry == 1 ? <RedSeed /> : entry == 2 ? <YellowSeed /> : null;
};

export default Seed;
