const UiCtrl = (() => {
  const UISelectors = {
    nameInput: "#name",
    nicknameInput: "#nickname",
    imageInput: "#image-link",
    rankInput: "#rank",
    winInput: "#win",
    lostInput: "#lost",
    drawInput: "#draw",
    addBtn: "#add-btn",
    updateBtn: "#update-btn",
    deleteBtn: "#delete-btn",
    cancelBtn: "#cancel-btn",
    created: "#created",
    lastEdit: "#last-edit",
    dateGroup: ".main__form-dates",
    rankingContent: ".ranking__content",
    rankingFighters: ".ranking__figthers",
    editBtn: ".ranking__edit",
    groupAdd: ".group__add",
    groupUpdate: ".group__update",
    groupDelete: ".group__delete",
    groupCancel: ".group__cancel",
    rankingTitle: ".ranking__title",
    content: "#content",
    women: ".women",
    men: ".men",
    menDivision: ".men-division",
    womenDivision: "women-division",
    row: "#row",
    hamburger: "#hamburger",
    headerMiddle: ".header__middle",
    ufc: "#ufc",
  }
  return {
    UISelectors: function () {
      return UISelectors
    },
    getInputValue: function () {
      //get input values
      const name = document.querySelector(UISelectors.nameInput).value
      const nickname = document.querySelector(UISelectors.nicknameInput).value
      const image = document.querySelector(UISelectors.imageInput).value
      const rank = document.querySelector(UISelectors.rankInput).value
      const win = document.querySelector(UISelectors.winInput).value
      const lost = document.querySelector(UISelectors.lostInput).value
      const draw = document.querySelector(UISelectors.drawInput).value

      return {
        nameValue: name,
        nicknameValue: nickname,
        imageValue: image,
        rankValue: rank,
        winValue: win,
        lostValue: lost,
        drawValue: draw,
      }
    },
    clearInputValues: function () {
      document.querySelector(UISelectors.nameInput).value = ""
      document.querySelector(UISelectors.nicknameInput).value = ""
      document.querySelector(UISelectors.imageInput).value = ""
      document.querySelector(UISelectors.rankInput).value = ""
      document.querySelector(UISelectors.winInput).value = ""
      document.querySelector(UISelectors.lostInput).value = ""
      document.querySelector(UISelectors.drawInput).value = ""
    },
    populateFighters: function (fighters) {
      const ul = document.querySelector(".ranking__fighters")

      ul.innerHTML = ""
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
                <i class="fas fa-pen ranking__edit"></i>
          </li>
            `
      })
    },
    deleteFighterUi: function (id) {
      const fighters = document.querySelectorAll(".ranking__fighters-item")

      fighters.forEach((fighter) => {
        if (fighter.getAttribute("data-id") == id) {
          console.log(id)
          fighter.remove()
        }
      })
    },
    modeEditState: function () {
      //show the edit state button
      document.querySelector(UISelectors.groupAdd).style.display = "none"
      document.querySelector(UISelectors.groupDelete).style.display = "block"
      document.querySelector(UISelectors.groupUpdate).style.display = "block"
      document.querySelector(UISelectors.groupCancel).style.display = "block"
      document.querySelector(UISelectors.dateGroup).style.display = "block"
    },
    setinputValues: function name(fighter) {
      document.querySelector(UISelectors.nameInput).value = fighter.name
      document.querySelector(UISelectors.nicknameInput).value = fighter.nickname
      document.querySelector(UISelectors.imageInput).value = fighter.image
      document.querySelector(UISelectors.rankInput).value = fighter.rank
      document.querySelector(UISelectors.winInput).value = fighter.win
      document.querySelector(UISelectors.lostInput).value = fighter.lost
      document.querySelector(UISelectors.drawInput).value = fighter.draw
      document.querySelector(UISelectors.created).innerHTML = fighter.create
      document.querySelector(UISelectors.lastEdit).innerHTML = fighter.lastEdit
    },
    clearModeEditState: function () {
      //hide the edit state button
      document.querySelector(UISelectors.groupAdd).style.display = "block"
      document.querySelector(UISelectors.groupDelete).style.display = "none"
      document.querySelector(UISelectors.groupUpdate).style.display = "none"
      document.querySelector(UISelectors.groupCancel).style.display = "none"
      document.querySelector(UISelectors.dateGroup).style.display = "none"
    },
    hideRanking: function () {
      document.querySelector(UISelectors.rankingContent).style.display = "none"
      document.querySelector(UISelectors.rankingTitle).style.display = "none"
    },
    showRanking: function () {
      document.querySelector(UISelectors.rankingContent).style.display = "block"
      document.querySelector(UISelectors.rankingTitle).style.display = "block"
    },

    printWomen: function () {
      const content = document.querySelector(UISelectors.content)
      content.innerHTML = ""
      const womenSection = document.querySelector(UISelectors.row)
      womenSection.innerHTML = ""
      womenSection.innerHTML += `
      <div class="col-1-4">
      <div class="card">
        <h3 class="card__title" >LightWeight</h3>
        <h4 class="card__rank" >Champion</h3>
        <h5 class="card__name" >khabib <br> numagomedov</h3>
        <div class="card__img">     </div>
        <ul class="card__list">
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          <li class="card__figher"> 
            <span class="card__figher__rank">1</span> 
            <span  class="card__figher__name">Jones Jones</span>
            <span class="card__figher__status"><i class="fas fa-sort-up green"></i></span>
          </li>
          
        </ul>

      </div>
    </div>
      `
    },
  }
})()
export default UiCtrl
