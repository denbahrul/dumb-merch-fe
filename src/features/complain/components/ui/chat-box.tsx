import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";

export function OtherChat() {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        sx={{ bgcolor: red[500], width: 50, height: 50 }}
        alt="Remy Sharp"
        src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="h-fit w-fit rounded-r-lg rounded-t-lg bg-background-teritery px-4 py-2">
        <p className="font-extralight">Yes, is there anything I can help</p>
      </div>
    </div>
  );
}
export function MyChat() {
  return (
    <div className="flex justify-end">
      <div className="h-fit w-fit rounded-l-lg rounded-t-lg bg-background-quaternary px-4 py-2">
        <p className="font-extralight">Hello Admin, I Need Your Help</p>
      </div>
    </div>
  );
}
