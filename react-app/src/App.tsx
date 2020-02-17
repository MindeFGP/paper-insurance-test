import React, { useState } from 'react';
import './App.css';
import { useAppData } from './utils/useAppData';
import { AppLayout } from './components/appLayout/appLayout';
import { PostList } from './components/postList/postList';
import { ListOfPosts } from './models/listOfPosts/listOfPosts';
import { Post } from './components/post/post';
import { Post as PostModel } from './models/post/post';

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

  if (state.viewMode === ViewMode.PostList) {
    const listOfPostsModel = new ListOfPosts(appData)
    postListComponent = <PostList heading="All posts" listOfPostsModel={listOfPostsModel} postOnClick={handlePostClick} />
  }

  if (state.viewMode === ViewMode.PostDetails) {
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
        const postModel = new PostModel(postData, authorData, commentsData)
        postDetailsComponent = <Post postModel={postModel} viewMode={state.viewMode} />
      }
    }
  }

  return (
    <AppLayout onBackButtonClick={handleBackButtonClick} viewMode={state.viewMode} >
      {postListComponent}
      {postDetailsComponent}
    </AppLayout>
  )
}

export default App;
