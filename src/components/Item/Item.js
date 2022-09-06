const Item = ({id, image, name, description, price, stock}) => {
    return <div>
        <img src={image} alt={name}/>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
    </div>;
}

export default Item;