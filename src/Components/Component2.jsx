import { withBackground } from "../hoc/withBackground";
import { PropTypes } from "prop-types";
import { withFetch } from "../hoc/withFetch";

const Component2 = ({ color, users }) => {
  return (
    <div style={{ backgroundColor: color, padding: "30px" }}>
      <h1>Component 2</h1>
      {users.splice(-90)?.map(({ id, title }) => {
        return <p key={id}>{title}</p>;
      })}
    </div>
  );
};

const EnhancedComponent2 = withFetch(
  withBackground(Component2, "Green"),
  "https://jsonplaceholder.typicode.com/posts"
);

Component2.propTypes = {
  color: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
};

export default EnhancedComponent2;
