import React from "react";
import { DiGithubBadge } from "react-icons/di";
import UserProfilePicture from "../../images/people/user.jpeg";

interface UserDetailsProps {}

const UserDetails: React.FC<UserDetailsProps> = () => {
  return (
    <div
      className="userDetails w-full h-20
                      flex items-center"
    >
      <div
        className="Image h-full w-auto
                        flex items-center justify-center mr-4"
      >
        <img
          src={UserProfilePicture}
          alt="GitHub Profile"
          className="rounded-full border-4 border-color-secondary w-10 h-10"
        />
      </div>
      <div className="UserName flex flex-col justify-center items-start">
        <p
          className="text-md tracking-tighter font-semibold
         text-color-extra"
        >
          Shravan_Karnati
        </p>
        <div className="gitHub flex items-center justify-between w-full text-color-gray">
          <DiGithubBadge className="w-5 h-5 fill-current" />
          <a
            className="text-sm tracking-tighter hover:underline"
            href="https://github.com/Shravankumarkarnati"
            target="blank"
            rel="noreferrer"
          >
            ShravanKumarKarnati
          </a>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
