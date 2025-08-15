// Begrüßung abhängig von der Tageszeit
const hour = new Date().getHours();
let greeting;
if (hour < 12) greeting = "Guten Morgen!";
else if (hour < 18) greeting = "Guten Tag!";
else greeting = "Guten Abend!";
document.getElementById('greeting').textContent = greeting;
