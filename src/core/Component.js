export default class Component {
  constructor({ $target }) {
    this.$target = $target;
    this.render();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
