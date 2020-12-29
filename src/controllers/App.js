import UiCtrl from './UiCTRL';
import FightersCtrl from './FighterCTRL';
import StorageCTRL from './StorageCTRL';
import ValidatorCTRL from './ValidatorCTRL';

const App = (function (UiCtrl, FightersCtrl, StorageCTRL, ValidatorCtrl) {
  //get selectors
  const UISelectors = UiCtrl.UISelectors();

  //All event listeners
  function eventListerners() {
    //Handle new fighter event
    const addSubmit = document.querySelector(UISelectors.addBtn);
    addSubmit.addEventListener('click', handleAddSubmit);
  }

  //Handle new fighter  function
  const handleAddSubmit = function (e) {
    e.preventDefault();
    //get input value
    const inputValues = UiCtrl.getInputValue();

    //validate inputs
    const validate = ValidatorCtrl.validateInput(inputValues);
    if (validate.value) {
      const newFighter = FightersCtrl.addFighter(inputValues);

      //Populate fighter
      UiCtrl.populateFighters(newFighter);
    } else {
      ValidatorCtrl.alert(validate.message);
      console.log('error validations');
    }
  };

  return {
    init: function () {
      //get fighters
      const fighters = FightersCtrl.getFighters();

      //clear edit state
      UiCtrl.clearModeEditState();

      //Populate fighter
      UiCtrl.populateFighters(fighters);

      //run event eventListerners
      eventListerners();
    },
  };
})(UiCtrl, FightersCtrl, StorageCTRL, ValidatorCTRL);

export default App;
