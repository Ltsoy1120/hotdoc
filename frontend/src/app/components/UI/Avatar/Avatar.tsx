import React from "react"
import "./Avatar.scss"

interface IAvatarProps {
  title: string
}
const Avatar = ({ title }: IAvatarProps) => {
  return (
    <div className="avatar">
      <span className="avatar__text">{title}</span>
    </div>
  )
}

export default Avatar
