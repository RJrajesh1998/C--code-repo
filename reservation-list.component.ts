import { Component, OnInit } from '@angular/core';
import { ReservationModel } from 'src/app/Models/reservation-model';
import { ReservServiceService } from 'src/app/Services/reserv-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservService: ReservServiceService, private router: Router) {

  }

  onCreate() {
    this.router.navigate(['/create']);
  }

  reserv: ReservationModel[] = []
  ngOnInit(): void {
    this.reservService.getReservations().subscribe({

      next: (data) => {
        this.reserv = data;
      },
      error: err => { },
      complete: () => { }
    })
  }

  onDelete(id: number) {
    this.reservService.DeleteReservation(id).subscribe({
      next: (data) => {
        this.ngOnInit()
      },
      error: err => { },
      complete: () => { }
    })
  }
}
