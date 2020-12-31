import UiCtrl from './UiCTRL';
import FightersCtrl from './FighterCTRL';
import StorageCTRL from './StorageCTRL';
import ValidatorCTRL from './ValidatorCTRL';
import AnimationCTRL from './AnimationsCTRL';

const App = (function (
  UiCtrl,
  FightersCtrl,
  StorageCtrl,
  ValidatorCtrl,
  AnimationCtrl
) {
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

    //handle animations header
    document.addEventListener('scroll', handleHeaderAnimation);

    //handle animations edit
    document.addEventListener('click', handleEditAnimation);
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

      //show ranking
      UiCtrl.showRanking();

      //add to Storage
      const storageFighters = StorageCtrl.setStorageFighters(newFighter);

      //Populate fighter
      UiCtrl.populateFighters(storageFighters);

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

      //get fighter
      //StorageCtrl.getStorageFighters()
      FightersCtrl.getFighters();

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

    //updateStorage
    const updateStorage = StorageCtrl.updateStorageFighters(
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
    const id = parseInt(currentFighterState.id);

    //delete from DB
    FightersCtrl.deleteFighter(id);

    //delete from ui
    UiCtrl.deleteFighterUi(id);

    //Delete form storage
    StorageCtrl.deleteStorageFighters(id);

    //clear inputs
    UiCtrl.clearInputValues();

    //clear edit state
    UiCtrl.clearModeEditState();

    if (FightersCtrl.getFighters().length === 0) {
      //hide ranking
      UiCtrl.hideRanking();
    }
  };

  //Handle cancel
  const handleCancel = (e) => {
    e.preventDefault();

    //clear inputs
    UiCtrl.clearInputValues();

    //clear edit state
    UiCtrl.clearModeEditState();
  };

  //handle header animations
  const handleHeaderAnimation = () => {
    //Animations
    AnimationCtrl.getTopHeight();
  };

  //handle edit scroll
  const handleEditAnimation = (e) => {
    if (e.target.classList.contains('ranking__edit')) {
      AnimationCtrl.scrollToForm();
    }
  };

  return {
    init: function () {
      //get fighters
      const fighters = FightersCtrl.getFighters();

      //clear edit state
      UiCtrl.clearModeEditState();

      if (fighters.length === 0) {
        //hide ranking
        UiCtrl.hideRanking();
      } else {
        //show ranking
        UiCtrl.showRanking();
        //Populate fighter
        UiCtrl.populateFighters(fighters);
      }

      //run event eventListerners
      eventListerners();
    },
  };
})(UiCtrl, FightersCtrl, StorageCTRL, ValidatorCTRL, AnimationCTRL);

export default App;
