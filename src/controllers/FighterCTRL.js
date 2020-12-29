const fightersCTRL = (function () {
  //name, nickname, image, rank, win, lost, draw

  function Fighters(
    name,
    nickname,
    image,
    rank,
    win,
    lost,
    draw,
    create,
    lastEdit,
    id
  ) {
    this.name = name;
    this.nickname = nickname;
    this.image = image;
    this.rank = rank;
    this.win = win;
    this.lost = lost;
    this.draw = draw;
    this.create = create;
    this.lastEdit = lastEdit;
    this.id = id;
  }

  let data = {
    fighters: [
      {
        name: 'Jone Jones',
        nickname: 'Bones',
        image:
          'https://esbrasil.com.br/wp-content/uploads/2020/06/jonjones.jpg',
        rank: 3,
        win: 20,
        lost: 0,
        draw: 1,
        create: '9999',
        lastEdit: '9999',
        id: 3,
      },
      {
        name: 'Khabib Numagomedov',
        nickname: 'The Eagle',
        image:
          'https://esbrasil.com.br/wp-content/uploads/2020/06/jonjones.jpg',
        rank: 2,
        win: 1,
        lost: 0,
        draw: 8,
        create: '9999',
        lastEdit: '9999',
        id: 4,
      },
    ],
    stateFighter: null,
  };

  return {
    addFighter: function ({
      nameValue,
      nicknameValue,
      imageValue,
      rankValue,
      winValue,
      lostValue,
      drawValue,
    }) {
      //create date
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      const fullDate = ` ${day}/${month}/${year} - ${hour}:${min}:${sec}`;

      //create ID
      let ID;
      let arrOfId = [];
      if (data.fighters.length === 0) {
        ID = 0;
      } else {
        data.fighters.forEach((fighter) => {
          arrOfId.push(fighter.id);
        });

        ID = Math.max(...arrOfId) + 1;
      }

      //creat edit date
      let editDate = null;

      const newFighter = new Fighters(
        nameValue,
        nicknameValue,
        imageValue,
        rankValue,
        winValue,
        lostValue,
        drawValue,
        fullDate,
        editDate,
        ID
      );

      //insert new figter into the array figters
      data.fighters.push(newFighter);

      //sort array the by  lower to higher position
      data.fighters.sort(function (a, b) {
        return a.rank - b.rank;
      });

      return data.fighters;
    },

    setStateFighter: function (id) {
      let currentStateFighter;

      //iterate through all fighters
      data.fighters.forEach((fighter) => {
        //check for the same id
        if (fighter.id === id) {
          currentStateFighter = fighter;
        }
      });

      data.stateFighter = currentStateFighter;
    },

    getStateFighter: function () {
      return data.stateFighter;
    },

    getFighters: function () {
      return data.fighters;
    },

    getData: function () {
      return data;
    },
  };
})();

export default fightersCTRL;
