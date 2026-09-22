export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  isNew: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "Notification title",
    description: "This is a sample notification for demonstration purposes.",
    time: "Just now",
    icon: "info",
    isNew: true,
  },
];

/**
 * Returns a static list of mock notifications for layout demonstration.
 */
export const useNotificationsData = () => {
  return {
    notifications: MOCK_NOTIFICATIONS,
    isLoading: false,
    error: null,
  };
};
