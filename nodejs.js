const https = require('https');

let dir = {
    hostname: 'api.github.com',
    path: '/users/Nkrlz',
    method: 'GET',
    headers: {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:56.0; Waterfox) Gecko/20100101 Firefox/56.2.3'}
}

let request = https.request(dir, function cb(response){
    
    console.log("hello world");
    let body = ''; 
    response.on('data', function (out){
        
        body += out;
    })

    response.on('end',function (){
        
        let json = JSON.parse(body);
        if(json.public_repos == 0){

            console.log('No Repositories');
        }else if (json.public_repos == 3){

            console.log('There are 3 repositories');
        }else if(json.public_repos >= 3){
            
            console.log('There are a lot of repositories');            
        }
    })
    
    response.on('error', function (err){

        console.log('I cannot connect to the server', err);
    }) 
})

request.end();