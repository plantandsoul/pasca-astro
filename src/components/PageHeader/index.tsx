import { useId } from 'react';
import pascaLogo from '../../assets/pasca-logo.png';
import styles from './index.module.css';
import { useCheckForOverflow } from './useCheckForOverflow';
import clsx from 'clsx';

type NavItem = {
  href: string;
  label: string;
  parentHref?: string; // TODO(culi): support nested nav items
}

type Props = {
  navItems: Array<NavItem>;
};

type HamburgerProps = {
  className?: string;
  popoverId: string;
}
const Hamburger = ({ className, popoverId }: HamburgerProps) => (
  <button className={`${styles.burger} ${className}`} popoverTarget={popoverId}>
    <div className={styles.ham} />
  </button>
);

const PageHeader = ({ navItems }: Props) => {
  const navDesktopId = useId();
  const [headerRef, isOverflowing,] = useCheckForOverflow(navDesktopId);

  const popoverId = useId();

  return (
    <header
      className={clsx([styles.header, { [styles.isOverflowing]: isOverflowing }])}
      ref={headerRef}
    >
      <a className={styles.logo} href="/">
        <img src={pascaLogo.src} width="95" height="95" alt="PASCA homepage" />
      </a>
      <div className={styles.title}>
        <span>Plant</span>
        <span>& <span>Soul</span></span>
        <span>California</span>
      </div>
      <nav id={navDesktopId} className={styles.navDesktop}>
        {navItems.map(item => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      {isOverflowing && (
        <>
          <Hamburger popoverId={popoverId} />
          <aside popover={""} id={popoverId}>
            <nav className={styles.navDesktop}>
              {navItems.map(item => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};

export default PageHeader;
