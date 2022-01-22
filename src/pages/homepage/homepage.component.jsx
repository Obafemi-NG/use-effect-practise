import React from 'react';
import Card from '../../components/card/card.component';

import './homepage.styles.css';

const Homepage = () => {
    return (
        <React.Fragment>
            <Card>
                <div className = 'home-container' > 
                    <h2>
                        Welcome Back!
                    </h2>
                    
                </div>
                
            </Card>
        </React.Fragment>
    )
}

export default Homepage;