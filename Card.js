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
            <img alt="ok" src={this.props.pic}
                style={{
                    ...styles.card,
                    left: `${this.props.center.x + coord.x}px`,
                    top: `${this.props.center.y - coord.y}px`
                }} />
        )
    }
}

const styles = {
    card: {
        margin: '0',
        padding: '0',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        height: '200px',
        width: '200px',
        // backgroundColor: 'blue',
        borderRadius: '100px'
    }
}

export default React.memo(Card);
