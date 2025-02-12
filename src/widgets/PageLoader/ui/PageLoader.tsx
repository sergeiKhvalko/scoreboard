import styles from './PageLoader.module.scss'
import Bricks from '@/shared/assets/icons/bricks.svg'
import cn from 'classnames'

export const PageLoader = () => {
	return (
		<div className={styles.pageLoader}>
			{/* <Bricks /> */}

			<div
				data-v-5f80b8f6=""
				className={cn(
					styles.uiPreloaderDefault,
					styles.totoFrameLoader,
					styles.uiPreloaderDefaultSize,
				)}
			>
				<span
					data-v-5f80b8f6=""
					className={styles.uiPreloaderDefaultBar}
				></span>
				<span
					data-v-5f80b8f6=""
					className={styles.uiPreloaderDefaultBar}
				></span>
				<span
					data-v-5f80b8f6=""
					className={styles.uiPreloaderDefaultBar}
				></span>
				<span
					data-v-5f80b8f6=""
					className={styles.uiPreloaderDefaultBar}
				></span>
				<span
					data-v-5f80b8f6=""
					className={styles.uiPreloaderDefaultBar}
				></span>
			</div>
		</div>
	)
}
