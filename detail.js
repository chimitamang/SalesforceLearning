import { LightningElement, api } from 'lwc';
import { bikes } from 'c/data';


export default class Detail extends LightningElement {
//just testing
    // Ensure changes are reactive when product is updated
    product;

    // Private var to track @api productId
    _productId = undefined;
//testing this
    // Use set and get to process the value every time it's
    // requested while switching between products
    set productId(value) {
        this._productId = value;
        this.product = bikes.find(bike => bike.fields.Id.value === value);
    }
    
    // getter for productId
    @api get productId(){
        return this._productId;
        // testing this 
    }
}
