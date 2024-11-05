import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { getProfile } from "@/stores/profile/async";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import PageTitle from "../../../components/ui/page-title";
import ProfileModal from "./profile-modal";
import ProfileDetail from "./ui/profile-detail";
import { ProfileEntity } from "@/entities/user";

export default function MyProfile({ profile }: { profile: ProfileEntity }) {
  // const dispatch = useAppDispatch();
  // const { entities, loading } = useAppSelector((state) => state.profile);
  // const profile = entities;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   dispatch(getProfile());
  // }, []);

  // if (loading === "pending") {
  //   return <p>Loading</p>;
  // }

  return (
    <div className="col-span-3">
      <div className="flex items-center gap-4">
        <PageTitle title="My Profile" />
        <div
          className="mb-6 flex cursor-pointer items-center gap-1"
          onClick={handleOpen}
        >
          <CiEdit size={20} />
          <p className="text-lg">Edit profile</p>
        </div>
      </div>
      <div className="gap-8 md:flex">
        <img
          src={
            profile?.profilePhoto ??
            "https://i.pinimg.com/564x/6d/ff/25/6dff25c17a32509c01e8e3dac9a4ec4b.jpg"
          }
          alt="Profile Photo"
          className="m-auto h-64 w-64 rounded-full object-cover md:min-h-[480px] md:min-w-[50%] md:rounded-md"
        />
        <div className="mt-4 flex w-full flex-col gap-6 md:mt-0">
          <ProfileDetail title="Name" content={profile!.fullName} />
          <ProfileDetail
            title="Username"
            content={`@${profile!.user?.username}`}
          />
          <ProfileDetail title="Email" content={profile!.user?.email} />
          <ProfileDetail title="Phone" content={profile!.phone! ?? "-"} />
          <ProfileDetail title="Gender" content={profile?.gender ?? "-"} />
          <ProfileDetail title="Address" content={profile!.address! ?? "-"} />
        </div>
      </div>

      <ProfileModal handleClose={handleClose} open={open} />
    </div>
  );
}
