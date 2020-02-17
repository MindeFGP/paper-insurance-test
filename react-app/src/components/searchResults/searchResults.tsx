import React, { useState, useEffect } from "react"
import { AppDataInterface } from "../../utils/useAppData"
import { ListOfPosts } from "../../models/listOfPosts/listOfPosts"
import { PostList } from "../postList/postList"
import { getPostIdsForQuery, getCommentIdsForQuery } from "../../utils/getAppData"
import { ViewMode } from "../../App"

export interface SearchResultsProps {
    appData: AppDataInterface,
    queryValue: string
    postOnClick: (postId: number) => void
}

export interface SearchResultsInterface {
    listOfPostIds: number[]
    listOfCommentIds: number[]
}

export const SearchResults = React.memo((props: SearchResultsProps) => {
    const initialState: SearchResultsInterface = {
        listOfPostIds: [],
        listOfCommentIds: []
    }
    const [ state, setState ] = useState(initialState)

    const listOfPostsModel = new ListOfPosts(props.appData)

    useEffect(() => {
        getPostIdsForQuery(props.queryValue, (result: number[]) => {
            setState(prevState => {
                const newState = {...prevState}
                newState.listOfPostIds = result
    
                return newState
            })
        })
    
        getCommentIdsForQuery(props.queryValue, (result: number[]) => {
            setState(prevState => {
                const newState = {...prevState}
                newState.listOfCommentIds = result
    
                return newState
            })
        })
    }, [ props.queryValue ])

    listOfPostsModel.filterOutForQueryResults(state.listOfPostIds, state.listOfCommentIds)

    return (
        <PostList heading="Search results" viewMode={ViewMode.SearchResults} listOfPostsModel={listOfPostsModel} postOnClick={props.postOnClick} />
    )
})
