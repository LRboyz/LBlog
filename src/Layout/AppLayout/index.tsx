import React, { useContext, useMemo, useEffect } from 'react'

interface IProps {}

export const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <main> {children} </main>
    </div>
  )
}
