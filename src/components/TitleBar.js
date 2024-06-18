import './TitleBar.css'

function TitleBar(){
    return(
    <>
        <div className="container">
            <div className="title">
                <h2 className='titleLabel'>Social Media Dashboard</h2>
                <div className="subTitleLabel">Total Followers: 23,004</div>   
            </div>
            <div className="darkMode">
                <p className='darkModeLabel'>Dark Mode</p>
            </div>
            <div className="darkModeButton">
                <button className="buttonTheme"></button>
            </div>
           
        </div>
        
    </>
    )
}
export default TitleBar;