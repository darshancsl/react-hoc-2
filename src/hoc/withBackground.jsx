export const withBackground = (Component, color) => {
  return function HocBackground(props) {
    return <Component {...props} color={color} />;
  };
};
