const API = 'http://localhost:8081'
const model = 'users'
const listUsers = async () => {
    const response = await fetch(`${API}/${model}`,{
        method: 'GET',        
        headers: {  'Access-Control-Allow-Origin':'*',        
           'Content-type': 'application/json'}
    });    
    const data = await response.json();
    return  data;
}

export {
    listUsers    
}