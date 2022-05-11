export default class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.$target.innerHTML = `
        <div class="SelectedLanguage">
            <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Elixir</li>
            <li>Java</li>
            <li>PHP</li>
            </ul>
        </div>
        <form class="SearchInput">
            <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="Script">
        </form>
        <div class="Suggestion">
            <ul>
            <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
            <li>Java<span class="Suggestion__item--matched">Script</span></li>
            <li>Type<span class="Suggestion__item--matched">Script</span></li>
            <li>Pure<span class="Suggestion__item--matched">Script</span></li>
            </ul>
        </div>
        `;
  }
}
