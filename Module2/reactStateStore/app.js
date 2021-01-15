console.log(products);

class App extends React.Component {

    state = {
        products: products
    }

    render() {
        return (<div>
            <h1>Hi There!</h1>
            <ul>
                {products.map(item => <li>{item.name}</li>)}

            </ul>
        </div>)
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'))
