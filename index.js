const log4js = require("log4js");

let logger= log4js.getLogger();

logger.level = "debug"; // "production"

logger.info("La aplicacíon se inicio muy bien");
logger.warn("Cuidado falta la libreria x en el sistema");
logger.error("No se encontro la función enviar email");
logger.fatal("No se pudo iniciar la aplicación");

function sumar(x, y){
    return x + y;
}

module.exports = sumar;