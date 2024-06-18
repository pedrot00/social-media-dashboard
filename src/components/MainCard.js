import './MainCard.css'

function MainCard(props){
    return(
        <>
            <div className='mainBox'>
                <div className = 'socialMediaIcon'>
                    <img src = {props.icon}></img>
                </div>
                <div className = 'socialMediaAt'>
                    <p>{props.at}</p>
                </div>
                <div className = 'socialMediaNumber'>
                    <h1>{props.number}</h1>
                </div>
                <div className = 'subtitle'>
                    <p>{props.subtitle}</p>
                </div>
                <div className = 'arrowIcon'>
                <img src = {props.arrowIcon}></img>
                </div>
                <div className = 'followLabel'>
                    <p>{props.label}</p>
                </div>
            </div>
        </>
    )
}

export default MainCard;