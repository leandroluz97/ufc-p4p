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

    //Handle submit update
    const updateBtn = document.querySelector(UISelectors.updateBtn);
    updateBtn.addEventListener('click', handleUpdateSubmit);

    //Handle delete
    const deleteBtn = document.querySelector(UISelectors.deleteBtn);
    deleteBtn.addEventListener('click', handleDelete);

    //Handle cancel
    const cancelBtn = document.querySelector(UISelectors.cancelBtn);
    cancelBtn.addEventListener('click', handleCancel);
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
  const handleEditState = (e) => {
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

  //handle updte submit
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    //get input values
    const inputValue = UiCtrl.getInputValue();

    //get state fighter
    const currentFighterState = FightersCtrl.getStateFighter();

    //update fighter
    const updateFighters = FightersCtrl.updateFighter(
      currentFighterState.id,
      inputValue
    );

    //populate new fighters update
    UiCtrl.populateFighters(updateFighters);

    //clear inputs
    UiCtrl.clearInputValues();

    //clear edit state
    UiCtrl.clearModeEditState();
  };

  //Handle delete
  const handleDelete = (e) => {
    e.preventDefault();

    //get state fighter
    const currentFighterState = FightersCtrl.getStateFighter();

    //delete from DB
    FightersCtrl.deleteFighter(currentFighterState.id);

    //delete from ui
    UiCtrl.deleteFighterUi(currentFighterState.id);

    //clear inputs
    UiCtrl.clearInputValues();

    //clear edit state
    UiCtrl.clearModeEditState();
  };

  //Handle cancel
  const handleCancel = (e) => {
    e.preventDefault();

    //clear inputs
    UiCtrl.clearInputValues();

    //clear edit state
    UiCtrl.clearModeEditState();
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
