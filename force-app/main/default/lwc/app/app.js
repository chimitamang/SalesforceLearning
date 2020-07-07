import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    ready = false;
connectedCallback(){
    setTimeout(() => {
        this.ready= true;
            
        }, 10000);
}
    
    name = 'Electra x4';
    description= ' A sweet bike for comfort';
    category = 'Mountain';
    material ='steel';
    price = '$500';
    pictureUrl= 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
}