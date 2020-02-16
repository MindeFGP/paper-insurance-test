import React, { useState } from 'react';
import './App.css';
import { useAppData } from './utils/useAppData';
import { AppLayout } from './components/appLayout/appLayout';
import { PostList } from './components/postList/postList';
import { ListOfPosts } from './models/listOfPosts/listOfPosts';

export enum ViewMode {
  PostList = "posts",
  PostDetails = "post"
}

interface AppViewModeInterface {
  viewMode: ViewMode
  postId?: number
}

const App = () => {
  const initialState: AppViewModeInterface = {
    viewMode: ViewMode.PostList
  }
  const [state, setState] = useState(initialState)

  const appData = useAppData()

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

  const listOfPosts = new ListOfPosts(appData)

  const handlePostClick = (postId: number) => {
    setState(prevState => {
      const newState = {...prevState}
      newState.viewMode = ViewMode.PostDetails
      newState.postId = postId

      return newState
    })
  }

  return (
    <AppLayout onBackButtonClick={handleBackButtonClick} viewMode={state.viewMode} >
      {state.viewMode === ViewMode.PostList && (
        <PostList listOfPosts={listOfPosts} postOnClick={handlePostClick} />
      )}
      {state.viewMode === ViewMode.PostDetails && (
        <h2>Post details</h2>
      )}
    </AppLayout>
  )
}

export default App;
