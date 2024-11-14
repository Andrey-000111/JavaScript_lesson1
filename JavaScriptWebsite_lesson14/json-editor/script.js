function saveJson() {
    const jsonInput = document.getElementById('jsonInput').value;

    try {
        const jsonObject = JSON.parse(jsonInput);
        const blob = new Blob([JSON.stringify(jsonObject, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('JSON сохранен как data.json');
    } catch (e) {
        alert('Ошибка в формате JSON: ' + e.message);
    }
}

function loadJson() {
    const jsonInput = document.getElementById('jsonInput');
    jsonInput.value = ''; // Очистить текстовое поле перед загрузкой
}

function importJson(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const jsonContent = e.target.result;
            const jsonObject = JSON.parse(jsonContent);
            document.getElementById('jsonInput').value = JSON.stringify(jsonObject, null, 2);
        } catch (e) {
            alert('Ошибка при загрузке JSON: ' + e.message);
        }
    };
    reader.readAsText(file);
}

function exportJson() {
    const jsonInput = document.getElementById('jsonInput').value;

    try {
        const jsonObject = JSON.parse(jsonInput);
        const blob = new Blob([JSON.stringify(jsonObject, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'exported_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('JSON экспортирован как exported_data.json');
    } catch (e) {
        alert('Ошибка в формате JSON: ' + e.message);
    }
}
