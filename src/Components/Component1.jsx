import { withBackground } from "../hoc/withBackground";
import { PropTypes } from "prop-types";
import { withFetch } from "../hoc/withFetch";

const Component1 = ({ color, users }) => {
  return (
    <div style={{ backgroundColor: color, padding: "30px" }}>
      <h1>Component 1</h1>
      {users?.map(({ id, name }) => {
        return <p key={id}>{name}</p>;
      })}
    </div>
  );
};

const EnhancedComponent1 = withFetch(
  withBackground(Component1, "#313131"),
  "https://jsonplaceholder.typicode.com/users"
);

Component1.propTypes = {
  color: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
};
export default EnhancedComponent1;
