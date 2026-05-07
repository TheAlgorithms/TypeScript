/**
 * @concept Encapsulation
 * 
 * Encapsulation is the bundling of data (properties) and the methods 
 * that operate on that data within a single unit or class. It restricts 
 * direct external access to the object's internal state, promoting 
 * data integrity and security.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Encapsulation_(computer_programming) | Wikipedia: Encapsulation}
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility | TypeScript Docs: Member Visibility}
 */
export class SmartWatch {
    /**
     * Private internal state, inaccessible directly from outside the class.
     */
    private _stepCount: number = 0;

    /**
     * Controlled public interface to safely modify the internal state.
     * @param steps - The number of steps to add.
     */
    public addSteps(steps: number): void {
        if (steps > 0) this._stepCount += steps;
    }

    /**
     * Public getter to safely retrieve the internal state without allowing direct modification.
     * @returns The current step count.
     */
    public get steps(): number {
        return this._stepCount;
    }
}