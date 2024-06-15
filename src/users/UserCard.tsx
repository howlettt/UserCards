import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { tss } from "tss-react/mui";
import { User } from "./userService";

export interface UserCardProps {
  onViewMore: (user: User) => void;
  user: User;
}

const useStyles = tss.create(({ theme }) => ({
  avatar: {
    background: theme.palette.common.white,
    height: 100,
    width: 100,
  },
  bottomContainer: {
    background: theme.palette.background.paper,
    flex: 1,
  },
  rootContainer: {
    background: theme.palette.primary.main,
    borderRadius: 10,
    boxShadow: `3px 3px 3px ${theme.palette.divider}`,
    height: 300,
    width: 200,
  },
  topContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
}));

export default function UserCard(props: UserCardProps) {
  const { classes } = useStyles();
  const fullName = `${props.user.firstname} ${props.user.lastname}`;

  return (
    <Stack className={classes.rootContainer}>
      <div className={classes.topContainer}>
        <Avatar
          alt={fullName}
          className={classes.avatar}
          src={props.user.avatar}
        />
      </div>
      <Stack
        alignItems="center"
        className={classes.bottomContainer}
        justifyContent="center"
        spacing={2}
      >
        <div>{fullName}</div>
        <Button
          onClick={(): void => {
            props.onViewMore(props.user);
          }}
          variant="contained"
        >
          View More
        </Button>
      </Stack>
    </Stack>
  );
}
