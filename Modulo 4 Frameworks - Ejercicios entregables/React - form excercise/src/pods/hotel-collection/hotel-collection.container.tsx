import * as React from "react"
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from './hotel-collection.vm';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper';
import { getHotelCollection } from './hotel-collection.api';
import { routesLinks } from "core";
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {}

export const HotelCollectionContainerInner = (props : Props) => {
    const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([])

    const editHotel = (hotelId : string) => {      
        props.history.push(routesLinks.hotelEdit(hotelId));
    }

    React.useEffect(() => {
        getHotelCollection().then((result) => {
            const HotelCollecionVm = mapFromApiCollectionToVmCollection(result);
            setHotelCollection(HotelCollecionVm);
    })} ,[])

    return <HotelCollectionComponent hotelCollection={hotelCollection} editHotel={editHotel}/>
    
}

export const HotelCollectionContainer = withRouter<Props, any>(HotelCollectionContainerInner);