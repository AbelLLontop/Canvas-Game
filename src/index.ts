import PrincipalContext from "./contexts/PrincipalContext";
import SecondContext from "./Contexts/SecondContext";
import GameArea from "./GameArea";

import LogicGameArea from "./LogicGameArea";
const gameArea = new GameArea();
const logicGame = new LogicGameArea();

const principalContext = new PrincipalContext();
const secondContext = new SecondContext();
logicGame.addElements([principalContext, secondContext]);
gameArea.start(logicGame);
