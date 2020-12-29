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

    //Hanfle edit state
    document.addEventListener('click', handleEditState);
  }

  //Handle new fighter  function
  const handleAddSubmit = (e) => {
    e.preventDefault();
    //get input value
    const inputValues = UiCtrl.getInputValue();

    //validate inputs
    const validate = ValidatorCtrl.validateInput(inputValues);
    if (validate.value) {
      //get inputs
      const newFighter = FightersCtrl.addFighter(inputValues);

      //Populate fighter
      UiCtrl.populateFighters(newFighter);

      //clear inputs
      UiCtrl.clearInputValues();
    } else {
      ValidatorCtrl.alert(validate.message);
      console.log('error validations');
    }
  };

  //Hanfle edit state
  const handleEditState = function (e) {
    e.preventDefault();

    //click the edit btn
    if (e.target.classList.contains('ranking__edit')) {
      //save id
      let id = parseInt(e.target.parentElement.getAttribute('data-id'));

      //active edit mode
      UiCtrl.modeEditState();

      //set state edit fighter
      FightersCtrl.setStateFighter(id);

      //get state fighter
      const currentFighterState = FightersCtrl.getStateFighter();

      //show input value
      UiCtrl.setinputValues(currentFighterState);
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
