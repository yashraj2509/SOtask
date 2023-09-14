import { LightningElement, api } from 'lwc';

export default class Childcomponent extends LightningElement {
    @api itemName = "child";
}