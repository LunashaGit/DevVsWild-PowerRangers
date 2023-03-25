export default function ResultsList(props) {

    function distance(lat1, lat2, lon1, lon2) {
        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2),2);

        let c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 3956;

        // calculate the result
        return(Math.trunc(c * r));
    }


    return (
        <div className="px-3 max-h-[520px]">
            {props.results && props.results.map((result, key) => {
                return (
                    <div key={key} className="flex mx-auto items-center justify-between mt-10 w-[90%] border-b-2 pb-2">
                        <div className="font-bold text-[16px]">{distance(props.startCoords.lat, result.properties.lat, props.startCoords.lon, result.properties.lon)} km</div>
                        <div className="flex flex-col min-w-[200px] max-w-[200px]">
                            <p className="text-[16px]">{result.properties.address_line1}</p>
                            <p className="text-[12px]">{result.properties.formatted}</p>
                        </div>
                        <div className="flex items-center">
                            <span className="pr-2">5</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#E65728]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}