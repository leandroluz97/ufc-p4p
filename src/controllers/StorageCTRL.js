const StorageCTRL = (() => {
  return {
    getStorageFighters: function () {
      let fighters;
      //check if LS is null
      if (localStorage.getItem('fighters') === null) {
        fighters = [];
      } else {
        //if not null get the data
        fighters = JSON.parse(localStorage.getItem('fighters'));
      }

      return fighters;
    },

    setStorageFighters: function (fighter) {
      let fighters;

      //check if LS is null
      if (localStorage.getItem('fighters') === null) {
        fighters = [];
        //localStorage.setItem('fighters', JSON.stringify(fighters));
      } else {
        //if not null get the data
        fighters = JSON.parse(localStorage.getItem('fighters'));
      }

      fighters.push(fighter);
      fighters.sort(function (a, b) {
        return a.rank - b.rank;
      });
      localStorage.setItem('fighters', JSON.stringify(fighters));
      return fighters;
    },
    deleteStorageFighters: function (id) {
      let fighters;

      //check if LS is null
      if (localStorage.getItem('fighters') === null) {
        fighters = [];
        //localStorage.setItem('fighters', JSON.stringify(fighters));
      } else {
        //if not null get the data
        fighters = JSON.parse(localStorage.getItem('fighters'));
      }

      fighters.forEach((fighter, index) => {
        if (fighter.id === id) {
          console.log(fighter);
          fighters.splice(index, 1);
        }
      });

      fighters.sort(function (a, b) {
        return a.rank - b.rank;
      });
      localStorage.setItem('fighters', JSON.stringify(fighters));
      // return fighters;
    },
  };
})();

export default StorageCTRL;
