import { Component, OnInit, Input } from '@angular/core';
import { SaleService } from '../sales.service';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() client: Persona;

  idcliente: number;
  constructor(private salesService: SaleService) { }

  ngOnInit() {
  }
  getCliente(e) {
    if (e.length === 8) {
      // tslint:disable-next-line:prefer-const
      let dni = e;
      this.salesService.getClienteBydni(dni).subscribe(res => {
        this.client = res;
        console.log(this.client);
        this.salesService.getClient(res);
      });

    }
  }


}
