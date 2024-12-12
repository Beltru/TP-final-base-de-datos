import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig.js";

// definicion de la clase Pedido como un modelo de sequelize
export class Pedido extends Model {}

Pedido.init(
    {
        // definicion del campo 'id' como clave primaria y autoincremental
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // campo 'id_usuario' con referencia a la tabla 'usuaros'
        id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'usuarios',
                key: 'id',
            },
        },
        // campo 'fecha' para almacenar datos tipo fecha
        fecha: {
            type: DataTypes.DATE,
        },
        // campo 'estado' para almacenar una cadena con maximo 50 caracteres
        estado: {
            type: DataTypes.STRING(50),
        },
    },
    {
        // configuracion adicional del modelo nombre de tabla y timestamps desactivados
        sequelize,
        modelName: "Pedido",
        tableName: "pedidos",
        timestamps: false,
    }
);
