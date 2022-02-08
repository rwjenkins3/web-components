import './CardGrid.css';


const CardGrid = (props) => {

    return(
        <div className={`${props.hcard ? "hgrid" : "grid" }`}>
            {props.children}
        </div>
    );

}

export default CardGrid;