let cadenaADNOriginal = 'CTaGGGTA';

function procesarCadenaADN(cadenaADN) {

    if (cadenaADN === '') {
      return '';
    }
  
    // Utilizar expresión regular para eliminar bases no canónicas y convertir a mayúsculas
    const cadenaProcesada = cadenaADN.replace(/[^CTAG]/g, '').toUpperCase();
  
    return cadenaProcesada;
  }
  

 
  const cadenaProcesada = procesarCadenaADN(cadenaADNOriginal);
  
  console.log(`Cadena original: ${cadenaADNOriginal}`);
  console.log(`Cadena procesada: ${cadenaProcesada}`);
  