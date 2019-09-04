import * as React from "react"
import { Link } from 'react-router-dom';
import { AppLayout } from 'layout';
import { routesLinks } from 'core';
import { HotelEditContainer } from "pods/hotel-edit";

export const HotelEditScene = () =>
 <AppLayout>
    <HotelEditContainer />
 </AppLayout>