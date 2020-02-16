import React from "react"

export interface BackButtonProps {
    buttonText: string
    onClick: () => void
}

export const BackButton = React.memo((props: BackButtonProps) => {
    return (
        <p onClick={props.onClick}>
            <i className="back-arrow"></i>
            <span className="back-button-text">{props.buttonText}</span>
        </p>
    )
})
