export default class CounterComponent extends HTMLElement {
  constructor() {
    super()

    this.count = 0
  }
  
  connectedCallback() {
    this.render()
  }

  increase() {
    this.count += 1
    this.render()
  }

  render() {
    while(this.firstChild){
      this.removeChild(this.firstChild)
    }

    let countContainer = document.createElement("div")
    countContainer.className = "count-container"

    let counterTitle = document.createElement("h2")
    counterTitle.textContent = this.count

    let increaseButton = document.createElement("button")
    increaseButton.textContent = "ÖKA"
    increaseButton.className = "button"
    increaseButton.addEventListener("click", () => this.increase())

    countContainer.append(counterTitle)
    countContainer.append(increaseButton)

    this.append(countContainer)
  }
}