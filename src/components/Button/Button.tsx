import React, {JSX} from "react";

interface IButtonProps {
    onClick: () => void;
}

export const Button = React.memo(({ onClick }: IButtonProps): JSX.Element => {
    return (
        <button type="button" onClick={onClick}>
            get random user
        </button>
    );
});
