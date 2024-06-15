import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { User } from "./userService";

interface UserDetailsProps {
  onClose: () => void;
  user: User | null;
}

export default function UserDetails(props: UserDetailsProps) {
  return (
    <Dialog onClose={props.onClose} open={props.user !== null}>
      <DialogTitle>TODO</DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
}
