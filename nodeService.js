const Service = require('node-windows').Service

const svc =  new Service({
    name: "nodeTestServer",
    description: "Test Server",
    script: "E:\\Programming Code\\nodejs_windows_service\\index.js"
})

svc.on('install', function(){
    svc.start()
})

svc.install()