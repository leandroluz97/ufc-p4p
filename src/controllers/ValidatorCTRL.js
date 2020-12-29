const ValidatorCTRL = (() => {
  return {
    validateInput: function (input) {
      let caution = {
        value: true,
        message: '',
      };

      let expression = new RegExp(
        /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/
      );

      //Name validation
      if (typeof input.nameValue === String || input.nameValue === '') {
        caution.value = false;
        caution.message = `Please Fill the Name field, or enter a valid Name`;
        return caution;
      }

      //NickName validations
      if (typeof input.nicknameValue === String || input.nicknameValue === '') {
        caution.value = false;
        caution.message = `Please Fill the Nickname, or enter a valid NickName`;
        return caution;
      }

      //Image validations
      if (!expression.test(input.imageValue) || input.imageValue === '') {
        caution.value = false;
        caution.message = `Link is not valid.`;
        return caution;
      }

      //Rank validations
      if (input.rankValue === '') {
        caution.value = false;
        caution.message = `Please Fill the Rank field.`;
        return caution;
      }

      //win validations
      if (input.winValue === '') {
        caution.value = false;
        caution.message = `Please Fill the Win field.`;
        return caution;
      }

      //lost validation
      if (input.lostValue === '') {
        caution.value = false;
        caution.message = `Please Fill the Lost field.`;
        return caution;
      }

      //draw validation
      if (input.drawValue === '') {
        caution.value = false;
        caution.message = `Please Fill the Draw field.`;
        return caution;
      }

      return caution;
    },

    alert: function (message) {
      const error = document.querySelector('#error');
      error.innerHTML = message;
      error.classList.add('main__error');

      setTimeout(function () {
        error.innerHTML = '';
        error.classList.remove('main__error');
      }, 3000);
    },
  };
})();

export default ValidatorCTRL;
