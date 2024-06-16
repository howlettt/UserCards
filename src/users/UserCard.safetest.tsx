import { render } from "safetest/react";
import { describe, it, expect } from "safetest/vitest";
import UserCard from "./UserCard";
import { User } from "./userService";

const user: User = {
  id: "id",
  username: "username",
  firstname: "firstname",
  lastname: "lastname",
  email: "email",
  avatar: "avatar",
  role: "role",
  join_date: "join_date",
  description: "description",
};

describe("Header", () => {
  it("full name renders", async () => {
    const { page } = await render(
      <UserCard
        onViewMore={(): void => {
          // Placeholder
        }}
        user={user}
      />,
    );

    await expect(page.locator("text=firstname lastname")).toBeVisible();
  });
});
