import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'registration_success':
          NotificationManager.success('You can log in know!', 'Registration success', 3000);
          break;
        case 'other_error':
          NotificationManager.warning('Error', 'Sorry something went wrong', 3000);
          break;
        case 'registration_error':
          NotificationManager.error('Error','Your Username or Password is incorrect. Please try again.', 5000);
          break;
      }
    };

}
