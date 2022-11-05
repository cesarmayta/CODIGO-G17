from app.mysql_conn import MysqlDb

mysqlDb = MysqlDb('localhost','root','','db_smartdevs')

dbConn = mysqlDb.getConn()

cursor = dbConn.cursor()
cursor.execute('select * from tbl_area')

data = cursor.fetchall()
print(data)
cursor.close()