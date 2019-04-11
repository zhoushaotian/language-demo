# coding=utf-8
# easy_install mysql-python
import MySQLdb


if __name__ == '__main__':
    # 准备数据库链接
    conn_mysql = MySQLdb.connect(host='0.0.0.0', user='username', passwd='passwd', db='abc', port=3306)
    cursor = conn_mysql.cursor()

    cursor.execute("select * from position where id < %s;", 10)
    for item in cursor.fetchall():
        print(item[0])
