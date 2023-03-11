import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="examly",
    database="herimpact"
)

mycursor = mydb.cursor()

try:
    mycursor.execute("UPDATE techlead SET Bio = 'Always up for a challange' WHERE techlead.username = 'AnneB'")
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")
except mysql.connector.Error as error:
    print("Failed to insert record into MySQL table {}".format(error))

mycursor.close()
mydb.close()