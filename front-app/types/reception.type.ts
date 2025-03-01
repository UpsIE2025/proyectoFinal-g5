export interface ReceptionType {
    id: number;
    title: string;
    phone: string;
    email: string;
    address: string;
    price: number;
}

export const initialReception: ReceptionType = {
    id: 0,
    title: '',
    phone: '',
    email: '',
    address: '',
    price: 0.0,
};
