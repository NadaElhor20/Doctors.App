import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  doctorId : any ;
  doctorFees: any;
  doctorName: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    this.doctorName = this.route.snapshot.paramMap.get('name');
    this.doctorFees = this.route.snapshot.paramMap.get('Fees');
    console.log(this.doctorName);
    
    
  }

}

