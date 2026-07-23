import { use } from 'react'

import Image from 'next/image'

import { getMeal } from '@/lib/meals.lib'
import { imageSizes } from '@/lib/constants.lib'

import styles from './page.module.css'

const MealPage = ({ params }) => {
  // the folder name for the subroute is the param here, meal = id of the meal
  const { meal } = use(params)
  const { title, creator, image, creator_email, summary, instructions } = getMeal(meal)

  // newlines are being ignored, replace with linebreaks
  const formatInstructions = instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} fill alt="Image of the associated meal" sizes={imageSizes} />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: formatInstructions }}></p>
      </main>
    </>
  )
}

export default MealPage