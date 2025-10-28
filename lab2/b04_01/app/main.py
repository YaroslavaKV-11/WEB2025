import os, time, random
import mysql.connector
from mysql.connector import errorcode

DB_HOST = os.getenv("DB_HOST", "mysql")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")

for attempt in range(30):
    try:
        conn = mysql.connector.connect(
            host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASS
        )
        break
    except mysql.connector.Error as e:
        print(f"[wait-db] attempt {attempt+1}/30: {e}")
        time.sleep(2)
else:
    raise SystemExit("База так і не піднялась за 60с")

cur = conn.cursor()
cur.execute("""
    CREATE TABLE IF NOT EXISTS test_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        value INT
    )
""")
for _ in range(2):
    cur.execute("INSERT INTO test_data (value) VALUES (%s)", (random.randint(1,100),))
conn.commit()
cur.execute("SELECT * FROM test_data")
for row in cur.fetchall():
    print(row)
cur.close(); conn.close()
