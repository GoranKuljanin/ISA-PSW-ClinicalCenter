import { Component, OnInit, Inject } from '@angular/core';
import { PacijentService } from '../../../../services/pacijentServices/pacijent.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-profil-dialog',
  templateUrl: './edit-profil-dialog.component.html',
  styleUrls: ['./edit-profil-dialog.component.css']
})
export class EditProfilDialogComponent implements OnInit {

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditProfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public pacijentService: PacijentService) { }

  ngOnInit() {
  }
  public update(): void {
    this.pacijentService.updatePacijenta(this.data);
    this.snackBar.open('Uspešno modifikovan profil: ' + this.data.naziv, 'U redu', { duration: 2500 });
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
  }
}
