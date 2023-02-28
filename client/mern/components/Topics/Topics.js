import { useState, useEffect } from "react"
import { fetchTopics } from "../../api/topics"
import Topic from "../Topics/Topic/topic.js"
import { useSelector } from "react-redux"

export default function Topics() {
  const [topics, setTopics] = useState([])
  useEffect(() => {
    const fetchTopicData = async () => {
      const response = await fetchTopics()
      const data = response.data
      console.log(data)
      setTopics(data)
    }
    fetchTopicData()
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      {topics.map((topic, index) => {
        topic.title
      })}
    </div>
  )
}
