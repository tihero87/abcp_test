import React, {JSX} from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
}

export const Button = React.memo(({ onClick }: IButtonProps): JSX.Element => (
    <button type="button" onClick={onClick}>
            get random user
    </button>)
);
