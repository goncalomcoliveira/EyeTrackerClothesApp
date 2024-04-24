function BentoItemLarge({ imageSrc, textPosition, text }) {
    return (
        <div className="bento-item-background w-[416px] h-[416px] col-span-2 row-span-2"> 
            <div className="bento-item-cover"/>            
            <img src={imageSrc} alt="Bento Item Image" className="bento-item-image"/>
            {textPosition === 'left' && <p className="bento-item-text left-0 ml-8">{text}</p>}
            {textPosition === 'right' && <p className="bento-item-text right-0 mr-8">{text}</p>}
            {textPosition === 'center' && <p className="bento-item-text left-0 right-0 w-full text-center">{text}</p>}
        </div>
    )
};

export default BentoItemLarge;