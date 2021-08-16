import '../styles/index.scss'
import Recipes from './Recipes'
import pic from '../images/Cholent.jfif'



const App = () => {

    return(
        <>
        <section className="hero"></section>
            <main>
                <section>
                    <h1>Hi React</h1>
                </section>
                <img src={pic} alt="Beef Stew" width = '250px' />
            
            <Recipes />
            </main>
        


        </>
    )
}




export default App