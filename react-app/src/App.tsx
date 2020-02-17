import React, { useState } from 'react';
import './App.css';
import { useAppData } from './utils/useAppData';
import { AppLayout } from './components/appLayout/appLayout';
import { PostList } from './components/postList/postList';
import { ListOfPosts } from './models/listOfPosts/listOfPosts';
import { Post } from './components/post/post';
import { Post as PostModel } from './models/post/post';
import { postCommentToServer } from './utils/postToServer';
import { User } from './models/user/user';
import { SearchResults } from './components/searchResults/searchResults';

export enum ViewMode {
  PostList = "posts",
  PostDetails = "post",
  SearchResults = "search"
}

interface AppViewModeInterface {
  refreshCounter: number
  viewMode: ViewMode
  postId?: number
  queryValue?: string
}

const App = () => {
  const initialState: AppViewModeInterface = {
    refreshCounter: 0,
    viewMode: ViewMode.PostList
  }
  const [state, setState] = useState(initialState)

  const appData = useAppData(state.refreshCounter)

  if (!appData.areUsersLoaded || !appData.arePostsLoaded || !appData.areCommentsLoaded) {
    return null
  }

  const handleBackButtonClick = () => {
    setState(prevState => {
      const newState = {...prevState}
      newState.viewMode = ViewMode.PostList

      return newState
    })
  }

  const handleSearchSubmit = (queryValue: string) => {
    setState(prevState => {
      const newState = {...prevState}
      newState.viewMode = ViewMode.SearchResults
      newState.queryValue = queryValue

      return newState
    })
  }

  const handlePostClick = (postId: number) => {
    setState(prevState => {
      const newState = {...prevState}
      newState.viewMode = ViewMode.PostDetails
      newState.postId = postId

      return newState
    })
  }

  let postListComponent
  let postDetailsComponent
  let searchResultsComponent

  if (state.viewMode === ViewMode.PostList) {
    const listOfPostsModel = new ListOfPosts(appData)
    postListComponent = <PostList heading="All posts" listOfPostsModel={listOfPostsModel} postOnClick={handlePostClick} />
  }

  if (state.viewMode === ViewMode.PostDetails && state.postId) {
    const postData = appData.posts.find(post => {
      return post.id === state.postId
    })
    if (postData) {
      const authorData = appData.users.find(userData => {
        return userData.id === postData.userId
      })
      const commentsData = appData.comments.filter(commentData => {
        return commentData.postId === postData.id
      })

      if (authorData) {
        const handleCommentSubmit = (value: string) => {
          const hardcodedUserData = appData.users[0]
          if (hardcodedUserData && state.postId) {
            const hardcodedUser = new User(hardcodedUserData)
            postCommentToServer(hardcodedUser, state.postId, value, () => {
              setState(prevState => {
                const newState = {...prevState}
                newState.refreshCounter += 1

                return newState
              })
            })
          }
        }

        const postModel = new PostModel(postData, authorData, commentsData)
        postDetailsComponent = <Post postModel={postModel} viewMode={state.viewMode} onCommentSubmit={handleCommentSubmit}/>
      }
    }
  }

  if (state.viewMode === ViewMode.SearchResults && state.queryValue) {
    searchResultsComponent = <SearchResults appData={appData} queryValue={state.queryValue} postOnClick={handlePostClick} />
  }

  return (
    <AppLayout onBackButtonClick={handleBackButtonClick} viewMode={state.viewMode} onSearchSubmit={handleSearchSubmit} >
      {postListComponent}
      {postDetailsComponent}
      {searchResultsComponent}
    </AppLayout>
  )
}

export default App;
