import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  scrollY: number;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    this.scrollY = event.target.scrollingElement.scrollTop;
  }

}
