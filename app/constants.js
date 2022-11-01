const local_dev_constants = {
    PORT:"3000",
    MODE:"DEV",
    DB_URL:"mongodb+srv://root:xFNqHuDfLCRbbpKy@cluster.nfwhf.mongodb.net/capstonedb?retryWrites=true&w=majority",
    BUILD_PATH:"./frontend/public",
    main_url : "http://localhost:3000"
}


const server_constants = {
    PORT:"3000",
    MODE:"PROD",
    DB_URL:"mongodb+srv://root:xFNqHuDfLCRbbpKy@cluster.nfwhf.mongodb.net/capstonedb?retryWrites=true&w=majority",
    BUILD_PATH:"./frontend/public",
    main_url : "http://143.198.39.117"
}


function getConstants(mode = "PROD"){
    if(mode === "PROD")
        return server_constants
    else
        return local_dev_constants
}

module.exports = getConstants