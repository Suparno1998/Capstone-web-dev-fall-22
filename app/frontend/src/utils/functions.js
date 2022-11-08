export const fetchData = async (url, options)=>{
    try{
        const response = await fetch(url,options)
        if(response.status === 401){
            localStorage.clear()
            location.href = "/"
        }
        const data = await response.json()
        return data
    return data
    }catch(err){
        console.log(err)
    }
}

