export default class HelloWorld {
  constructor(name) {
    this.name = name || '';
  }

  get() {
    return `Hello World ${this.name}!`;
  }

  set(name = '') {
    this.name = name;
  }
}
