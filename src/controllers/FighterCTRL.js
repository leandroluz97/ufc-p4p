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
        image:
          'https://esbrasil.com.br/wp-content/uploads/2020/06/jonjones.jpg',
        rank: '1',
        win: '20',
        lost: '0',
        draw: '1',
        create: '9999',
        lastEdit: '9999',
        id: 4,
      },
    ],
    stateFighter: null,
  };

  return {
    addFighter: function () {},
    getFighters: function () {
      return data.fighters;
    },
    getData: function () {
      return data;
    },
  };
})();

export default fightersCTRL;
