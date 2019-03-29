const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');


const PROTO_PATH = path.join(__dirname, 'grpc-api.proto');
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

async function configurationRPCService(call, callback) {
    callback(null, {result: JSON.stringify({key: 'value'})});
}


function main() {
    var server = new grpc.Server();
    server.addService(config.Configuration.service, {getConfiguration: configurationRPCService});
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();

