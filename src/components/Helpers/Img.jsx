import imagen1 from '../../../public/1.png'
import imagen2 from '../../../public/2.png'
const Img = () => {
    return(
        <section>

        <img className='imagen1' src= {imagen1} alt="" />
        <img className='imagen2' src={imagen2} alt="" />
        </section>
    )
}

export default Img;