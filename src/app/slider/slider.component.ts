import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {}
  mouseenter = false;
  mouseexit = false;
  ele: any;

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }
  mouseEnter(value: boolean, event: any) {
    console.log('mouse enter : ' + value);

    // this.ele = event.id;
    // this.ele = <HTMLScriptElement>document.getElementById(this.ele);
    // this.ele.className = 'icon_in';
    // console.log('mouse id : ' + this.ele.className);
    this.mouseenter = value;
    return true;
  }
  mouseLeave(value: boolean, event: any) {
    console.log('mouse exit : ' + value);
    // this.ele = event.id;
    // this.ele = <HTMLScriptElement>document.getElementById(this.ele);
    // this.ele.classList.remove('icon_in');
    // console.log('mouse id : ' + this.ele.className);
    this.mouseenter = value;
  }
  ngOnInit(): void {}
}
