import { useEffect, useState } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;

  prompt(): Promise<void>;
}

export interface Options {
  acceptedFn?: () => void;
  dismissedFn?: () => void;
  installedFn?: () => void;
}

export interface ReturnType {
  isInstalled: boolean;
  addToHomeScreen: () => Promise<false | void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}
const useBeforeInstallPrompt = (options?: Options): ReturnType => {
  const {
    acceptedFn = () => console.log('User accepted the A2HS prompt'),
    dismissedFn = () => console.log('User dismissed the A2HS prompt'),
    installedFn = () => console.log('Already installed'),
  } = { ...options };
  const [beforeInstallPromptEvent, setBeforeInstallPromptEvent] = useState<BeforeInstallPromptEvent>();
  const [isInstalled, setIsInstalled] = useState(false);

  const addToHomeScreen = async () => {
    if (!beforeInstallPromptEvent) return false;

    beforeInstallPromptEvent.prompt();

    const { outcome } = await beforeInstallPromptEvent.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
      acceptedFn();
    } else {
      dismissedFn();
    }
  };

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setBeforeInstallPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    if (!beforeInstallPromptEvent) {
      setIsInstalled(true);
      installedFn();
    } else {
      setIsInstalled(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, [installedFn]);

  useEffect(() => {
    const handler = () => {
      setIsInstalled(true);
      // For apply setIsInstalled(true) when install and popup new pwa
      window.location.reload();
    };

    window.addEventListener('appinstalled', handler);

    return () => {
      window.removeEventListener('appinstalled', handler);
    };
  }, []);

  return { isInstalled, addToHomeScreen };
};

export default useBeforeInstallPrompt;
