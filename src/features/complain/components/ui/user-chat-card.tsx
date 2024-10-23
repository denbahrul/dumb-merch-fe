import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";

export default function UserChatCard() {
  return (
    <div className="flex items-center gap-6">
      <Avatar
        sx={{ bgcolor: red[500], width: 50, height: 50 }}
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="hidden md:block">
        <p>Admin</p>
        <p className="text-sm text-gray-textB">
          Yes, is there anything I can help
        </p>
      </div>
    </div>
  );
}
