import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import usePagedData from "../shared/usePagedData";
import useRequestManager from "../shared/useRequestManager";
import UserCard from "./UserCard";
import UserDetails from "./UserDetails";
import userService, { User } from "./userService";

export default function UserList() {
  const requestManager = useRequestManager();
  const [users, setUsers] = useState<User[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const pagedUsers = usePagedData({ items: users ?? [], itemsPerPage: 5 });

  useEffect(() => {
    userService
      .getUsers(requestManager.newRequest().params)
      .then((result) => {
        result.sort((a, b) =>
          `${a.firstname} ${a.lastname}`.localeCompare(
            `${b.firstname} ${b.lastname}`,
          ),
        );
        setUsers(result);
      })
      .catch(() => {
        // TODO display error message
      });
  }, [requestManager]);

  return (
    <Stack alignItems="center" spacing={2}>
      <Stack direction="row" spacing={2}>
        {pagedUsers.filterdItems.map((user) => (
          <UserCard key={user.id} onViewMore={setSelectedUser} user={user} />
        ))}
      </Stack>
      <Pagination
        count={pagedUsers.numberOfPages}
        onChange={(_, p): void => {
          pagedUsers.setCurrentPage(p - 1);
        }}
        page={pagedUsers.currentPage + 1}
      />
      <UserDetails
        onClose={(): void => {
          setSelectedUser(null);
        }}
        user={selectedUser}
      />
    </Stack>
  );
}
