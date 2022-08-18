import IContexto from "../interfaces/IContexto";

type nameEvent = 'click' | 'mousemove' | 'mouseup' | 'mousedown' | 'keydown' | 'keyup';

class ListenerEvent {
  handlers: Set<IContexto> = new Set<IContexto>();

  constructor(nameEvent: nameEvent) {
    document.addEventListener(nameEvent, (e) => {
      this.handlers.forEach((contexto) => contexto.ejectEvent(e));
    });
  }
  suscribe(handler: IContexto) {
    this.handlers.add(handler);
  }
  unsuscribe(handler: IContexto) {
    this.handlers.delete(handler);
  }
}
export default ListenerEvent;
