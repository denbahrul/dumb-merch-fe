import PageTitle from "../../../components/ui/page-title";
import ProfileDetail from "./ui/profile-detail";

export default function MyProfile() {
  return (
    <div className="col-span-3">
      <PageTitle title="My Profile" />
      <div className="flex gap-8">
        <img
          //   src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile Photo"
          className="w-[50%] rounded-md object-cover"
        />
        <div className="flex flex-col justify-between gap-4">
          <ProfileDetail title="Name" content="Yosep Muhammad" />
          <ProfileDetail title="Email" content="yosepgans@gmail.com" />
          <ProfileDetail title="Phone" content="083896833122" />
          <ProfileDetail title="Gender" content="Male" />
          <ProfileDetail
            title="Address"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
        </div>
      </div>
    </div>
  );
}
