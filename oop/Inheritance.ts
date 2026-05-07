/**
 * @concept Inheritance
 * 
 * Inheritance is a mechanism where a new class (subclass) acquires the 
 * properties and methods of an existing class (superclass). It promotes 
 * code reusability and establishes a hierarchical relationship between classes.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming) | Wikipedia: Inheritance}
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses | TypeScript Docs: Extends Clauses}
 */
export class User {
    constructor(public name: string) { }

    /**
     * Common method available to all Users and their subclasses.
     */
    login(): void {
        console.log(`${this.name} logged in.`);
    }
}

/**
 * Admin inherits the properties (name) and methods (login) from User, 
 * while defining its own specialized behaviors.
 */
export class Admin extends User {
    /**
     * Specialized method only available to Admins.
     */
    deleteUser(userName: string): void {
        console.log(`Admin ${this.name} is deleting user: ${userName}`);
    }
}