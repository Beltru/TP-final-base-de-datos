import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbconfig.js";

// definicion de la clase PedidoPlato como un modelo de sequelize
export class PedidoPlato extends Model {}

PedidoPlato.init(
  {
    // definicion del campo 'id' como clave primaria y autoincremental
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // campo 'id_pedido' con referencia a la tabla 'pedios'
    id_pedido: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pedidos',
        key: 'id',
      },
    },
    // campo 'id_plato' con referencia a la tabla 'Platos'
    id_plato: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Platos',
        key: 'id',
      },
    },
    // campo 'cantidad' con un valor predeterminado de 1
    cantidad: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    // configuracion adicional del modelo nombre de tabla, timestamps desactivados, etc
    sequelize,
    modelName: 'PedidoPlato',
    tableName: 'pedidos_platos',
    timestamps: false,
  }
);


