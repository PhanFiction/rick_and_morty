export default function CardContent({ character }) {
  return (
    <>
      <img src={`${character?.image}`} alt="" className='w-full opacity-90'/>
      <h2 className='text-lighterGreen font-semibold text-2xl text-center my-2'>{ character?.name }</h2>
      <div className='my-4'>
        <ul className='px-8 [&>li]:my-1 [&>li>span]:text-lightGray text-left'>
          <li><span>Gender: </span>{ character?.gender }</li>
          <li><span>Species: </span>{ character?.species }</li>
          <li><span>Location: </span>{ character.location?.name }</li>
          <li><span>Status: </span>{ character?.status }</li>
        </ul>
      </div>
    </>
  )
}
