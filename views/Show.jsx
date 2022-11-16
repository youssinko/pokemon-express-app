const React = require('react')
const myStyle = {
    color: 'yellow',
    backgroundColor: 'pink',
};

class Show extends React.Component {
    render() {
        const {name ,img } = this.props;
        const capital = name.charAt(0).toUpperCase() + name.slice(1)
        return (
            
            <body style={myStyle}>
                <h1>
                "Gotta Catch 'Em All"'
                </h1>
                <h2>
                    {capital} <br></br>
                    <img src={`${img}.jpg`}></img>
                    <br></br>
                    <a href={`/pokemon`}>Back</a>
                    
                </h2>
           
        </body >
    )
    }
}
module.exports = Show