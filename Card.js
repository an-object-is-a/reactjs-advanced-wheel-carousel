import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.props.amLoaded();
    }

    get_coords = (theta, radius) => {
        return {
            x: Math.cos(theta) * radius,
            y: Math.sin(theta) * radius
        }
    }

    render() {
        let coord = this.get_coords(this.props.theta, this.props.radius);

        return (
            <div style={{
                ...styles.card,
                left: `${this.props.center.x + coord.x}px`,
                top: `${this.props.center.y - coord.y}px`
            }}>
                <img alt="ok" src={this.props.pic} style={styles.image}/>
            </div>
        )
    }
}

const styles = {
    card: {
        margin: '0',
        padding: '0',
        width: '100px',
        height: '100px',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: '50%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'blue'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '50%'
    }
}

export default React.memo(Card);
