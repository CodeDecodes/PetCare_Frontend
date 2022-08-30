import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dynamicSlides = [
    {
      id: 1,
      src: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
      alt: 'Image_1',
      title: 'Image_1',
    },
    {
      id: 2,
      src: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
      alt: 'Image_2',
      title: 'Image_3',
    },
    {
      id: 3,
      src: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
      alt: 'Image_3',
      title: 'Image_3',
    },
    {
      id: 4,
      src: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
      alt: 'Image_4',
      title: 'Image_4',
    },
    {
      id: 5,
      src: 'https://i.picsum.photos/id/705/400/250.jpg',
      alt: 'Image_5',
      title: 'Image_5',
    },
  ];
  title = 'petcare';
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  customOptions2: OwlOptions = {
    loop: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
