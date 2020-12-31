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

    updateStorageFighters: function (id, upFighter) {
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
          //update date
          const date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            fullDate = ` ${day}/${month}/${year} - ${hour}:${min}:${sec}`;
          fighter.name = upFighter.nameValue;
          fighter.nickname = upFighter.nicknameValue;
          fighter.image = upFighter.imageValue;
          fighter.rank = upFighter.rankValue;
          fighter.win = upFighter.winValue;
          fighter.lost = upFighter.lostValue;
          fighter.lastEdit = fullDate;
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
