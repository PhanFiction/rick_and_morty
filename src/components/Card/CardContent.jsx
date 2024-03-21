export default function CardContent({ character }) {
  return (
    <div className="flex flex-wrap">
      <img src={`${character?.image}`} alt="img" className='opacity-90 w-full'/>
      <div className='my-4'>
        <h2 className='text-lighterGreen font-semibold text-2xl text-center my-2'>{ character?.name }</h2>
        <ul className='px-8 [&>li]:my-1 [&>li>span]:text-lightGray text-left'>
          <li><span>Gender: </span>{ character?.gender }</li>
          <li><span>Species: </span>{ character?.species }</li>
          <li><span>Location: </span>{ character.location?.name }</li>
          <li><span>Status: </span>{ character?.status }</li>
        </ul>
      </div>

    </div>
  )
}
