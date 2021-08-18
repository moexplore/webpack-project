import '../styles/index.scss'
import Recipes from './Recipes'
import pic from '../images/Cholent.jfif'
import Whatever from './Whatever'



const App = () => {

    return(
        <>
        <section className="hero"></section>
            <main>
                <section>
                    <h1>Hiya React</h1>
                </section>
                <img src={pic} alt="Beef Stew" width = '250px' />
            
            <Recipes />
            <Whatever />
            </main>
        


        </>
    )
}




export default App