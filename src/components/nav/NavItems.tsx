/**
 * Interface for all Nav Items
 */
export interface INavItem {
    title: string;
    position: number;
}

/**
 * List of Nav Items to be displayed in <nav> bar
 */
export const NavItems: INavItem[] = [
    {
        title: 'Announcement',
        position: 0
    },
    {
        title: 'Photos',
        position: 1
    },
    {
        title: 'Bridesmaids',
        position: 2
    },
    {
        title: 'Groomsmen',
        position: 3
    },
    {
        title: 'Venue',
        position: 4
    },
    {
        title: 'Registry',
        position: 5
    },
    {
        title: 'RSVP',
        position: 6
    }
];
