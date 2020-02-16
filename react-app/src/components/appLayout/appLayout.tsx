import React from "react"
import { ReactNode } from "react"

export interface AppLayoutProps {
    children: ReactNode
}

export const AppLayout = React.memo((props: AppLayoutProps) => {
    return (
        <div className="container">
            <h1>Paper Insurance Test</h1>
            {props.children}
        </div>
    )
})
