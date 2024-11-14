from flask import Flask, render_template, request, send_file
import pandas as pd
from datetime import datetime
import os

app = Flask(__name__)

# Путь к файлу Excel
excel_file_path = 'data/employees.xlsx'

# Инициализация пустого DataFrame, если файл не существует
if not os.path.exists(excel_file_path):
    df = pd.DataFrame(columns=["Дата", "Компания", "Фамилия", "Имя", "Отчество", "Участок работы"])
    df.to_excel(excel_file_path, index=False)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Получение данных из формы
        date = request.form['date']
        company = request.form['company']
        surname = request.form['surname']
        name = request.form['name']
        patronymic = request.form['patronymic']
        work_section = request.form['work_section']

        # Создание DataFrame и добавление новых данных
        new_data = pd.DataFrame({
            "Дата": [date],
            "Компания": [company],
            "Фамилия": [surname],
            "Имя": [name],
            "Отчество": [patronymic],
            "Участок работы": [work_section]
        })

        # Чтение существующих данных и добавление новых
        existing_data = pd.read_excel(excel_file_path)
        updated_data = pd.concat([existing_data, new_data], ignore_index=True)
        updated_data.to_excel(excel_file_path, index=False)

    return render_template('index.html')

@app.route('/download')
def download():
    return send_file(excel_file_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
