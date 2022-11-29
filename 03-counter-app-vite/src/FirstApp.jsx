import PropTypes from "prop-types"

export const FirstApp = ({title, subtitle, name}) => {

    
    return (
        <div>
            <h1>{title} </h1>
            <h3> {subtitle} </h3>
            <h4> {name} </h4>
        </div>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string
}

//FirstApp.defaultProps
