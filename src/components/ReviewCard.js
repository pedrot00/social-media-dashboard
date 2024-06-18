import './ReviewCard.css';

function ReviewCard(props){
 return(
    <>
        <div className="secundaryBox">
            <div className="label">
                <p>{props.label}</p>
            </div>
            <div className="icon">
                <img src = {props.mediaIcon}></img>
            </div>
            <div className="number">
                <h2>{props.number}</h2>
            </div>
            <div className ="arrow">
                <img src={props.arrowIcon}></img>
            </div>
            <div className="percent">
                <p>{props.percent}</p>
            </div>
        </div>


    </>
 )
}

export default ReviewCard;