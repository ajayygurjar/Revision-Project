import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
