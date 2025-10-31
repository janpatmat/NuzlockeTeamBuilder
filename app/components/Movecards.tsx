import React from 'react'
interface MovecardsProps {
name?: string;
type?: string;
}
const Movecards: React.FC<MovecardsProps> = ({name, type}) => {
  return (
    <div className='flex justify-between bg-gray-400 p-2 rounded-xl border-2 border-black m-2'>
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  )
}

export default Movecards