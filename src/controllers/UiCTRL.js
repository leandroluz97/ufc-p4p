const UiCtrl = (() => {
  const UISelectors = {
    nameInput: '#name',
    nicknameInput: '#nickname',
    imageInput: '#image-link',
    rankInput: '#rank',
    winInput: '#win',
    lostInput: '#lost',
    drawInput: '#draw',
    addBtn: '#add-btn',
    updateBtn: '#update-btn',
    deleteBtn: '#delete-btn',
    cancelBtn: '#cancel-btn',
    created: '#created',
    lastEdit: '#last-edit',
    rankingContent: '.ranking__content',
    rankingFighters: '.ranking__figthers',
    editBtn: '.ranking__edit',
    groupAdd: '.group__add',
    groupUpdate: '.group__update',
    groupDelete: '.group__delete',
    groupCancel: '.group__cancel',
    rankingTitle: '.ranking__title',
  };
  return {
    UISelectors: function () {
      return UISelectors;
    },
    inputValue: function () {
      //get input values
      const name = document.querySelector(UISelectors.nameInput).value;
      const nickname = document.querySelector(UISelectors.nicknameInput).value;
      const image = document.querySelector(UISelectors.imageInput).value;
      const rank = document.querySelector(UISelectors.rankInput).value;
      const win = document.querySelector(UISelectors.winInput).value;
      const lost = document.querySelector(UISelectors.lostInput).value;
      const draw = document.querySelector(UISelectors.drawInput).value;

      return {
        nameValue: name,
        nicknameValue: nickname,
        imageValue: image,
        rankValue: rank,
        winValue: win,
        lostValue: lost,
        drawValue: draw,
      };
    },
    populateFighters: function (fighters) {
      const ul = document.querySelector('.ranking__fighters');

      ul.innerHTML = '';
      //populate fighters
      fighters.forEach((fighter) => {
        ul.innerHTML += `
            <li class="ranking__fighters-item" data-id="${fighter.id}">
                <p class="ranking__position">${fighter.rank}</p>
                <img class="ranking__image"
                src="${fighter.image}" alt=""/>
                <p class="ranking__name">${fighter.name}</p>
                <p class="ranking__nickname">${fighter.nickname}</p>
                <p class="ranking__cartel">
                <span class="win">${fighter.win}</span>-<span class="lost">${fighter.lost}</span>-<span
                    class="draw">${fighter.draw}</span>
                </p>
                <button class="ranking__edit"><i class="fas fa-pen"></i></button>
          </li>
            `;
      });
    },
    modeEditState: function () {
      //show the edit state button
      document.querySelector(UISelectors.groupAdd).style.display = 'none';
      document.querySelector(UISelectors.groupDelete).style.display =
        'inline-block';
      document.querySelector(UISelectors.groupUpdate).style.display =
        'inline-block';
      document.querySelector(UISelectors.groupCancel).style.display =
        'inline-block';
      document.querySelector(UISelectors.created).style.display = 'block';
      document.querySelector(UISelectors.lastEdit).style.display = 'block';
    },
    clearModeEditState: function () {
      //hide the edit state button
      document.querySelector(UISelectors.groupAdd).style.display =
        'inline-block';
      document.querySelector(UISelectors.groupDelete).style.display = 'none';
      document.querySelector(UISelectors.groupCancel).style.display = 'none';
      document.querySelector(UISelectors.groupCancel).style.display = 'none';
      document.querySelector(UISelectors.created).style.display = 'none';
      document.querySelector(UISelectors.lastEdit).style.display = 'none';
    },
    hideRanking: function () {
      document.querySelector(UISelectors.rankingContent).style.display = 'none';
      document.querySelector(UISelectors.rankingTitle).style.display = 'none';
    },
    showRanking: function () {
      document.querySelector(UISelectors.rankingContent).style.display =
        'block';
      document.querySelector(UISelectors.rankingTitle).style.display = 'block';
    },
  };
})();
export default UiCtrl;
