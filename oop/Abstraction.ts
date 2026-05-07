/**
 * @concept Abstraction
 * 
 * Abstraction is a fundamental Object-Oriented Programming concept that hides 
 * complex implementation details and exposes only the necessary features 
 * of an object. It allows you to focus on what an object does instead of 
 * how it does it.
 * 
 * @see {@link https://en.wikipedia.org/wiki/Abstraction_(computer_science) | Wikipedia: Abstraction}
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members | TypeScript Docs: Abstract Classes}
 */
export abstract class MailService {
    /**
     * Abstract method definition. 
     * Subclasses must implement this method to provide specific mail delivery logic.
     */
    abstract send(): void;

    /**
     * Shared internal logic available to all subclasses, 
     * abstracting away the connection process.
     */
    protected connect(): void {
        console.log("Connecting to mail server...");
    }
}

/**
 * Concrete implementation of the abstract MailService.
 */
export class GmailService extends MailService {
    send(): void {
        this.connect();
        console.log("Sending mail via Gmail...");
    }
}