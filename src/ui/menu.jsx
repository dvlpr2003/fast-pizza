import Header from "../component/header"
import "../App.css"

const Menu =()=>{
    return(
        <>
        <Header/>
        <MenuItems/>

        </>
    )
}

const MenuItems = ()=>{
    return(
        <main className = "flex flex-column center">
            <Items/>
        </main>
    )
}
const Items =()=>{
    return(
        
            <div className="menuitem flex item-center">
                <img src="img/instadv.png" alt=""  className="pizza-img"/>
                <div className="flex flex-column ">
                    <span>Margherita</span>
                    <span>Tomato, Mozzarella, Basil</span>
                    <div className="flex item-center">
                        <span>€12.00</span>
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
