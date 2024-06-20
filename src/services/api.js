
const getData = async ()=>{
    try{
        const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/menu`);
        if(response.status === "success"){
            return response.data;
        }
        
    }catch(error){
        console.log("Hi")
        console.log(error)
    }
}
export default getData;