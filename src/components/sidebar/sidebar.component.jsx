import React from 'react';
import "./sidebar.styles.css";

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

const SidebarComponent = () => {
    const links = ["Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"]
    return (
        <div className='navigations-container'>
            <ul className='navigations'>
             {links.map((ele) => {
                return <li><a href={ele}>{ele}</a></li>
             })}
            </ul>
        </div>
    );
}

export default SidebarComponent;
