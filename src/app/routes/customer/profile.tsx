import MyProfile from "../../../features/profile/components/my-profile";
import MyTransaction from "../../../features/profile/components/my-transaction";

function ProfilePage() {
  return (
    <div className="grid grid-cols-5 gap-4 p-8">
      <MyProfile />
      <MyTransaction />
    </div>
  );
}

export default ProfilePage;
