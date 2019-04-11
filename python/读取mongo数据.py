import pymongo

if __name__ == '__main__':
    conn_mongo = pymongo.Connection('192.168.100.1', 29017)
    db = conn_mongo['dbName']
    collection = db['collectionName']

    for item in collection.find():
        print(item)


