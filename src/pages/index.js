import React from "react"
import Link from 'gatsby-link';

export default () => (
<div style={{color: 'tomato'}}>
    <h1>Hello Gatsby</h1>
    <p>What a world.</p>
    <img src='https://source.unsplash.com/random/400x200' alt=''/>
    <br />
    <div>
    <br />
        <Link to='/page-2'>Go to Page 2</Link>
    </div>
    <div>
    <br />
        <Link to='/counter'>Counter</Link>
    </div>
</div>
)