import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { cafe } from '../cafe';
import { CafeDetailComponent } from '../cafe-detail/cafe-detail.component';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<cafe> = [ ];
  origen: number = 0;
  blend: number = 0;
  selected: Boolean = false;
  selectedCafe!: cafe;
  constructor(private service: CafeService) { }

  onSelected(cafe: cafe){
    this.selected = true;
    this.selectedCafe = cafe;
  }

  ngOnInit() {
    this.service.getcafes().subscribe(cafes => {this.cafes = cafes;

    for(let i = 0; i < this.cafes.length; i++)
    {
      if(this.cafes[i].tipo == "Café de Origen")
      {
        this.origen++;
        console.log(this.origen);
      }
      if(this.cafes[i].tipo == "Blend")
      {
        this.blend++;
        console.log(this.origen);
      }
    }});
  }

}
