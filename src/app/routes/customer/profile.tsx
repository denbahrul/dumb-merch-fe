import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import MyProfile from "../../../features/profile/components/my-profile";
import MyTransaction from "../../../features/profile/components/my-transaction";
import { useEffect } from "react";
import { getProfile } from "@/stores/profile/async";

function ProfilePage() {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.profile);
  const profile = entities;

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (loading === "pending") {
    return <p>Loading...</p>;
  }

  return (
    <div className="gap-4 p-8 lg:grid lg:grid-cols-5">
      <MyProfile profile={profile!} />
      <MyTransaction orders={profile?.user?.order!} />
    </div>
  );
}

export default ProfilePage;
