import React, { useRef } from 'react'

interface IProps {
  leftNode: React.ReactNode
  rightNode: React.ReactNode
}

export const BaseLayout: React.FC<IProps> = ({ leftNode, rightNode }) => {
  const $aside = useRef<HTMLElement>()

  return (
    <div>
      <div>
        <section> {leftNode}</section>
        <aside ref={$aside}> {rightNode} </aside>
      </div>
    </div>
  )
}
