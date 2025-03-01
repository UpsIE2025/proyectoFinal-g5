'use client';

import BlankCard from "@/components/blank-card";
import Breadcrumb from "@/components/bread-crumb";
import PageContainer from "@/components/page-container";
import SuspenseSkeleton from "@/components/suspense-skeleton";
import { findAllEvents } from "@/services/events.service";
import { CalendarEventType, EventType, initialEvent } from "@/types/event.type";
import { Box, CardContent, Dialog } from "@mui/material";
import moment from 'moment';
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SkeletonCalendar from "./calendar-skeleton";
import EventForm from "./form";
import './styles.css';

const localizer = momentLocalizer(moment);

const BCrumb = [
    {
        to: '/wedding/events',
        title: 'Inicio',
    },
    {
        title: 'Eventos',
    },
];

const colors = ['default', 'green', 'red', 'azure', 'warning'];

export default function EventsPage() {
    const [loading, setLoading] = useState(true);
    const [originalEvents, setOriginalEvents] = useState<any>();
    const [calevents, setCalEvents] = useState<any>();
    const [open, setOpen] = useState<boolean>(false);
    const [eventData, setEventData] = useState<EventType>(initialEvent);

    useEffect(() => {
        findAllEvents()
            .then((events) => {
                setOriginalEvents(events);
                setCalEvents(events.map((event: EventType) => ({
                    title: event.description,
                    start: new Date(event.startDate),
                    end: new Date(event.endDate),
                    color: colors[Math.floor(Math.random() * colors.length)],
                })));
            })
            .finally(() => setLoading(false));
    }, []);

    const eventColors = (event: CalendarEventType) => {
        if (event.color) {
            return { className: `event-${event.color}` };
        }

        return { className: `event-default` };
    };

    const addNewEventAlert = (slotInfo: CalendarEventType) => {
        setOpen(true);
        setEventData(initialEvent);
    };

    const handleClose = () => {
        setOpen(false);
        setLoading(true);
        findAllEvents()
            .then((events) => {
                setOriginalEvents(events);
                setCalEvents(events.map((event: EventType) => ({
                    title: event.description,
                    start: new Date(event.startDate),
                    end: new Date(event.endDate),
                    color: colors[Math.floor(Math.random() * colors.length)],
                })));
            })
            .finally(() => {
                setLoading(false);
                setEventData(initialEvent);
            });
    };

    const editEvent = (event: any) => {
        setOpen(true);
        const newEditEvent = originalEvents.find((elem: EventType) => elem.description === event.title);
        setEventData(newEditEvent);
    };

    return (
        <PageContainer>
            <Breadcrumb title="Eventos" items={BCrumb} />
            <BlankCard>
                <SuspenseSkeleton skeleton={<SkeletonCalendar />} loading={loading}>
                    <CardContent>
                        <Calendar
                            selectable
                            events={calevents}
                            defaultView="month"
                            localizer={localizer}
                            style={{ height: 'calc(100vh - 350px' }}
                            messages={{
                                next: "Sig.",
                                previous: "Ant.",
                                today: "Hoy",
                                month: "Mes",
                                week: "Semana",
                                day: "Día"
                            }}
                            eventPropGetter={(event: any) => eventColors(event)}
                            onSelectSlot={(slotInfo: any) => addNewEventAlert(slotInfo)}
                            onSelectEvent={(event) => editEvent(event)}
                        />
                    </CardContent>
                </SuspenseSkeleton>
            </BlankCard>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <Box p={2}>
                    <EventForm eventData={eventData} closeDialog={handleClose} />
                </Box>
            </Dialog>
        </PageContainer>
    );
}