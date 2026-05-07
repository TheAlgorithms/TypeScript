import { MailService, GmailService } from '../Abstraction';
import { SmartWatch } from '../Encapsulation';
import { User, Admin } from '../Inheritance';
import { UIElement, TextBox, Checkbox } from '../Polymorphism';

describe('TypeScript OOP Educational Examples', () => {
    test('Abstraction: Should correctly use MailService and GmailService', () => {
        const gmail = new GmailService();
        const spy = jest.spyOn(console, 'log');

        gmail.send();

        expect(spy).toHaveBeenCalledWith("Connecting to mail server...");
        expect(spy).toHaveBeenCalledWith("Sending mail via Gmail...");
        spy.mockRestore();
    });

    test('Encapsulation: Should protect internal step count', () => {
        const watch = new SmartWatch();
        watch.addSteps(100);
        expect(watch.steps).toBe(100);

        watch.addSteps(-50); // should not reduce steps because step must be > 0
        expect(watch.steps).toBe(100);
        // watch._stepCount is inaccessible here (TypeScript error)
    });

    test('Inheritance: Should allow Admin to inherit User and have custom behavior', () => {
        const admin = new Admin("Alice");
        const spy = jest.spyOn(console, 'log');

        admin.login();
        admin.deleteUser("Bob");

        expect(spy).toHaveBeenCalledWith("Alice logged in.");
        expect(spy).toHaveBeenCalledWith("Admin Alice is deleting user: Bob");
        spy.mockRestore();
    });

    test('Polymorphism: Should work with different UIElement types', () => {
        const elements: UIElement[] = [new TextBox(), new Checkbox()];
        const spy = jest.spyOn(console, 'log');

        elements.forEach(el => el.render());

        expect(spy).toHaveBeenCalledWith("Rendering a TextBox");
        expect(spy).toHaveBeenCalledWith("Rendering a Checkbox");
        spy.mockRestore();
    });
});