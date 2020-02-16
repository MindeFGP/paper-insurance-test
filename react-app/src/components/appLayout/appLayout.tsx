import React from "react"
import { ReactNode } from "react"
import { ViewMode } from "../../App"
import { BackButton } from "../backButton/backButton"

export interface AppLayoutProps {
    children: ReactNode
    viewMode: ViewMode
    onBackButtonClick?: () => void
}

export const AppLayout = React.memo((props: AppLayoutProps) => {
    return (
        <div className="container">
            <h1>Paper Insurance Test</h1>
            <div className="row">
                <div className="col-6">
                    {props.viewMode !== ViewMode.PostList && props.onBackButtonClick && (
                        <BackButton buttonText="Back to posts" onClick={props.onBackButtonClick} />
                    )}
                </div>
                <div className="col-6"></div>
            </div>
            {props.children}
        </div>
    )
})
