import { useEffect, useCallback } from 'react';
import { useAppStore } from './useAppStore';

/**
 * Hook de gestion des notifications (Web Notifications API / Capacitor)
 * Gère la demande de permission, la planification et le test des notifications.
 */
export function useNotifications() {
  const { notificationsEnabled, notificationTime, setNotificationPrefs } = useAppStore() as any;

  const isSupported = typeof window !== 'undefined' && 'Notification' in window;

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!isSupported) return false;
    if (Notification.permission === 'granted') return true;
    const result = await Notification.requestPermission();
    return result === 'granted';
  }, [isSupported]);

  const sendNotification = useCallback((title: string, body: string) => {
    if (!isSupported || Notification.permission !== 'granted') return;
    const n = new Notification(title, {
      body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: 'anthoria-reminder',
    });
    // Fermer après 8s
    setTimeout(() => n.close(), 8000);
  }, [isSupported]);

  const testNotification = useCallback(async () => {
    const granted = await requestPermission();
    if (granted) {
      sendNotification(
        '📚 Rappel Anthoria',
        "C'est l'heure de réviser ! Votre objectif du jour vous attend."
      );
    }
  }, [requestPermission, sendNotification]);

  /**
   * Planifie la notification quotidienne en calculant le délai
   * jusqu'à l'heure choisie par l'utilisateur.
   */
  useEffect(() => {
    if (!notificationsEnabled || !notificationTime || !isSupported) return;
    if (Notification.permission !== 'granted') return;

    const [hours, minutes] = (notificationTime as string).split(':').map(Number);

    const scheduleNext = () => {
      const now = new Date();
      const next = new Date();
      next.setHours(hours, minutes, 0, 0);
      if (next <= now) {
        next.setDate(next.getDate() + 1);
      }
      const delay = next.getTime() - now.getTime();

      return setTimeout(() => {
        sendNotification(
          '📚 Heure de révision !',
          "N'oubliez pas votre session Anthoria aujourd'hui. Maintenez votre streak !"
        );
        // Re-planifier pour le lendemain
        scheduleNext();
      }, delay);
    };

    const timer = scheduleNext();
    return () => clearTimeout(timer);
  }, [notificationsEnabled, notificationTime, isSupported, sendNotification]);

  return {
    isSupported,
    permission: isSupported ? Notification.permission : 'denied',
    requestPermission,
    testNotification,
    notificationsEnabled,
    notificationTime,
    setNotificationPrefs,
  };
}
