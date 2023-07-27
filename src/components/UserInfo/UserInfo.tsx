import React, {FC} from "react";
import {IUser} from "../../types/IUser";

interface IUserInfoProps {
    user: IUser | null
}

export const UserInfo:FC<IUserInfoProps> = React.memo(( {user} ): React.JSX.Element | null => {
    if (!user) return null

    const {name='', phone=''} = user;

    return (
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Phone number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
            </tr>
            </tbody>
        </table>
    );
});


