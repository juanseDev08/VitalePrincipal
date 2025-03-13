import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  images: any[] = [
    {
      previewImageSrc: 'assets/images/gallery/MinimosSimples.png',
      thumbnailImageSrc: 'assets/images/gallery/MinimosSimples.png',
      alt: 'Mínimos Simples'
    },
    {
      previewImageSrc: 'assets/images/gallery/PiezasVitaleSalsas.png',
      thumbnailImageSrc: 'assets/images/gallery/PiezasVitaleSalsas.png',
      alt: 'Piezas Vitale Salsas'
    },
    {
      previewImageSrc: 'assets/images/gallery/estaSemana(1).jpeg',
      thumbnailImageSrc: 'assets/images/gallery/estaSemana(1).jpeg',
      alt: 'Esta Semana'
    },
  ];

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
}
