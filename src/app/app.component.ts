import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gettyImages';
  
  ngOnInit(){
    console.log("gettyImages");
    console.log("This is a new Project");
    console.log("This is stash");
    console.log("This is a Patch File");
  }
}
