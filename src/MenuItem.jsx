const MenuItem = ({id, title, category, price, img, desc}) => {
    return <article>
        <img src={img} alt={title} className='photo'/>
        <div className='item-info'>
            <header>
                <h5>{title}</h5>
                <span className='price'>
                    ${price}
                </span>
            </header>
            <p className='item-text'>{desc}</p>
        </div>
    </article>
};

export default MenuItem;