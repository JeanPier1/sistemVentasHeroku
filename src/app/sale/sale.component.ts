import { Component, OnInit, Input } from '@angular/core';
import { producto } from '../model/producto';
import { SaleService } from '../sales.service';
import { Persona } from '../model/persona';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  code: number;
  product: producto;
  products: producto[] = Array<producto>();
  total: number;

  @Input() qttotal = 0;
  @Input() client: Persona;


  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.product = {idproducto: 0, nom_prod: '', precio: 0, stock: 0 , codigo: 0, qt: 0};
  }


  getProducto(e) {
    // tslint:disable-next-line:prefer-const
    let code = e;
    this.saleService.getClienteByCodigo(code).subscribe(res => {
      this.product = res;
      this.product.qt = 0;
    });
  }
  addProduct(product: producto, qt: any) {
    // tslint:disable-next-line:radix
    product.qt = Number.parseInt(qt.value);
    this.products.push(product);
    this.total += product.qt * product.precio;
    this.qttotal += product.qt;
    this.product = {idproducto: 0, nom_prod: '', precio: 0, stock: 0 , codigo: 0, qt: 0};

    this.products.forEach(element => {
      this.total = element.precio * element.qt;
      console.log(this.total);
    });

  }
}
