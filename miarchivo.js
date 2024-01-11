//Tema elegido: Página que ofece servicios de diseño y remodelación de ambientes, ofreciendo un presupuesto
//inicial mínimo en base al tipo de ambiente seleccionado y superficie.

//Pedidos de datos identificatorios

function verificarDatos(nombre, mail, telefono, verificar) {
    do {
      nombre = prompt("Ingrese su nombre:");
      mail = prompt("Ingrese su correo electrónico:");
      telefono = Number(prompt("Ingrese su telefono:"));
      alert("Ud. Ingresó:\n\nNombre: " + nombre + "\nCorreo electrónico: " + mail + "\nTeléfono: " +telefono + ".");
      verificar = prompt("Son correctos los datos (SI/NO):").toUpperCase();

      if (verificar == "NO") {
        alert("Por favor, ingrese los datos nuevamente.");
      }
    } while (verificar == "NO");

    alert("¡Datos correctos!Nombre: " + nombre + "\nCorreo electrónico: " + mail + "\nTeléfono: " +telefono );
  }

  verificarDatos();

  //Consulta sobre tipo de trabajo elegido: Asesoramiento para diseño o remodelación. Seguidamente selección de producto y cálculo acumulativo*/

let modalidad = Number(prompt("Indique la modalidad elegida:\n1- Diseño o \n2- Remodelación"));
switch(modalidad){
    case 1:
        let total_1comedor = 0;
        let total_1living = 0;
        let total_1cocina = 0;
        let total_1bano = 0;
        let total_1habitacion = 0;
    
        while (true) {
            let ambiente = Number(prompt("Indique tipo de ambiente a remodelar:\n1- Comedor, \n2-Living, \n3-Cocina, \n4-Baño, \n5-Habitación, \n9-Fin"));
    
            if (ambiente == 9) {
                let total_1 = total_1comedor + total_1living + total_1cocina + total_1bano + total_1habitacion;
                alert("Presupuesto por Diseño:\n Subtotal por Diseño del Comedor: $ " + total_1comedor + "\n Subtotal por Diseño del Living: $ " + total_1living + "\n Subtotal por Diseño de la Cocina: $ " + total_1cocina + "\n Subtotal por Diseño del Baño: $ " + total_1bano + "\n Subtotal por Diseño de la Habitación: $ " + total_1habitacion + "\n TOTAL: $ " + total_1);
                break; 
            } else {
                let metros;
                if (ambiente == 1) {
                    metros = Number(prompt("Ingrese metros cuadrados del Comedor"));
                    total_1comedor += metros * 1000;
                } else if (ambiente == 2) {
                    metros = Number(prompt("Ingrese metros cuadrados del Living"));
                    total_1living += metros * 1100;
                } else if (ambiente == 3) {
                    metros = Number(prompt("Ingrese metros cuadrados de la Cocina"));
                    total_1cocina += metros * 1200;
                } else if (ambiente == 4) {
                    metros = Number(prompt("Ingrese metros cuadrados del Baño"));
                    total_1bano += metros * 1300;
                } else if (ambiente == 5) {
                    metros = Number(prompt("Ingrese metros cuadrados de la Habitación"));
                    total_1habitacion += metros * 1150;
                }
            }
        }
        break;
       
    case 2:
        let total_2comedor = 0;
        let total_2living = 0;
        let total_2cocina = 0;
        let total_2bano = 0;
        let total_2habitacion = 0;
        
        while (true) {
            let ambiente = Number(prompt("Indique tipo de ambiente a remodelar:\n1- Comedor, \n2-Living, \n3-Cocina, \n4-Baño, \n5-Habitación, \n9-Fin"));
        
            if (ambiente == 9) {
                let total_2 = total_2comedor + total_2living + total_2cocina + total_2bano + total_2habitacion;
                alert("Presupuesto por Remodelación:\n Subtotal por Remodelación del Comedor: $ " + total_2comedor + "\n Subtotal por Remodelación del Living: $ " + total_2living + "\n Subtotal por Remodelación de la Cocina: $ " + total_2cocina + "\n Subtotal por Remodelación del Baño: $ " + total_2bano + "\n Subtotal por Remodelación de la Habitación: $ " + total_2habitacion + "\n TOTAL: $ " + total_2);
                break; 
            } else {
                let metros;
                if (ambiente == 1) {
                    metros = Number(prompt("Ingrese metros cuadrados del Comedor"));
                    total_2comedor += metros * 3000;
                } else if (ambiente == 2) {
                    metros = Number(prompt("Ingrese metros cuadrados del Living"));
                    total_2living += metros * 3100;
                } else if (ambiente == 3) {
                    metros = Number(prompt("Ingrese metros cuadrados de la Cocina"));
                    total_2cocina += metros * 3200;
                } else if (ambiente == 4) {
                    metros = Number(prompt("Ingrese metros cuadrados del Baño"));
                    total_2bano += metros * 3300;
                } else if (ambiente == 5) {
                    metros = Number(prompt("Ingrese metros cuadrados de la Habitación"));
                    total_2habitacion += metros * 3150;
                }
            }
        }
        break;
   
    default:
        alert("Selección incorrecta");
        break;
        
}   
   
   





