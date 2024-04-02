import menu from './assests/menuOne.png'
import promotion from './assests/discount-tag.png'


function Service() {
    return(
        <div className="service">
            <div className="menu card">

                <img src={menu} alt="menu" />
                <button className="button">Menu</button>

            </div>

            <div className="promotion card">

                <img src={promotion} alt="promotion" />
                <button className="button">Promotion</button>

            </div>
         
        </div>
    )
}

export default Service; 

