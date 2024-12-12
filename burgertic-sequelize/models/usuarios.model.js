import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig.js";

// definicion de la clase usuario como un modelo de sequelize
export class Usuario extends Model {}

Usuario.init(
    {
        // definicion del campo 'id' como clave primaria y autoincremental
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // campo 'nombre' para almacenar el nombre del usario
        nombre: {
            type: DataTypes.STRING,
        },
        // campo 'apellido' para almacenar el apellido del usuario
        apellido: {
            type: DataTypes.STRING,
        },
        // campo 'email' con valor unico para almacenar el correo del usuario
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        // campo 'password' para guardar la contraseña del usuario
        password: {
            type: DataTypes.STRING,
        },
        // campo 'admin' que define si el usuario tiene permisos administrativos
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        // configuracion adicional del modelo nombre de tabla y timestamps desactivados
        sequelize,
        modelName: "Usuario",
        tableName: "usuarios",
        timestamps: false,
    }
);
