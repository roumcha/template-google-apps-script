class greeting {
  static greeter(person: string) {
    return `Hello, ${person}!`;
  }

  static greet() {
    const user = "Grant";
    Logger.log(greeting.greeter(user));
  }
}
