import styles from './Header.module.scss'
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi'
import { FC } from 'react';

interface IProps {
	cartOpen: () => void
	favoriteOpen: () => void
	countCart: number
}

export const Header: FC<IProps> = ({ cartOpen, favoriteOpen, countCart }) => {
	return (
		<header>
			<div className={styles.left}>
				<h2 className={styles.logo}>logo</h2>
			</div>
			<ul className={styles.navigate}>
				<li onClick={cartOpen} className={styles.cart}>
					<FiShoppingCart />
					<span>{countCart}</span>
				</li>
				<li onClick={favoriteOpen}>
					<FiHeart />
				</li>
				<li>
					<FiUser />
				</li>
			</ul>
		</header>
	)
}
