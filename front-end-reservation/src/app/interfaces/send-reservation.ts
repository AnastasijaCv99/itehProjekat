import { MenuItems } from "./menu-items";

export interface SendReservation {
    cafe_id: number,
    table_id: number,
    price: number,
    menuItems: MenuItems[],
}
