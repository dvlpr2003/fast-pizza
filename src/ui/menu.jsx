import Header from "../component/header"
import "../App.css"
import { useEffect ,useState} from "react"
import axios from "axios"

// import getData from "../services/api"


const Menu = ()=>{
    const [Menudata,setmenudata]=useState()
    console.log(Menudata)
    useEffect( ()=>{
        async function callBack(){
            try{
                const response = await axios.get("https://react-fast-pizza-api.onrender.com/api/menu")
                setmenudata(response.data['data'])
            }catch(error){
                console.log(error)
            }
        }
        callBack()     
    },[])
    return(
        <>
        <Header/>
        <MenuItems Menudata={Menudata}/>
        </>
    )
}

function MenuItems({Menudata}){
    return(
        <main className = "flex flex-column center">
            {
                Menudata&&Menudata.map((e)=>{<Items key={e.id} name={e.name} price ={e.unitPrice} imageurl ={e.imageUrl}/>})
            }
        </main>
    )
}
function Items ({name,price,imageurl}){
    return(
        
            <div className="menuitem flex item-center">
                <img src={imageurl} alt=""  className="pizza-img"/>
                <div className="flex flex-column container2">
                    <span className="bold">{name}</span>
                    <span>Tomato, Mozzarella, Basil</span>
                    <div className="flex item-center flex-warp price-and-quantity">
                        <span>€{price}</span>
                        <div className="flex options-container">
                            <div className="flex center inc-dec-container">
                                <div className="inc-dec flex center"><span>-</span></div>
                                <span>1</span>
                                <div className="inc-dec flex center"> <span>+</span></div>
                            </div>
                            <button className="add-to-cart-and-dlt">
                                DELETE
                            </button>
                        </div>

                    </div>

                </div>
            </div>
       
    )
}


export default Menu;
