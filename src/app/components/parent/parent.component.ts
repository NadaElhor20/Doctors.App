import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  parentArr: any = [
    {
      id: 1,
      img: 'https://st.depositphotos.com/1771835/1477/i/950/depositphotos_14779771-stock-photo-portrait-of-confident-young-doctor.jpg',
      name: 'Ahmed Badr',
      title: 'Dental and Cosmetic Dental Center',
      Fees: '150 EGP',
    },
    {
      id: 2,
      img: 'https://image.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg',
      name: 'Eman Tantawy',
      title: 'Ph.D. and Consultant Oral and Maxillofacial Surgery',
      Fees: '200 EGP',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
