export interface ReservationForm {
    name: string;
    pax: string;
    time: string;
    day: string;
}

export interface SectionProps {
    onOpenModal: () => void;
}