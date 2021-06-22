import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boardList/BoardList";

export const UserProfilePage = () => {

  const localStorageUser = JSON.parse(localStorage.getItem('user'));

  console.log(localStorageUser)


  return (
    <>
      <UserCard
        avatar={localStorageUser?.avatar}
        userName={localStorageUser?.username}
        followingCount={localStorageUser?.following && localStorageUser?.following.length}
        fullName={`${localStorageUser?.firstName} ${localStorageUser?.lastName}`}
      />
      <BoardList />
    </>
  );
};

export default UserProfilePage;
