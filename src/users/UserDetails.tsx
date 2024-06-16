import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { tss } from "tss-react/mui";
import { User } from "./userService";

interface UserDetailsProps {
  onClose: () => void;
  user: User | null;
}

const useStyles = tss.create(() => ({
  image: {
    objectFit: "contain",
    objectPosition: "left top",
    width: 100,
  },
  rightContainer: {
    flex: 1,
  },
}));

export default function UserDetails(props: UserDetailsProps) {
  const { classes } = useStyles();

  return (
    <Dialog onClose={props.onClose} open={props.user !== null}>
      {props.user ? (
        <>
          <DialogTitle>{`${props.user.firstname} ${props.user.lastname}`}</DialogTitle>
          <DialogContent>
            <Stack direction="row" spacing={2}>
              <img className={classes.image} src={props.user.avatar} />
              <Stack className={classes.rightContainer} spacing={2}>
                <div>Role: {props.user.role}</div>
                <div>Joined: {props.user.join_date}</div>
                <div>{props.user.description}</div>
              </Stack>
            </Stack>
          </DialogContent>
        </>
      ) : null}
      <DialogActions>
        <Button onClick={props.onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
