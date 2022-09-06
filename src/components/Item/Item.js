const Item = ({id, name, description, price, stock}) => {
    return <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
    </div>;
}

export default Item;