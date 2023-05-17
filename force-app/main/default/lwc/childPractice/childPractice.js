import { LightningElement,api } from 'lwc';
export default class ChildPractice extends LightningElement {
    @api isTrue

    constructor(){
        super();
        this.isTrue=false;
    }
    ChildHandler(){
        this.isTrue=true;
        this.dispatchEvent(new CustomEvent('restaurantclick',{detail:this.isTrue}));
        console.log(this.isTrue);
        
    }

  

    // ChildHandler(){
    //     this.name="you have clicked on this component";
    //     const name1="this is modified name strnf"
    //     const eve=new CustomEvent('clickevent',{detail:this.name});
    //     this.dispatchEvent(eve);

    // }

}