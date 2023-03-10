import psycopg2

# Connect to the PostgreSQL database
conn = psycopg2.connect(database="mydatabase", user="myusername", password="mypassword", host="localhost", port="5432")

# Open a cursor to perform database operations
cur = conn.cursor()

# Update the user's profile
cur.execute("UPDATE users SET name='John Doe', email='johndoe@example.com', bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' WHERE id=1")

# Update the tech leader's profile
cur.execute("UPDATE tech_leaders SET name='Jane Doe', email='janedoe@example.com', bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' WHERE id=1")

# Commit the changes to the database
conn.commit()

# Close the cursor and the database connection
cur.close()
conn.close()
