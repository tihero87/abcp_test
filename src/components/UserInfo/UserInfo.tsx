import React, {FC} from "react";
import {IUser} from "../../types/IUser";

interface IUserInfoProps {
    user: IUser
}

export const UserInfo:FC<IUserInfoProps> = React.memo(( {user ={}} ): React.JSX.Element | null => {
    if (!Object.keys(user)?.length) return null

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


