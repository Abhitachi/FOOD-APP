import { IMG_CDN_URL } from "../utils/constant";


const RestaurantCard = ({name,cloudinaryImageId,cuisines,areaName,lastMileTravelString,costForTwo,avgRatingString,sla,width}) => {
    
  return(
      <div className="m-4 p-4 w-auto gap-2 rounded-md  flex-col overflow-hidden relative md:w-[256px]">
      <div className="shadow-lg z-10 "><img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-md h-48 object-cover" loading="lazy" /></div>
      <div className="flex flex-col md:mt-2">
      <h3 className="font-bold text-nowrap text-lg ">{name}</h3>
      <h5 className="font-light break-words text-base text-nowrap ">{cuisines.length <= 5 ?cuisines.join(", ") :cuisines.slice(0 , 5).join(",")+"..."}</h5>
      <h5 className="text-lg">{areaName}</h5>
      </div>
      <div className="flex justify-between items-center mt-2 bottom-2 gap-[10px]">
      <span className="flex items-center">
          <i className="fa-solid fa-star bg-green-400 py-1 px-1 rounded-full text-white"></i>&nbsp;
          <span className="font-semibold text-black">{avgRatingString}</span>
        </span>
        <span className="font-semibold">{sla?.lastMileTravelString ?? '2.0 km'}</span>
        <span className="font-semibold">{costForTwo ?? '₹200 for two'}</span>
      </div>
    </div>

    )
}

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  /* returning component (anonymous component)*/
  return (props) => {
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}