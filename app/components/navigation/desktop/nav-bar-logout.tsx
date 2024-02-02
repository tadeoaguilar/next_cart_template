import { signOut } from "@/auth";
export const NavBarLogout = () => {
  return (
    <>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-next-700 p-3 text-sm">
            <div>logout </div>
          </button>
        </form>
      </div>
    </>
  );
};
