function convertirCF() {
    let CF = prompt("A què vols convEEEertir C / F?");
    let temp = parseFloat(prompt("TemperaturTRUKUTRUa:"));
    if( CF.toUpperCase() == "F" ){
        let cent = (temp-32)/(9/5);
        console.log(`${temp}F -> ${cent}C`);
    }else if (CF.toUpperCase() == "C"){
        let fh = (9/5) * temp + 32;
        console.log(`${temp}C -> ${fh}F`);
    }else {
        console.log("Només es pot C ó F");
    }
}

