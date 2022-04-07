import React from 'react';
import Global from './components/global';
import Header from './components/header';
import Article from './components/article';
import Footer from './components/footer';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <div>
                <Global/>
                <Header/>
                <Article/>
                <Footer/>
            </div>
        )
    }
}

export default App;