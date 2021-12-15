Service.Loader = class {
    constructor() {
    }

    static LoadJsonAsync(url) {
        const SUCCESSFUL = 200;
        return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            
            req.onload = function() {          
                if (req.status == SUCCESSFUL) {                   
                    resolve(JSON.parse(req.response));
                }
                else {              
                    let message  = "";
                    try {
                        message = JSON.parse(req.response).message;
                    } catch (error){
                        message = req.response;
                    }
                    reject({ status: req.status, message: Error(message)});
                }
            };            
            req.onerror = function(  ) {
                reject(Error(ErrorMessage.notConnectServer));
            }                  
            req.send();
        });
    }
}