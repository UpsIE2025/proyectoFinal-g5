export interface CustomerType {
    id: number;
    fullName: string;
    idNumber: string;
    phone: string;
    email: string;
    address: string;
}

export const initialCustomer: CustomerType = {
    id: 0,
    fullName: '',
    idNumber: '',
    phone: '',
    email: '',
    address: '',
};
