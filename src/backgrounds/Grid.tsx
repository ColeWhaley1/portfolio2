import React from "react";
import "./Grid.css"

interface GridProps {
    children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({children}) => {
  return (
    <div className="container -z-10 min-w-full min-h-full">
        {
            children
        }
    </div>
  )
}

export default Grid;