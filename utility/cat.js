// new class
class Cat {
    makeSound() {
        return `${this.constructor.name}: Meowww`;
    }
}
// exports objects
module.exports = Cat;
// error 
// exports.Cat;