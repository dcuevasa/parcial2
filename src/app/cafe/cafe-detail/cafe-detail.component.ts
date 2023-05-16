import { Component, OnInit, Input } from '@angular/core';
import { cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.css']
})
export class CafeDetailComponent implements OnInit {

  @Input() cafe!: cafe;

  constructor(
    private service: CafeService
  ) { }

  ngOnInit() {
  }


}
