import mysql.connector

class MysqlDb:
    
    def __init__(self,host,user,pwd,db):
        self.user = user
        self.host = host
        self.password = pwd
        self.database = db
        
    def getConn(self):
        
        mysqlConn = mysql.connector.connect(
            user=self.user,
            password=self.password,
            host=self.host,
            database = self.database
        )
        
        if mysqlConn is None:
            print("Error de conexión")
        
        return mysqlConn