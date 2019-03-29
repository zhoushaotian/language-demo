const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');


const PROTO_PATH = path.join(__dirname, 'api.proto');
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const config = grpc.loadPackageDefinition(packageDefinition).config;

function main() {
    const client = new config.Configuration('localhost:50051',
        grpc.credentials.createInsecure());
    client.getConfiguration({name: 'genderList', language:'en_US'}, function(err, response) {
        console.log('Greeting:', response.result);
    });
}

main();
