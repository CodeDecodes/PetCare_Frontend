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
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        () => `https://picsum.photos/900/500?random&t=${Math.random() - 1}`
      ),
      alt: 'Image_1',
      title: 'Image_1',
    },
    {
      id: 2,
      images: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
        () => `https://picsum.photos/900/500?random&t=${Math.random() + 2}`
      ),
      alt: 'Image_2',
      title: 'Image_3',
    },
    {
      id: 3,
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        () => `https://picsum.photos/900/500?random&t=${Math.random() + 1}`
      ),
      alt: 'Image_3',
      title: 'Image_3',
    },
    {
      id: 4,
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        () => `https://picsum.photos/900/500?random&t=${Math.random() + 4}`
      ),
      alt: 'Image_4',
      title: 'Image_4',
    },
    {
      id: 5,
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        () => `https://picsum.photos/900/500?random&t=${Math.random()}`
      ),
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
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  items = [{ title: 'Profile' }, { title: 'Logout' }];
  ngOnIt() {
    console.log('https://picsum.photos/900/500?random&t=${Math.random() + 4}');
  }
}
