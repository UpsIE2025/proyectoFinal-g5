export interface EventType {
    customerId: number;
    receptionId: number;
    description: string;
    capacity: number;
    startDate: Date;
    endDate: Date;
    status: string;
}

export const initialEvent: EventType = {
    customerId: 0,
    receptionId: 0,
    description: ' ',
    capacity: 0,
    startDate: new Date(),
    endDate: new Date(),
    status: ''
};

export interface CalendarEventType {
    title?: string;
    allDay?: boolean;
    start?: Date;
    end?: Date;
    color?: string;
}
