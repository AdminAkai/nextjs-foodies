'use client';

import { useFormStatus } from 'react-dom';

import styles from './share-form-button.module.css'

const ShareFormButton = () => {
  const { pending } = useFormStatus()

  return (
    <p className={styles.actions} disabled={pending}>
      <button type="submit">{pending ?  'Submitting...' : 'Share Meal'}</button>
    </p>
  )
}

export default ShareFormButton