const form = document.getElementById('personnelForm');
const tableBody = document.querySelector('#personnelTable tbody');
const downloadBtn = document.getElementById('downloadBtn');

let personnelData = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const resource = document.getElementById('resource').value;
    const name = document.getElementById('name').value;
    const supplier = document.getElementById('supplier').value;
    const workSite = document.getElementById('workSite').value;

    const personnelEntry = {
        date,
        resource,
        name,
        supplier,
        workSite,
        id: Date.now() // Используем timestamp как уникальный идентификатор
    };

    personnelData.push(personnelEntry);
    renderTable();
    form.reset();
});

function renderTable() {
    tableBody.innerHTML = '';
    
    personnelData.forEach(entry => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.resource}</td>
            <td>${entry.name}</td>
            <td>${entry.supplier}</td>
            <td>${entry.workSite}</td>
            <td>
                <button onclick="editEntry(${entry.id})">Редактировать</button>
                <button onclick="deleteEntry(${entry.id})">Удалить</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function editEntry(id) {
    const entry = personnelData.find(item => item.id === id);
    
    if (entry) {
        document.getElementById('date').value = entry.date;
        document.getElementById('resource').value = entry.resource;
        document.getElementById('name').value = entry.name;
        document.getElementById('supplier').value = entry.supplier;
        document.getElementById('workSite').value = entry.workSite;

        deleteEntry(id); // Удаляем запись для редактирования
    }
}

function deleteEntry(id) {
    personnelData = personnelData.filter(item => item.id !== id);
    renderTable();
}

downloadBtn.addEventListener('click', function() {
    const xmlData = generateXML();
    
    const blob = new Blob([xmlData], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'personnel_data.xml';
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

function generateXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<personnel>\n';
    
    personnelData.forEach(entry => {
        xml += `  <entry>\n`;
        xml += `    <date>${entry.date}</date>\n`;
        xml += `    <resource>${entry.resource}</resource>\n`;
        xml += `    <name>${entry.name}</name>\n`;
        xml += `    <supplier>${entry.supplier}</supplier>\n`;
        xml += `    <workSite>${entry.workSite}</workSite>\n`;
        xml += `  </entry>\n`;
    });
    
    xml += '</personnel>';
    
    return xml;
}