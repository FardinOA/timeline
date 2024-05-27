import type { UserInfo } from "@/types";

const getUserInfo = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!res.ok) {
        // handle error
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

const UserInfo = async ({ id }: UserInfo) => {
    const data = await getUserInfo();
    const user = data?.find((el: any) => el.id == id);
    // console.log(user);

    return (
        <div className="flex items-center gap-2">
            <div className=" size-[42px] rounded-full bg-primary  "></div>
            <div>
                <p className="font-semibold text-base lg:text-lg text-[#4A4B67] ">
                    {user?.name}
                </p>
            </div>
        </div>
    );
};

export default UserInfo;
