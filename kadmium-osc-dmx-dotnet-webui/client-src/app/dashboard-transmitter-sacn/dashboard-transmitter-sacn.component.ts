import { Component, OnInit } from '@angular/core';
import { Status } from "app/status";
import { SACNTransmitterService } from "api/services";
import { StatusCode } from "app/status-code.enum";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard-transmitter-sacn',
  templateUrl: './dashboard-transmitter-sacn.component.html',
  styleUrls: ['./dashboard-transmitter-sacn.component.css'],
  providers: [SACNTransmitterService]
})
export class DashboardTransmitterSacnComponent implements OnInit
{

  public status: Status;

  enabledDetermined: boolean;
  enabled: boolean;

  constructor(private sacnTransmitterService: SACNTransmitterService, private snackbar: MatSnackBar) 
  {
    this.enabledDetermined = false;
  }

  ngOnInit()
  {
    this.sacnTransmitterService.getTransmitterStatus()
      .then(response =>
      {
        this.status = new Status(response.data.statusCode, response.data.message, response.data.message);
      })
      .catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));

    this.sacnTransmitterService.getTransmitterEnabled().then((response) =>
    {
      this.enabled = response.data;
      this.enabledDetermined = true;
    });
  }

  async toggleEnabled(): Promise<void>
  {
    let oldValue = this.enabled;
    this.enabledDetermined = false;
    try
    {
      await this.sacnTransmitterService.setTransmitterEnabled(!oldValue);
      this.enabled = !oldValue;
    }
    catch (error)
    {
      this.enabled = oldValue;
    }
    this.enabledDetermined = true;
  }

}
