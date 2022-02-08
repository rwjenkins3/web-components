import './Card.css';

const Card = (props) => {
    return (
        <div className={`card ${props.shadow ? "card-shadow" : "" }`} >
            { props.image ? (
                <div className='card-image'>
                    <img src={props.image} alt="picture" />
                </div>
            ) : null }

            { props.title ? (
                <div className='card-title'>
                    {props.title}
                </div>
            ) : null }

            { props.body ? (
                <div className='card-body'>
                    {props.body}
                </div>
            ) : null }

            { props.footer ? (
                <div className='card-footer'>
                    <button className='btn'>This</button>
                    <button className='btn btn-outliine'>That</button>
                </div>
            ) : (<div style={{minHeight: '1rem'}}></div>) }

        </div>
    );
}


export default Card;