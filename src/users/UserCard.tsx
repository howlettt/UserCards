import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { tss } from "tss-react/mui";
import { User } from "./userService";

export interface UserCardProps {
  onViewMore: (user: User) => void;
  user: User;
}

const useStyles = tss.create(({ theme }) => ({
  avatar: {
    background: theme.palette.grey[200],
    border: `3px solid ${theme.palette.primary.main}`,
    height: 100,
    width: 100,
  },
  avatarContainer: {
    background: theme.palette.common.white,
    borderRadius: "50%",
    padding: 2,
  },
  bottomContainer: {
    background: theme.palette.common.white,
    borderRadius: "0 20px 20px 20px",
    flex: 1,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  name: {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  rightBackground: {
    background: theme.palette.primary.main,
    position: "absolute",
    height: "50%",
    right: 0,
    top: "25%",
    width: "25%",
    zIndex: -1,
  },
  rootContainer: {
    borderRadius: 20,
    boxShadow: `${theme.palette.divider} 0px 2px 8px 0px`,
    height: 300,
    position: "relative",
    width: 200,
  },
  topContainer: {
    alignItems: "center",
    background: theme.palette.primary.main,
    borderRadius: "20px 20px 0 20px",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  viewMore: {
    textTransform: "none",
  },
}));

export function UserCardSkeleton(): JSX.Element {
  return <Skeleton height={300} variant="rectangular" width={200} />;
}

export default function UserCard(props: UserCardProps) {
  const { classes } = useStyles();
  const fullName = `${props.user.firstname} ${props.user.lastname}`;

  return (
    <Stack className={classes.rootContainer}>
      <div className={classes.rightBackground} />
      <div className={classes.topContainer}>
        <div className={classes.avatarContainer}>
          <Avatar
            alt={fullName}
            className={classes.avatar}
            src={props.user.avatar}
          />
        </div>
      </div>
      <Stack
        alignItems="center"
        className={classes.bottomContainer}
        justifyContent="center"
        spacing={2}
      >
        <Typography className={classes.name} variant="subtitle2">
          {fullName}
        </Typography>
        <Button
          disableElevation
          className={classes.viewMore}
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
