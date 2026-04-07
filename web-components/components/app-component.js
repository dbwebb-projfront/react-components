export default class AppComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <h1>Web Components Example</h1>
        <counter-component></counter-component>
      </div>
      `
  }
}