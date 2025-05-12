let userInput = document.querySelector("#user-input");
userInput.max= new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let d1= birthDate.getDate();
    let m1= birthDate.getMonth()+1;
    let y1= birthDate.getFullYear();

    let today = new Date();

    let d2= today.getDate();
    let m2= today.getMonth()+1;
    let y2= today.getFullYear();

    let m3, d3, y3;

    y3 = y2 - y1;
    if (m2 < m1) {
        y3--;
        m3 = 12 - (m1 - m2);
    } else {
        m3 = m2 - m1;
    }
    if (d2 < d1) {
        m3--;
        d3 = 31 - (d1 - d2);
    } else {
        d3 = d2 - d1;   
        
        
    }
    if (m3 < 0) {
        m3 = 0;
    }}