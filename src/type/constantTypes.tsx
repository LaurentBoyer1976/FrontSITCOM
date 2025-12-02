export interface HardwareType{
    id: number;
    name: string;
}
export interface Manufacturer{
    id: number;
    name: string;
}
export interface Customer{
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
}
export interface BuyingDetails{
    id: number;
    customer: Customer;
    purchaseDate: Date;
    warrantyPeriod: string;
    price: number;
    hardware: Hardware;
    quantity: number;
}
export interface Hardware{
    id: number;
    manufacturer: Manufacturer;
    type: HardwareType;
    model: string;
    serialNumber: string;
}
export interface ReturnedHardwareReason{
    id: number;
    reason: string;
}
export interface returnedHardwareUnit{
    id: number;
    hardware: Hardware;
    customer: Customer;
    buyingDetails: BuyingDetails;
    returnDate: Date;
    reason: ReturnedHardwareReason;
}
export interface StatusType{
    id: number;
    status: string;
}
export interface ReturnedHardwareStock{
    id: number;
    status: StatusType;
    returnedItems: returnedHardwareUnit[];
    location: string;
}
