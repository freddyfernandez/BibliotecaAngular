export interface Cliente{
    id: number;
    nombre: string;
    saldo: number;
    fecha: Date;

    mostrarSaldo():void;
}