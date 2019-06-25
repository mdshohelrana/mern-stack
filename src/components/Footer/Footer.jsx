import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
                            <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
                            <p>You may view the <a href='https://github.com/mdshohelrana/mern-stack'>Source Code</a> behind this project on GitHub.</p>
                            <p>© 2019 Shohel Rana.</p>
                        </div>
                        <div className='col-sm-7 hidden-xs'>
                            <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
                            <ul className='list-inline'>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;