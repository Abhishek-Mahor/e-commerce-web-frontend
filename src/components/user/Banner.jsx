


const Banner = ({ classname = '', imagesrc = '', textclassName = '', text = '' }) => {
  return (
    <div
      className={`w-full overflow-hidden border border-none ${classname}`}
      style={{
        backgroundImage: imagesrc ? `url(${imagesrc})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '380px',
      }}
    >
      <h1 className={textclassName}>{text}</h1>
    </div>
  )
}

export default Banner