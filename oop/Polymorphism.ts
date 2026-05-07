/**
 * @concept Polymorphism
 * 
 * Polymorphism (meaning "many forms") allows objects of different classes 
 * to be treated as objects of a common superclass or interface. It enables 
 * a single interface to represent different underlying forms (data types).
 * 
 * @see {@link https://en.wikipedia.org/wiki/Polymorphism_(computer_science) | Wikipedia: Polymorphism}
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses | TypeScript Docs: Implements Clauses}
 */
export interface UIElement {
    /**
     * Common interface method that all implementing classes must define.
     */
    render(): void;
}

/**
 * Specific implementation of UIElement behaving as a TextBox.
 */
export class TextBox implements UIElement {
    render(): void {
        console.log("Rendering a TextBox");
    }
}

/**
 * Specific implementation of UIElement behaving as a Checkbox.
 */
export class Checkbox implements UIElement {
    render(): void {
        console.log("Rendering a Checkbox");
    }
}