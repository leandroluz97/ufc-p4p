import UiCtrl from './UiCTRL';
import FightersCtrl from './FighterCTRL';
import StorageCTRL from './StorageCTRL';

const App = (function (ui, war, ls) {
  const fight = [
    {
      name: 'Jone Jones',
      nickname: 'Bones',
      image: 'https://esbrasil.com.br/wp-content/uploads/2020/06/jonjones.jpg',
      rank: '1',
      win: '20',
      lost: '0',
      draw: '1',
      create: '9999',
      lastEdit: '9999',
      id: 4,
    },
    {
      name: 'Khabib Numagomedov',
      nickname: 'The Eagle',
      image: 'https://esbrasil.com.br/wp-content/uploads/2020/06/jonjones.jpg',
      rank: '1',
      win: '20',
      lost: '0',
      draw: '1',
      create: '9999',
      lastEdit: '9999',
      id: 4,
    },
  ];

  return {
    init: function () {
      console.log();
      console.log(war);

      ui.populateFighters(fight);
    },
  };
})(UiCtrl, FightersCtrl, StorageCTRL);

export default App;
