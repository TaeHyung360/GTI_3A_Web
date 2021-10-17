//--------------------------------------------------------------------------------
// Logica
//
// Autor: Juan Ferrera Sala
// Fecha: 9/10/21
// Descripcion: clase logica con las funciones que realiza nuestra app web
//--------------------------------------------------------------------------------
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const { Op } = require("sequelize");
module.exports = class Logica {

    // .................................................................
    // database:texto, user:texto, password:texto, host:texto, port:texto, dialect:texto
    // -->
    // constructor () -->
    // .................................................................
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
                type: 'TIMESTAMP',
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
    // modelo Medicion {idUsuario: texto, valor: N, fecha: N, idMedicion: N, idSensor: N, latitud: R, logitud: R} ->
    // insertarMedicion()->
    // .................................................................
    /**
    * Funcion que inserta en la BBDD una medicion
    *
    * @param Medicion tabla de la BBDD 
    * @param body contenido a insertar
    *
    */
    async insertarMedicion(Medicion, body) {
        await Medicion.create(body);
    }
    // .................................................................
    //obtenerTodasMediciones() <-
    //-> [{valor: N, fecha: N, idMedicion: N, idSensor: N, latitud: R, logitud: R}]
    // .................................................................
    /**
    * Funcion que obtiene todas las mediciones de la BBDD
    *
    * @param Medicion tabla de la BBDD 
    * @returns todas las mediciones 
    */
    async obtenerTodasLasMediciones(Medicion) {
        const mediciones = await Medicion.findAll();
        return mediciones;
    }

    // .................................................................
    // numeroDeUltimasMediciones: N  -> obtenerUltimasMediciones() <-
    // -> [{valor: N, fecha: N, idMedicion: N, idSensor: N, latitud: R, logitud: R}]
    // .................................................................
    /**
    * Funcion que obtiene las ultimas mediciones a partir de un numero
    *
    * @param Medicion tabla de la BBDD 
    * @param numeroDeUltimasMediciones numero de ultimas mediciones
    * @returns ultimas mediciones 
    */
    async obtenerUltimasMediciones(Medicion, numeroDeUltimasMediciones) {
        //DESC orden descendiente
        const mediciones = await Medicion.findAll({
            order:[["fecha","DESC"]],
            limit: numeroDeUltimasMediciones
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