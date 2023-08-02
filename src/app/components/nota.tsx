type Props = {
    rate:number;

}


export const Emoji = ({ rate }: Props) => {
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;

    const rateInt = Math.floor(rate);
    


        return (
            <div className="flex items-center text-6xl">
               <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
               <div className="ml-3">
                {rateInt <= 1 && '🥲' }
                {rateInt > 2 && rateInt < 3 && '😓😓' }
                {rateInt >= 3 && rateInt < 4 && '😐😐😐' }
                {rateInt >=4 && rateInt < 5 && '🙂🙂🙂🙂' }
                {rateInt >= 5 && '😁😁😁😁😁' }
               
               </div>
            </div>
    
        )

  
  
}