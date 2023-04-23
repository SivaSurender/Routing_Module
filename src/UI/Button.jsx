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
  const colorProvider = primary
    ? "blue"
    : secondary
    ? "emerald"
    : success
    ? "green"
    : warning
    ? "yellow"
    : "red";
  return (
    <button
      className={`${rounded && "rounded-full"} ${
        outline && "outline outline-offset-2 outline-cyan-500"
      } flex items-center px-3 py-1.5 border border-${colorProvider}-600 bg-${colorProvider}-500 text-black`}
      // className={`px-3 py-1.5 border border-yellow-600 bg-yellow-500 text-black`}
    >
      {children}
    </button>
  );
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
