import { INFERRED_TYPE } from "@angular/compiler/src/output/output_ast";

export interface Iproductos {
  "propietario" : string;
  "id" : string;
  "nombre" : string;
  "descripcion" : string;
  "categoria" : string;
  "precio" : number;
  "like" : string[];
}

export interface IproductoTecnologia extends Iproductos{
  "estado" : string;
}

export interface IproductoInmobiliaria extends Iproductos{
  "metrosCuadrados" : number;
  "banyos" : number;
  "habitaciones" : number
  "localidad" : string;
}

export interface IproductoMotor extends Iproductos{
  "tipo" : string;
  "kilometros" : number;
  "anyo" : string;
}
