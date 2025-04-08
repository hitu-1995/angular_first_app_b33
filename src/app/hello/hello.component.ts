import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-hello',
    templateUrl : './hello.component.html',
    //template : `<h1>welcome to hello</h1>`,
    styleUrl : './hello.component.css',
    standalone : false
})
export class HelloComponent implements OnInit
{

      readonly price : number = 120.80;

        constructor() {
            console.log("Constructor ----- started");
           // this.add();
            //console.log("Constructor ----- ends");
        }
    ngOnInit(): void {
        console.log("ngOnIt ------ started");
        console.log(this.price)
        console.log(this.price)
        this.add();
        this.areaOfCircle(5);
        console.log("in ngOnInit  Square :  "+this.sqaure(6));
        console.log("in ngOnInit  getData :  "+this.getData());
        console.log("ngOnIt ------ ends");
     
    }

      add() : void {
        console.log("add function");           
       }

       areaOfCircle(radius : number) : void{
        let readonly , area : number = 2*3.143*radius*radius;
            console.log("Area Of Cicle is : "+area);
       }

       sqaure(num : number) : number {   
        return num*num;
       }
 
       getData() : any {

          return 100;
       }
}