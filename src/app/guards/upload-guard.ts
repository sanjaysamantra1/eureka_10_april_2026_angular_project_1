import { inject } from '@angular/core';
import { UserInformationService } from './../services/user-information-service';
import { CanActivateFn } from '@angular/router';

export const uploadGuard: CanActivateFn = (route, state) => {
  let userInformationService = inject(UserInformationService);

  if (userInformationService.getUserRole() === 'trainer') {
    return true;
  } else {
    alert('You Dont have access to this page');
    return false;
  }
};
