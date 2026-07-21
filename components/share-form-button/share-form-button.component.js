'use client';

import { useFormStatus } from 'react-dom';

import styles from './share-form-button.module.css'

export default function ShareFormButton() {
  const { pending } = useFormStatus()

  return (
    <p className={styles.actions} disabled={pending}>
      <button type="submit">{pending ?  'Submitting...' : 'Share Meal'}</button>
    </p>
  )
}