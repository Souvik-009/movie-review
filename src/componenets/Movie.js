import './Movie.css';
const Movie =(props)=>{
    return(
<>
    <div className="movie">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>{props.year}</p>
        <p>IMBD Id: {props.imbd}</p>
    </div>
    </>
    )
}
export default Movie;
