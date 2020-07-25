import { Component, OnInit , Renderer2, Inject} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationDataService } from '../_services/animation-data.service'
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CourseDialogComponentComponent } from '../course-dialog-component/course-dialog-component.component';


@Component({
  selector: 'app-main-navar',
  templateUrl: './main-navar.component.html',
  styleUrls: ['./main-navar.component.css']
})
export class MainNavarComponent implements OnInit {
  
  constructor(private route: Router , public animation:AnimationDataService , private renderer:Renderer2, private dialog: MatDialog) { 

   
  }
  dialogConfig = new MatDialogConfig();
  onInit = {id: 1, name: "Basic", pageurl: "Basic" }
  OnInitSubAmination = {name:"scale-up"}
  ngOnInit(): void {
    this.onSelect(this.onInit)
    this.onSelectSubAnmiation(this.OnInitSubAmination)

  }

   listofurl = [
    {"id":1,"name":"Basic","pageurl":"Basic"},
    {"id":2,"name":"Entrances" , "pageurl":"Entrances"},
    {"id":3,"name":"Text" , "pageurl":"Text"},
    {"id":4,"name":"Exits" , "pageurl":"Exits"},
    {"id":5,"name":"Attention" , "pageurl":"Attention"},
    {"id":6,"name":"Background" , "pageurl":"Background"}
   ];


   


   listofsuburl:any
   mainObject = "box-object"
   mainStyle = "animation: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 0s 1 normal both running scale-up-top;"
   listofsubamination:any
   divMessages =''
   html_data 
   
  onSelect(sublink){
    this.listofsuburl = this.animation.getListOfAnmimation(sublink.name);
    //this.route.navigate(['/Home', sublink.name]);
  }
  onSelectSubAnmiation(name){
    this.listofsubamination = this.animation.getListOfSubAnmimation(name.name);
  }

  OnSelectAnimationType(name){
    this.dialogConfig.data = {
      name: "Output",
      animal: 'Angular For Beginners',
      classData: this.animation.generateCssOutput(name),
      keyFramesdata:"@-webkit-keyframes scale-up-center{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-center{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}"

    };
  }

  

  openDialog() {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CourseDialogComponentComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    ); 
  }

}
