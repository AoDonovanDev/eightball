

const Eightball = ({color, msg}) => {
  return (
    <div className={`Eightball ${color}`} >
    {msg}
    </div>
  )
}

export {Eightball}