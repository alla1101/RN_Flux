import Dispatcher from './Dispatcher';
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
  //instance.emitChange();
};
class TallyStore{
  getTally(){
    return Object.assign({},tally);
  }
}
Dispatcher.register(handleAction);
const instance = new TallyStore();
export default instance;
