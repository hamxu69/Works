const data = [
    { id: 1, company: "Tech Solutions", country: "USA", contact: "john@techsol.com" },
    { id: 2, company: "Innovate Ltd", country: "UK", contact: "sarah@innovate.co.uk" },
    { id: 3, company: "Global Ventures", country: "Germany", contact: "franz@globalventures.de" },
    { id: 4, company: "Sunrise Inc.", country: "Japan", contact: "takashi@sunrise.jp" },
    { id: 5, company: "GreenTech", country: "Australia", contact: "emily@greentech.au" },
]  
function tableAppend(id , company , country , contact, arrData) {
    const ids = document.createElement('td');
    const comps = document.createElement('td');
    const counts = document.createElement('td');
    const conts = document.createElement('td');
    const btn = document.createElement('button');
    const tableRow = document.createElement('tr');
    const tbody = document.querySelector('.tdContainer')
    const data = JSON.stringify(arrData)
    ids.textContent = id;
    comps.textContent = company;
    counts.textContent = country;
    conts.textContent = contact;
    btn.classList.add(`btn-${id}`)
    tableRow.classList.add(`tb-${id}`)
    btn.innerHTML = 'Remove'
    tableRow.appendChild(ids);
    tableRow.appendChild(comps);
    tableRow.appendChild(counts);
    tableRow.appendChild(conts);
    tableRow.appendChild(btn);
    tbody.appendChild(tableRow)
    btn.addEventListener('click' , function Remove() {
        tableRow.remove()
    })
}
for (let i = 0; i < data.length; i++) {
    const arrData = data[i];
    tableAppend(arrData.id , arrData.company , arrData.country ,arrData.contact, arrData )
}
const arrData = JSON.stringify(
data);
localStorage.setItem('stored', arrData)
let array = JSON.parse(localStorage.getItem("myArray"));
 localStorage.removeItem(array[3])

