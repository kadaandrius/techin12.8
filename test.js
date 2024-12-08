function Skaiciuoklaika(namai, greitis) {
    
    function getDistance(taskas1, taskas2) {
        const [x1, y1] = taskas1;
        const [x2, y2] = taskas2;
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    let visasKeles = 0;
    let dabartineLokacija = [0, 0]; 

   
    for (const namas of namai) {
        visasKeles += getDistance(dabartineLokacija, namas);
        dabartineLokacija = namas;
    }


    visasKeles += getDistance(dabartineLokacija, [0, 0]);

    return visasKeles / greitis;
}

const namai = [[1, 2], [3, 4], [5, 6]];
const greitis = 10;

console.log("Iš viso užtruku h:", Skaiciuoklaika(namai, greitis));