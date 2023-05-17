import { api, LightningElement, track, wire } from 'lwc';
import test1 from '@salesforce/apex/TEST.test1';


export default class Practice extends LightningElement {
@track Rdata;
@api isButtonClick;
@track btnMap;
@track isTrue;

date1=new Date();
dateToString=this.date1.toDateString();

date=this.date1.toLocaleDateString();

@wire(test1,{d:'$date1'})
wiredTest;




Rdata=
{
    "restaurants": [
      {
        "id": 1,
        "name": "La Bamba",
        "description": "Mexican cuisine with a modern twist",
        "image": 'https://media-cdn.tripadvisor.com/media/photo-s/02/d7/74/ca/la-bamba.jpg'
      },
      {
        "id": 2,
        "name": "Bella Italia",
        "description": "Authentic Italian dishes in a cozy atmosphere",
        "image": "https://th.bing.com/th/id/OIP.zrVLNYG7TNDdbdg_xCmS2AHaE-?pid=ImgDet&rs=1"
      },
      {
        "id": 3,
        "name": "Le Parisien",
        "description": "French cuisine with a focus on fresh, local ingredients",
        "image": "https://th.bing.com/th/id/OIP.EVIj1vLJB1M-lj4QXgRkyAHaFD?pid=ImgDet&rs=1"
      },
      {
        "id": 4,
        "name": "Sushi Time",
        "description": "Fresh sushi and Japanese dishes made to order",
        "image": "https://th.bing.com/th/id/OIP.0KK2UOP5bX9y2YDiP9qXrQHaFu?pid=ImgDet&rs=1"
      }
    ]
  };

ButtonHandler(e){
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.id);
    console.log(this.date, "---- ",this.date1);
    console.log('Dsateeeeetettetette',this.wiredTest)
}
searchHandler(e){
  let event=e;
  console.log(event);
  const ob={...this.Rdata.restaurants};

  this.ob.filter((res)=>{
    if(res.name===event.target.value){
      return res;
    }
  })
  
}
constructor(){
    super();  
    this.isTrue=false;
}

Rhandler(e){

  console.log(e);
  this.isTrue=e.detail;
  
  

}

parenthandler=(e)=>{
    console.log(e.detail);
    console.log(e.target.detail);
}

}

