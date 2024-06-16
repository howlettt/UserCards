import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { tss } from "tss-react/mui";
import UserList from "./users/UserList";

const useStyles = tss.create(({ theme }) => ({
  rootContainer: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.rootContainer}>
      <CssBaseline />
      <UserList />
    </div>
  );
}
