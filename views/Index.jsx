const React = require('react')
const myStyle = {
    color: 'yellow',
    backgroundColor: 'pink',
};

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <body style={myStyle}>
                <h1>
                    'See All The Pokemon!'
                </h1>
                <nav>
                    <a href="/pokemon/new">Create Your Favorite Pokemon</a>
                </nav>
                <ul>
                    {pokemon.map((pokemon, i) => {
                         const capital = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                        return (
                       
                                < li key = { i } >

                                    <a href={`/pokemon/${pokemon._id}`}>
                                        {capital}
                                    </a>

                    </li>
                )
                })}

            </ul>
        </body >
    )
    }
}
module.exports = Index