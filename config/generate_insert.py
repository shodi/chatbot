import csv

def generate_insert(obj):
    values = []
    for key in obj:
        if obj[key] == '':
            values.append('NULL')
        else:
            values.append('\'%s\'' % obj[key].replace('\'', '\'\''))
    return 'INSERT INTO TB_RESTAURANTES (%s) VALUES (%s);'\
        % (','.join(obj.keys()), ','.join(values))

def main():
    inserts = []
    with open('./data.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            inserts.append(generate_insert(row))
    with open('./inserts.sql', mode='w') as insfile:
        insfile.write('\n'.join(inserts))
 
if __name__ == '__main__':
    main()