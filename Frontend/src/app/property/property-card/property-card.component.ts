import { Component } from "@angular/core";


@Component({
    selector : 'app-property-card',
    //template : `<h1>Hi mohasin</h1>`,
    templateUrl : 'property-card.component.html',
    //styles : [`h1 {font-weight : normal;}`]
    styleUrls : ['property-card.component.css']
})

export class PropertyCardComponent{

    property : any = {
        "Id" : 1,
        "Type" : "House",
        "Name" : "Birla House",
        "Price" : 1200


    }
}