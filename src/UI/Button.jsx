import PropTypes from "prop-types";
function Button({
  children,
  primary = false,
  secondary = false,
  success = false,
  warning = false,
  danger = false,
  outline = false,
  rounded = false,
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
      return new Error("Invalid prop type supplied");
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
