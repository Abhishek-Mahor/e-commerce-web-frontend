


const Banner = ({ classname = '', imagesrc = '',imageClass='', textclassName = '', text = '' }) => {
  return (
    <div
      className={`w-full overflow-hidden border border-none ${classname}`}
    > <img src={imagesrc} alt="" className={imageClass} />
      <h1 className={textclassName}>{text}</h1>
    </div>
  )
}

export default Banner