/**
 * @description       : 
 * @author            : Rubén Fortes-Marques Sánchez
 * @group             : 
 * @last modified on  : 10-11-2022
 * @last modified by  : Rubén Fortes-Marques Sánchez
**/
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'Trailblazer';
    
    currentDate = new Date().toDateString();

    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }

    handleGreetingChange() {
        this.greeting = event.target.value
    }
}