let printer = {};

((printer)=>{
    printer.print = text => console.log(`Tu texto: ${text}`);
})(printer)

module.exports = printer;