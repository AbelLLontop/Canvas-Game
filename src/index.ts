import CuartoMouseContext from "./Contexts/CuartoMouseContext";
import PrincipalContext from "./contexts/PrincipalContext";
import SecondContext from "./Contexts/SecondContext";
import TercertContexto from "./Contexts/TercerContexto";
import GameArea from "./core/GameArea";

import ControllerContext from "./core/ControllerContext";

import ListenerEvent from "./core/events/ListenerEvent";
const gameArea = new GameArea();
const controllerContexts = new ControllerContext();

const principalContext = new PrincipalContext();
const secondContext = new SecondContext();
const tercerContext = new TercertContexto();
const cuartoMouseContext = new CuartoMouseContext();

const eventMouseMove = new ListenerEvent("mousemove");
const eventMouseClick = new ListenerEvent("click");
eventMouseMove.suscribe(cuartoMouseContext);
eventMouseClick.suscribe(cuartoMouseContext);


controllerContexts.addContexts([cuartoMouseContext]);
gameArea.start(controllerContexts);
