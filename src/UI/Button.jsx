import PropTypes from "prop-types";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

  checkValidator: ({ primary, secondary, warning, success, danger }) => {
    const propCount =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (propCount > 1) {
      return new Error(
        "Only one of type primary, secondary , warning , success or danger can be true for one comp each"
      );
    }
  },
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
};
Button.defaultProps = {
  children: null,
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  danger: false,
};
