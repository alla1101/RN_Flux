import Dispatcher from './Dispatcher';
import EventEmitter from 'EventEmitter';
var tally={
  count:0
};
const increment=()=>{
  tally.count+=1;
};
const decrement=()=>{
  tally.count-=1;
};
const zero=()=>{
  tally.count=0;
};
const handleAction=(action)=>{
  switch(action.type){
    case 'INCREMENT':
      increment();
      break;
    case 'DECREMENT':
      decrement();
      break;
    case 'ZERO':
      zero();
      break;
    default:
      //do Nothing
  }
  instance.emitChange();
};
class TallyStore extends EventEmitter{
  getTally(){
    return Object.assign({},tally);
  }
  addChangeListener(callback) {
    this.addListener('CHANGE', callback);
  }
  removeChangeListener(callback){
    this.removeChangeListener('CHANGE',callback);
  }
  emitChange(){
    this.emit('CHANGE');
  }
}
Dispatcher.register(handleAction);
const instance = new TallyStore();
export default instance;
