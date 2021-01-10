export interface Iproductos {
  "id" : number;
  "nombre" : string;
  "descripcion" : string;
  "categoria" : string;
  "precio" : number;
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
