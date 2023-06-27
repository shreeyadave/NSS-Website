import pandas as pd
import json

# Read data from Excel file
excel_file_path = 'src/components/Pages/Team/alumni_data.xlsx'
excel_data = pd.read_excel(excel_file_path, sheet_name=None)

# Convert each sheet to a dictionary of records
data_dict = {}
for sheet_name, sheet_data in excel_data.items():
    data_dict[sheet_name] = sheet_data.to_dict(orient='records')

# Export the data to a JavaScript file
with open('src/components/Pages/Team/TeamData.js', 'w') as file:
    for sheet_name, sheet_records in data_dict.items():
        file.write(f"const {sheet_name} = {json.dumps(sheet_records)};\n\n")
    file.write("export { " + ", ".join(data_dict.keys()) + " };")

print("Data exported to TeamData.js")

