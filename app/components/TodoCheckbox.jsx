"use client"

export default function TodoCheckbox({id,markDone,current}) {
  return (
    <input type="checkbox" checked={current} className="checkbox" onChange={async () => {
      await markDone(current,id)
    }} />
  )
}