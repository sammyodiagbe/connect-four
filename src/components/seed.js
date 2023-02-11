import YellowSeed from "../game world/counterYellowLarge";
import RedSeed from "../game world/redSeed";

const Seed = ({ entry }) => {
  return entry == 1 ? <YellowSeed /> : entry == 2 ? <RedSeed /> : null;
};

export default Seed;
