import MyProfile from "../../../features/profile/components/my-profile";
import MyTransaction from "../../../features/profile/components/my-transaction";

function ProfilePage() {
  return (
    <div className="gap-4 p-8 lg:grid lg:grid-cols-5">
      <MyProfile />
      <MyTransaction />
    </div>
  );
}

export default ProfilePage;
