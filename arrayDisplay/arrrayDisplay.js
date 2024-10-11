const info = [
  {
    id: 1,
    name: "Tech Innovations",
    contact: "contact@techinnovations.com",
    country: "USA",
  },
  {
    id: 2,
    name: "Green Solutions",
    contact: "info@greensolutions.com",
    country: "Canada",
  },
  {
    id: 3,
    name: "Global Logistics",
    contact: "support@globallogistics.com",
    country: "UK",
  },
  {
    id: 4,
    name: "HealthCorp",
    contact: "hello@healthcorp.com",
    country: "Germany",
  },
  {
    id: 5,
    name: "Finance Hub",
    contact: "contact@financehub.com",
    country: "Australia",
  },
  {
    id: 6,
    name: "Cloud Computing Inc.",
    contact: "info@cloudcomputing.com",
    country: "USA",
  },
  {
    id: 7,
    name: "Eco Energy",
    contact: "support@ecoenergy.com",
    country: "France",
  },
  {
    id: 8,
    name: "AI Revolution",
    contact: "contact@airevolution.com",
    country: "Japan",
  },
  {
    id: 9,
    name: "Smart Solutions",
    contact: "info@smartsolutions.com",
    country: "India",
  },
  {
    id: 10,
    name: "Global Ventures",
    contact: "hello@globalventures.com",
    country: "UK",
  },
  {
    id: 11,
    name: "NextGen Tech",
    contact: "info@nextgentech.com",
    country: "USA",
  },
  {
    id: 12,
    name: "BioMed Research",
    contact: "contact@biomedresearch.com",
    country: "Germany",
  },
  {
    id: 13,
    name: "Solar Future",
    contact: "info@solarfuture.com",
    country: "Spain",
  },
  {
    id: 14,
    name: "Quantum Computers",
    contact: "support@quantumcomputers.com",
    country: "Switzerland",
  },
  {
    id: 15,
    name: "Blockchain Innovations",
    contact: "hello@blockchaininnovations.com",
    country: "Singapore",
  },
  {
    id: 16,
    name: "E-commerce Hub",
    contact: "contact@ecommercehub.com",
    country: "USA",
  },
  {
    id: 17,
    name: "AgriTech Solutions",
    contact: "info@agritechsolutions.com",
    country: "Brazil",
  },
  {
    id: 18,
    name: "Global Health Services",
    contact: "support@globalhealthservices.com",
    country: "UK",
  },
  {
    id: 19,
    name: "Cyber Defense Corp",
    contact: "contact@cyberdefensecorp.com",
    country: "Israel",
  },
  {
    id: 20,
    name: "Future Mobility",
    contact: "info@futuremobility.com",
    country: "Germany",
  },
];

function appendData(id, company, contact, country) {
  var ids = document.createElement("td");
  var companies = document.createElement("td");
  var contacts = document.createElement("td");
  var countries = document.createElement("td");
  ids.classList.add("ids");
  companies.classList.add("company");
  contacts.classList.add("contact");
  countries.classList.add("country");
  ids.innerHTML = id;
  companies.innerHTML = company;
  contacts.innerHTML = contact;
  countries.innerHTML = country;
  var tableRow = document.createElement("tr");
  var container = document.querySelector(".parent");
  tableRow.appendChild(ids);
  tableRow.appendChild(companies);
  tableRow.appendChild(contacts);
  tableRow.appendChild(countries);
  container.appendChild(tableRow);
}
for (let i = 0; i < info.length; i++) {
  let dataInfo = info[i];
  appendData(dataInfo.id, dataInfo.name, dataInfo.contact, dataInfo.country);
}
