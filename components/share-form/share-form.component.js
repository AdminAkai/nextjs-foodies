'use client';

import { useActionState } from 'react';

import ImagePicker from "../image-picker"
import ShareFormButton from "../share-form-button"

import { shareMeal } from '@/lib/actions.lib';

import styles from './share-form.module.css'

const ShareForm = () => {
  const [formState, formAction] = useActionState(shareMeal, { message: null })

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="9"
          required
        ></textarea>
      </p>
      <ImagePicker label="Meal Image" name="image" />
      {formState.message && <p>{formState.message}</p>}
      <ShareFormButton />
    </form>
  )
}

export default ShareForm