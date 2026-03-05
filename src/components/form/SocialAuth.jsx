function SocialAuth({name, icon}) {
  return (
    <button className="flex px-2 w-full gap-2 items-center bg-gray-400 active:bg-gray-500">
      <img src={`/src/assets/${icon}.svg`} alt={name} className="w-8"/>
      <span className="text-lg font-medium">{name}</span>
    </button>
  )
}

export default SocialAuth