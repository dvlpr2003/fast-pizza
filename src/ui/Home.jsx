const Home = ()=>{
    return(
        <>
        <header 
        className="header flex item-center justify-content flex-wrap">
            <h4>Fast Pizza co.</h4>
            <form>
                <input type="text"  placeholder="Search by id " className="input-border pad-t-b pad-r-l transitions radius"/>
            </form>
        </header>
        <main className = "flex flex-column center">
            <HomeContent/>
        </main>
        </>
    )

}


const HomeContent = ()=>{
    return(
        <homecontent className="flex flex-column center gap">
            <span className="home-cont-txt">The best pizza.</span>
            <span className="blue-txt-600 home-cont-txt">Straight out of the oven, straight to you.</span>
            <p className="p-cont-txt">👋 Welcome! Please start by telling us your name:</p>
            <form> 
                <input type="text" className="input-border pad-t-b pad-r-l transitions radius name-input" placeholder="Your full name"/>
            </form>

        </homecontent>
    )
}
export default Home;