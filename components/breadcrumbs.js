import { FaChevronRight } from 'react-icons/fa'
import styles from 'styles/breadcrumbs.module.css'

export default function BreadCrumbs({ lists }) {
    if (!lists) {
        return ('')
    }

    return (
        <div className={styles.breadCrumbsContainer}>
            <ol aria-label="breadcrumb" className={styles.flexContainer}>
                {lists.map(({ string, path }, index) => (
                    <li key={index}>
                        {lists.length - 1 !== index
                            ?
                            <>
                                <a href={path}>{string}</a>
                                <FaChevronRight aria-hidden="true" />
                            </>
                            :
                            <span aria-current="page">{string}</span>
                        }
                    </li>
                ))}
            </ol>
        </div>
        
    )
}