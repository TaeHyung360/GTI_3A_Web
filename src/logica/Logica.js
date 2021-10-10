const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const { Op } = require("sequelize");
module.exports = class Logica {
    constructor(database, user, password, host, port, dialect) {
        this.laConexion = new Sequelize(database, user, password, {
            host: host,
            port: port,
            dialect: dialect,
        });
    }
    cargarModelos() {
        return this.laConexion.define("Medicion", {
            idMedicion: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            idUsuario: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            valor: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            idSensor: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            latitud: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            longitud: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            }
        }, {
            timestamps: false,
            freezeTableName: true
        });
    }
    // .................................................................
    // insertarMedicion()
    // .................................................................
    async insertarMedicion(Medicion, body) {
        await Medicion.create(body);
    }
    // .................................................................
    // obtenerTodasLasMediciones()
    // .................................................................
    async obtenerTodasLasMediciones(Medicion) {
        const mediciones = await Medicion.findAll();
        return mediciones;
    }
    // .................................................................
    // obtenerUltimasMediciones()
    // .................................................................
    async obtenerUltimasMediciones(Medicion, fecha) {
        //Op es un modulo de sequelize para utilizar operadores
        //gte = a mayor o igual
        const mediciones = await Medicion.findAll({
            where: {
                fecha: {
                    [Op.gte]: fecha,
                }
            },
        });
        return mediciones;
    }
    // .................................................................
    // testConexiones()
    // .................................................................
    async testConexiones() {
        try {
            await this.laConexion.authenticate();
            console.log("Conectado!!");
        } catch (error) {
            console.error("No se puede conectar con la base de datos: ", error);
        }
    }
}