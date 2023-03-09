import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Post from "./Post/post.js"
import { useStyles } from "./Post/styles"

import styles from "../Posts/Posts.module.css"
import { getPostsAsync } from "../../reducers/postSlice.js"

function useCountdown(deadline) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadline))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [deadline])

  return timeLeft
}

function getTimeLeft(deadline) {
  const difference = new Date(deadline) - new Date()
  const seconds = Math.floor((difference / 1000) % 60)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const hours = Math.floor((difference / 1000 / 60 / 60) % 24)
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)

  return {
    seconds,
    minutes,
    hours,
    days
  }
}

export default function Posts({}) {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPostsAsync())
  }, [dispatch])

  const [isAddingPost, setIsAddingPost] = useState(false)
  useEffect(() => {
    if (isAddingPost) {
      dispatch(getPostsAsync())
      setIsAddingPost(false)
    }
  }, [dispatch, isAddingPost])
  console.log(posts)
  const timeLeft = useCountdown("2023-04-14T05:00:00.000Z")
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <div>
          <Post key={post._id} post={post} />
        </div>
      ))}
      <div>
        <p>
          {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
          minutes, {timeLeft.seconds} seconds left
        </p>
      </div>
    </div>
  )
}
