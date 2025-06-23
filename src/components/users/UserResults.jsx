import { useContext } from "react";
import UserItem from "./UserItem.jsx";
import Spinner from "../layout/Spinner.jsx";
import GithubContext from "../../context/github/GithubContext.jsx";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }

  return <Spinner />;
}

export default UserResults;
