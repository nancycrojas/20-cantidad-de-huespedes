//Cantidad de huéspedes

//Crear un programa 
//que pida al usuario ingresar
//, de a uno por vez
//, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

const hospedaje1 = Number(prompt("Hola, ¿Cuántas habitaciones tiene disponible para 2 personas?"));
const hospedaje2 = Number(prompt("Hola, ¿Cuántas habitaciones tiene disponible para 3 personas?"));
const hospedaje3 = Number(prompt("Hola, ¿Cuántas habitaciones tiene disponible para 4 personas?"));

alert(`El máximo de huéspedes que puede albergar nuestro hotel en este momento es ${hospedaje1 * 2 + hospedaje2 * 3 + hospedaje3 * 4} `);
