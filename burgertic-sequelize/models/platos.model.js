import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig.js";

// definicion de la clase plato como un modelo de sequelize
export class Plato extends Model {}

Plato.init(
    {
        // definicion del campo 'id' como clave primaria y autoincremental
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // campo 'tipo' para indicar el tipo de plato
        tipo: {
            type: DataTypes.STRING,
        },
        // campo 'nombre' para almacenar el nombre del platillo
        nombre: {
            type: DataTypes.STRING,
        },
        // campo 'precio' para definir el valor del plato en formato flotante
        precio: {
            type: DataTypes.FLOAT,
        },
        // campo 'descripcion' para dar mas detalles del plato
        descripcion: {
            type: DataTypes.STRING,
        },
    },
    {
        // configuracion adicional del modelo nombre de tabla y timestamps desactivado
        sequelize,
        modelName: "Plato",
        tableName: "platos",
        timestamps: false,
    }
);
