import { CLINIC_ID } from '../api/api';

export const getDefaultHeaders = () => ({
  'Content-Type': 'application/json',
  'X-Clinic-ID': CLINIC_ID,
});
