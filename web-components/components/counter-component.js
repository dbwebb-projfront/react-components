export default class CounterComponent extends HTMLElement {
  constructor() {
    super()

    this.count = 0
    this.celebration = ""
  }
  
  connectedCallback() {
    this.render()
  }

  increase() {
    this.count += 1

    if (this.count >= 10) {
      this.celebration = "celebration"
    }

    this.render()
  }

  render() {
    while(this.firstChild){
      this.removeChild(this.firstChild)
    }

    let countContainer = document.createElement("div")
    countContainer.classList.add("count-container")
    if (this.celebration) {
      countContainer.classList.add(this.celebration)
    }

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