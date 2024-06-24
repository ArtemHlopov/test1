class Modal {
  constructor() {
    this.userEmail = "";
    this.userPass = "";
  }
  renderModal = () => {
    const mainBlock = document.querySelector(".main");
    const modal = this.createEleWithClass("div", "main__modal");
    this.fillModalContent(modal);
    mainBlock.append(modal);
  };
  createEleWithClass = (tag, className, text) => {
    const result = document.createElement(tag);
    result.classList.add(className);
    text ? (result.textContent = text) : result;
    return result;
  };
  fillModalContent = (block) => {
    const form = this.createEleWithClass("form", "modal__form");
    const cancelBlock = this.createCancelBtnBlock();
    const formTitle = this.createEleWithClass(
      "h3",
      "form__title",
      "Войдите в систему"
    );
    const emailInput = this.createInput(
      "user-email",
      "Email/Телефон",
      "userEmail"
    );
    const passInput = this.createInput("user-pass", "Пароль", "userPass");
    const checkbox = this.createCheckboxBlock();
    const passLink = this.createEleWithClass(
      "a",
      "form__pass-link",
      "Восстановить"
    );
    const loginBtn = this.createFormBtn("login", "Войти");
    const signinBtn = this.createFormBtn("signin", "Зарегистрироваться");
    form.append(
      cancelBlock,
      formTitle,
      emailInput,
      passInput,
      checkbox,
      passLink,
      loginBtn,
      signinBtn
    );
    block.append(form);
  };
  createCancelBtnBlock = () => {
    const btnBlock = this.createEleWithClass("div", "form__close-btn__block");
    const closeBtn = this.createEleWithClass("button", "form__close-btn");
    btnBlock.append(closeBtn);
    return btnBlock;
  };
  createCheckboxBlock = () => {
    const wrapper = this.createEleWithClass("div", "checkbox__wrapper");
    const checkbox = this.createEleWithClass("input", "form__checkbox");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    const label = this.createEleWithClass(
      "label",
      "checkbox__label",
      "Запомнить пароль"
    );
    label.setAttribute("for", "checkbox");
    wrapper.append(checkbox, label);
    return wrapper;
  };
  createInput = (id, text, value) => {
    const input = this.createEleWithClass("input", "form__input");
    input.setAttribute("id", id);
    input.setAttribute("placeholder", text);
    input.addEventListener("input", (event) => {
      this[value] = event.target.value;
    });
    return input;
  };
  createFormBtn = (id, text) => {
    const btn = this.createEleWithClass("button", "form__btn");
    btn.setAttribute("id", id);
    btn.textContent = text;
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(
        `User email: ${this.userEmail ? this.userEmail : ""}, user pass: ${
          this.userPass ? this.userPass : ""
        }`
      );
    });
    return btn;
  };
}

const app = new Modal();
const modalLink = document.querySelector(".content__text__btn");
modalLink.addEventListener("click", app.renderModal);
