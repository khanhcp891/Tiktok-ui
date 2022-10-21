import PropTypes from 'prop-types';
function MenuHomePage({ children }) {
    return <nav>{children}</nav>;
}

MenuHomePage.propType = {
    children: PropTypes.node.isRequired,
};

export default MenuHomePage;
