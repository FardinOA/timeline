import type { User, UserInfo } from "@/types";

const UserInfo = ({ id, data }: UserInfo) => {
    // console.log(data);
    const user = data?.find((el: User) => el.id == id);
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
