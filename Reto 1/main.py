import pandas as pd;

archivo = 'C:/Users/Jr/Desktop/Open Bootcamp/Python/Part 1/Libro1.xlsx'

data = pd.read_excel(archivo)

print(data)

emails = data[['Email']]

print(emails)

emails = emails.drop_duplicates('Email')

print(emails)