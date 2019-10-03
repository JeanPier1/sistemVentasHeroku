import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sales.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private  saleservices: SaleService) { }

  personas: Persona[];
  selectControl: FormControl = new FormControl();

  ngOnInit() {
    this.saleservices.getClientes().subscribe(
      (clientes) => {
        this.personas = clientes;
        console.log(this.personas);
      }
    );
  }

  getid(e) {
    console.log(e);
  }

}
