import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  pageTitle: string='One way Data binding in Angular';
  imageName: string='';

  constructor() { }

  ngOnInit(): void {
  }

  displayImage(value: string): void{
    if(value==='lion')
      this.imageName='lion.jpg';
    else if(value==='tiger')
      this.imageName='tiger.jpg';
    else if(value==='deer')
      this.imageName='deer.jpg';
    else if(value==='peacock')
      this.imageName='peacock.jpg';
    else if(value==='giraffe')
      this.imageName='giraffe.png';
    else if(value=='rabbit')
      this.imageName='rabbit.jpg'; 
  }

}
