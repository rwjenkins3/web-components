import './HCard.css';


const HCard = (props) => {
    return (
        <div className={`hcard ${props.shadow ? "hcard-shadow" : "" }`}>
            <div className='hcard-image'>
                <img src={props.image} alt="" />
            </div>

            <div className='hcard-text-container'>
                <div className='hcard-text'>
                    <div className='hcard-title'>
                        Header
                    </div>
                    <div className='hcard-body'>
                        Body text goes here. Lorem ipsum lotsa textn stuff. Mara vader darth fett skywalker mon jabba ahsoka qui-gonn. Darth kessel aayla darth han.
                    </div>
                </div>
                { props.footer ? (
                <div className='hcard-footer'>
                    <button className='btn'>This</button>
                    <button className='btn btn-outliine'>That</button>
                </div>
            ) : (<div style={{minHeight: '1rem'}}></div>) }
            </div>
        </div>
    );
}


export default HCard;