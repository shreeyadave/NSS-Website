import pandas as pd
import json

# Read data from Excel file
df_team2019 = pd.read_excel('src/components/Pages/Alumni/alumni_data.xlsx', sheet_name='2019')
df_team2018 = pd.read_excel('src/components/Pages/Alumni/alumni_data.xlsx', sheet_name='2018')
df_sir = pd.read_excel('src/components/Pages/Alumni/alumni_data.xlsx', sheet_name='sir')

# Convert data to a list of dictionaries
team2019 = df_team2019.to_dict(orient='records')
team2018 = df_team2018.to_dict(orient='records')
sir = df_sir.to_dict(orient='records')

# Export the data to a JavaScript file
with open('src/components/Pages/Alumni/TeamData.js', 'w') as file:
    file.write(f"const sir = {json.dumps(sir)};\n\n")
    file.write(f"const Team2019 = {json.dumps(team2019)};\n\n")
    file.write(f"const Team2018 = {json.dumps(team2018)};\n\n")
    file.write("export { sir, Team2019, Team2018 };")

print("Data exported to TeamData.js")
